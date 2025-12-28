import { NextRequest, NextResponse } from 'next/server';

/**
 * API Route para enviar formularios a GoHighLevel
 * 
 * Esta ruta recibe los datos del formulario y los envía a GoHighLevel
 * usando su API REST.
 */

interface GHLFormData {
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
  address?: string;
  pestType?: string;
  message?: string;
  source?: string; // De dónde viene el lead (formulario principal, modal, etc.)
}

export async function POST(request: NextRequest) {
  try {
    const body: GHLFormData = await request.json();

    // Validar campos requeridos
    if (!body.firstName || !body.email || !body.phone) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos: nombre, email y teléfono son obligatorios' },
        { status: 400 }
      );
    }

    // Obtener credenciales de GoHighLevel desde variables de entorno
    const apiKey = process.env.GOHIGHLEVEL_API_KEY;
    const locationId = process.env.GOHIGHLEVEL_LOCATION_ID;

    if (!apiKey || !locationId) {
      console.error('GoHighLevel credentials not configured');
      return NextResponse.json(
        { error: 'Configuración del servidor incompleta. Por favor contacta al administrador.' },
        { status: 500 }
      );
    }

    // Preparar datos para GoHighLevel
    // GoHighLevel espera firstName y lastName por separado
    const nameParts = body.firstName.trim().split(' ');
    const firstName = nameParts[0] || body.firstName;
    const lastName = nameParts.slice(1).join(' ') || body.lastName || '';

    // Preparar el payload para GoHighLevel API
    const ghlPayload = {
      firstName: firstName,
      lastName: lastName,
      email: body.email,
      phone: body.phone,
      address1: body.address || '',
      // Campos personalizados (custom fields)
      customField: {
        // Si tienes campos personalizados en GoHighLevel, agrégalos aquí
        // Ejemplo: 'Tipo de Plaga': body.pestType
      },
      // Tags para identificar el origen del lead
      tags: [
        'Website Lead',
        body.source || 'Form Submission',
        body.pestType ? `Pest Type: ${body.pestType}` : null,
      ].filter(Boolean) as string[],
      // Notas adicionales
      notes: body.message 
        ? `Mensaje: ${body.message}\nTipo de Plaga: ${body.pestType || 'No especificado'}`
        : `Tipo de Plaga: ${body.pestType || 'No especificado'}`,
      // Source tracking
      source: 'Website',
    };

    // Llamar a la API de GoHighLevel
    // Endpoint: https://services.leadconnectorhq.com/contacts/
    const ghlResponse = await fetch(
      `https://services.leadconnectorhq.com/contacts/?locationId=${locationId}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'Version': '2021-07-28',
        },
        body: JSON.stringify(ghlPayload),
      }
    );

    if (!ghlResponse.ok) {
      const errorData = await ghlResponse.text();
      console.error('GoHighLevel API Error:', errorData);
      
      return NextResponse.json(
        { 
          error: 'Error al enviar los datos. Por favor intenta de nuevo o contacta directamente.',
          details: process.env.NODE_ENV === 'development' ? errorData : undefined
        },
        { status: ghlResponse.status }
      );
    }

    const ghlData = await ghlResponse.json();

    // Opcional: Agregar el contacto a una oportunidad o pipeline
    // Si tienes un pipeline configurado en GoHighLevel, puedes crear una oportunidad aquí
    if (process.env.GOHIGHLEVEL_PIPELINE_ID) {
      try {
        await fetch(
          `https://services.leadconnectorhq.com/opportunities/?locationId=${locationId}`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${apiKey}`,
              'Content-Type': 'application/json',
              'Version': '2021-07-28',
            },
            body: JSON.stringify({
              contactId: ghlData.contact?.id,
              pipelineId: process.env.GOHIGHLEVEL_PIPELINE_ID,
              pipelineStageId: process.env.GOHIGHLEVEL_PIPELINE_STAGE_ID || null,
              title: `Nuevo Lead - ${body.pestType || 'Control de Plagas'}`,
              monetaryValue: 0,
            }),
          }
        );
      } catch (opportunityError) {
        // No fallar si la oportunidad no se puede crear
        console.warn('Could not create opportunity:', opportunityError);
      }
    }

    return NextResponse.json(
      { 
        success: true,
        message: 'Formulario enviado correctamente. Te contactaremos pronto.',
        contactId: ghlData.contact?.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { 
        error: 'Error interno del servidor. Por favor intenta más tarde.',
        details: process.env.NODE_ENV === 'development' ? String(error) : undefined
      },
      { status: 500 }
    );
  }
}

// Método GET para verificar que la ruta funciona (opcional, para testing)
export async function GET() {
  return NextResponse.json(
    { 
      message: 'GoHighLevel API endpoint is active',
      configured: !!(process.env.GOHIGHLEVEL_API_KEY && process.env.GOHIGHLEVEL_LOCATION_ID)
    },
    { status: 200 }
  );
}

