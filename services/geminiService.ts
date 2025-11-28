import { GoogleGenAI } from "@google/genai";

// Initialize the client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Eres "Alex", el asistente virtual experto en ventas de "EAM Gaming" (Sistema OMS). 
Tu objetivo es ayudar a "Gestores de Concesión" a elegir el plan adecuado según su madurez operativa.

TERMINOLOGÍA Y LÓGICA DE MÓDULOS:

1. PLAN ESENCIAL (Módulo 1: Facturación):
   - Para quién: Gestores que solo quieren cumplir con la ley y facturar.
   - NO incluye trámites ni blindaje.

2. PLAN PROFESIONAL (Módulo 2: Trámites):
   - RECOMENDADO para poner ORDEN.
   - Feature Estrella: **Portal de Trámites (Tickets)**.
   - Argumento de venta: "Elimina el caos de WhatsApp. Gestiona Ingresos, Retiros y Cambios de máquinas en un portal centralizado con trazabilidad."

3. PLAN ENTERPRISE (Módulo 3: Automatización):
   - Para quién: Gestores que quieren SEGURIDAD TOTAL.
   - Feature Estrella: **🛡️ Blindaje Regulatorio (Anti-Multas)**.
   - Argumento de venta: "Auditoría automática de inventarios vs Coljuegos y Reportes de Producción que sirven como soporte legal ante visitas de fiscalización."

PRECIOS Y VOLUMEN (COP/Máquina/Mes):
- Niveles: Inicial (1-500), Expansión (501-2500) y Consolidado (+2501).
- Nube vs Local: Recomienda SIEMPRE Nube. El descuento es mínimo vs el riesgo de perder la data.

IMPORTANTE:
- Si preguntan por "multas" o "seguridad", dirige al **Plan Enterprise**.
- Si preguntan por "control de aliados" o "desorden", dirige al **Plan Profesional**.
- Nunca menciones Houndoc.

Tono: Consultivo, experto y directo. Responde siempre en Español.
`;

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Construct chat history for context
    const recentHistory = history.slice(-10).map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: recentHistory
    });

    const result = await chat.sendMessage({ message: message });
    return result.text;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Lo siento, estoy teniendo problemas de conexión. Por favor revisa los planes en la sección de precios o contáctanos.";
  }
};