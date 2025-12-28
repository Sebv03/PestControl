/**
 * Cliente helper para GoHighLevel API
 * 
 * Esta función simplifica el envío de formularios a GoHighLevel
 * desde los componentes de React.
 */

export interface SubmitToGHLParams {
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
  address?: string;
  pestType?: string;
  message?: string;
  source?: string;
}

export interface GHLResponse {
  success: boolean;
  message?: string;
  error?: string;
  contactId?: string;
  details?: string;
}

/**
 * Envía los datos del formulario a GoHighLevel a través de nuestra API route
 */
export async function submitToGoHighLevel(
  data: SubmitToGHLParams
): Promise<GHLResponse> {
  try {
    const response = await fetch('/api/gohighlevel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: result.error || 'Error al enviar el formulario',
        details: result.details,
      };
    }

    return {
      success: true,
      message: result.message || 'Formulario enviado correctamente',
      contactId: result.contactId,
    };
  } catch (error) {
    console.error('Error submitting to GoHighLevel:', error);
    return {
      success: false,
      error: 'Error de conexión. Por favor verifica tu internet e intenta de nuevo.',
    };
  }
}

/**
 * Formatea el número de teléfono para GoHighLevel
 * GoHighLevel espera números en formato E.164 (ej: +56912345678)
 */
export function formatPhoneForGHL(phone: string): string {
  // Remover todos los caracteres no numéricos
  let cleaned = phone.replace(/\D/g, '');
  
  // Si empieza con 0, removerlo
  if (cleaned.startsWith('0')) {
    cleaned = cleaned.substring(1);
  }
  
  // Si no tiene código de país, agregar +56 (Chile) o ajustar según tu país
  if (!cleaned.startsWith('56') && !cleaned.startsWith('+56')) {
    cleaned = '56' + cleaned;
  }
  
  // Agregar el + al inicio
  if (!cleaned.startsWith('+')) {
    cleaned = '+' + cleaned;
  }
  
  return cleaned;
}

/**
 * Separa nombre completo en firstName y lastName
 */
export function splitFullName(fullName: string): { firstName: string; lastName: string } {
  const parts = fullName.trim().split(/\s+/);
  const firstName = parts[0] || '';
  const lastName = parts.slice(1).join(' ') || '';
  return { firstName, lastName };
}

