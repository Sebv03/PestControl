# Guía de Integración con GoHighLevel

Esta guía te explica cómo conectar tu página Next.js con GoHighLevel para capturar leads automáticamente.

## 📋 Tabla de Contenidos

1. [Requisitos Previos](#requisitos-previos)
2. [Configuración en GoHighLevel](#configuración-en-gohighlevel)
3. [Configuración en tu Proyecto](#configuración-en-tu-proyecto)
4. [Cómo Funciona](#cómo-funciona)
5. [Pruebas](#pruebas)
6. [Solución de Problemas](#solución-de-problemas)
7. [Automatizaciones Recomendadas](#automatizaciones-recomendadas)

---

## 🔧 Requisitos Previos

- Cuenta activa de GoHighLevel
- Proyecto Next.js configurado y funcionando
- Acceso a variables de entorno (archivo `.env.local`)

---

## 🚀 Configuración en GoHighLevel

### Paso 1: Obtener tu API Key

1. Inicia sesión en tu cuenta de GoHighLevel
2. Ve a **Settings** (Configuración) → **Integrations** (Integraciones)
3. Busca **"API"** o **"API Keys"**
4. Haz clic en **"Generate New API Key"** o **"Create API Key"**
5. Copia la API Key generada (guárdala de forma segura, no la compartas)

**Nota**: La API Key generalmente tiene un formato como: `Bearer xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`

### Paso 2: Obtener tu Location ID

1. En GoHighLevel, ve a **Settings** → **Locations** (Ubicaciones)
2. Selecciona tu ubicación principal
3. El Location ID generalmente aparece en la URL o en la configuración de la ubicación
4. Copia el Location ID (es un string alfanumérico)

**Alternativa**: También puedes encontrar el Location ID en la URL cuando estás en la configuración de tu ubicación:
```
https://app.gohighlevel.com/location/[LOCATION_ID]/...
```

### Paso 3: (Opcional) Configurar Pipeline para Oportunidades

Si quieres que los leads se agreguen automáticamente a un pipeline:

1. Ve a **Sales** → **Pipelines** (o **Oportunidades**)
2. Crea o selecciona un pipeline (ej: "Nuevos Leads")
3. Copia el **Pipeline ID**
4. Selecciona la etapa inicial (ej: "Nuevo Lead")
5. Copia el **Stage ID**

---

## ⚙️ Configuración en tu Proyecto

### Paso 1: Crear archivo de variables de entorno

1. En la raíz de tu proyecto, crea un archivo llamado `.env.local`
2. Copia el contenido de `.env.example` y completa con tus credenciales:

```env
GOHIGHLEVEL_API_KEY=tu_api_key_aqui
GOHIGHLEVEL_LOCATION_ID=tu_location_id_aqui

# Opcional
GOHIGHLEVEL_PIPELINE_ID=tu_pipeline_id_aqui
GOHIGHLEVEL_PIPELINE_STAGE_ID=tu_stage_id_aqui
```

**⚠️ IMPORTANTE**: 
- El archivo `.env.local` está en `.gitignore` y NO debe subirse a GitHub
- Nunca compartas tus credenciales públicamente

### Paso 2: Verificar que las variables se cargan

1. Reinicia tu servidor de desarrollo:
   ```bash
   npm run dev
   ```

2. Verifica que no hay errores en la consola

### Paso 3: Probar la integración

1. Abre tu página en el navegador
2. Llena el formulario de contacto
3. Envía el formulario
4. Verifica en GoHighLevel que el contacto se creó correctamente

---

## 🔄 Cómo Funciona

### Flujo de Datos

```
1. Usuario llena formulario en tu página
   ↓
2. Componente React captura los datos
   ↓
3. Se llama a submitToGoHighLevel() (lib/gohighlevel.ts)
   ↓
4. Se envía POST a /api/gohighlevel (API route de Next.js)
   ↓
5. API route valida y formatea los datos
   ↓
6. Se hace request a GoHighLevel API
   ↓
7. GoHighLevel crea el contacto
   ↓
8. (Opcional) Se crea una oportunidad en el pipeline
   ↓
9. Se retorna respuesta al frontend
   ↓
10. Usuario ve mensaje de éxito
```

### Archivos Involucrados

- **`app/api/gohighlevel/route.ts`**: API route que se comunica con GoHighLevel
- **`lib/gohighlevel.ts`**: Funciones helper para enviar datos desde componentes
- **`app/components/LeadCapture.tsx`**: Formulario principal de captura
- **`app/components/ContactModal.tsx`**: Modal de contacto

### Datos que se Envían

Los siguientes datos se envían a GoHighLevel:

- **firstName**: Nombre del contacto
- **lastName**: Apellido del contacto
- **email**: Correo electrónico
- **phone**: Teléfono (formateado automáticamente)
- **address**: Dirección (opcional)
- **pestType**: Tipo de plaga (opcional)
- **message**: Mensaje adicional (opcional)
- **tags**: Tags automáticos como "Website Lead", "Form Submission", etc.
- **notes**: Notas con información adicional del lead

---

## 🧪 Pruebas

### Prueba 1: Verificar que la API route funciona

1. Abre en tu navegador: `http://localhost:3000/api/gohighlevel`
2. Deberías ver un JSON con:
   ```json
   {
     "message": "GoHighLevel API endpoint is active",
     "configured": true
   }
   ```

### Prueba 2: Enviar un formulario de prueba

1. Llena el formulario con datos de prueba
2. Envía el formulario
3. Verifica en GoHighLevel que el contacto se creó
4. Revisa que los tags y notas se agregaron correctamente

### Prueba 3: Verificar manejo de errores

1. Desactiva temporalmente tu API Key en `.env.local`
2. Intenta enviar un formulario
3. Deberías ver un mensaje de error apropiado

---

## 🔍 Solución de Problemas

### Error: "Configuración del servidor incompleta"

**Causa**: Las variables de entorno no están configuradas correctamente.

**Solución**:
1. Verifica que el archivo `.env.local` existe en la raíz del proyecto
2. Verifica que las variables tienen los nombres correctos (sin espacios)
3. Reinicia el servidor de desarrollo (`npm run dev`)

### Error: "Error al enviar los datos"

**Causa**: Problema con las credenciales de GoHighLevel o la API.

**Solución**:
1. Verifica que tu API Key es correcta y está activa
2. Verifica que el Location ID es correcto
3. Revisa la consola del servidor para ver el error detallado
4. Verifica que tu cuenta de GoHighLevel tiene permisos de API habilitados

### Error: "Error de conexión"

**Causa**: Problema de red o el servidor de GoHighLevel no está disponible.

**Solución**:
1. Verifica tu conexión a internet
2. Intenta de nuevo en unos minutos
3. Verifica el estado de GoHighLevel en su página de estado

### Los contactos no aparecen en GoHighLevel

**Causa**: Los datos no se están enviando correctamente.

**Solución**:
1. Abre las herramientas de desarrollador (F12) → Pestaña "Network"
2. Envía el formulario
3. Busca la petición a `/api/gohighlevel`
4. Revisa la respuesta para ver el error específico
5. Verifica los logs del servidor (terminal donde corre `npm run dev`)

### El teléfono no se formatea correctamente

**Causa**: El formato del teléfono no coincide con el esperado.

**Solución**:
1. La función `formatPhoneForGHL()` en `lib/gohighlevel.ts` formatea automáticamente
2. Si necesitas ajustar el formato, edita esa función
3. Por defecto, asume formato chileno (+56). Ajusta según tu país

---

## 🎯 Automatizaciones Recomendadas en GoHighLevel

Una vez que los leads lleguen a GoHighLevel, configura estas automatizaciones:

### 1. Email de Confirmación Inmediata

**Trigger**: Nuevo contacto creado
**Acción**: Enviar email de bienvenida
**Contenido sugerido**:
```
Asunto: ¡Gracias por contactarnos! - Inspección Gratuita

Hola [Nombre],

Hemos recibido tu solicitud de inspección gratuita. 
Un técnico te contactará en las próximas 15 minutos.

Mientras tanto, puedes llamarnos al [Tu Teléfono]

Saludos,
Equipo Pest Control
```

### 2. Notificación al Equipo

**Trigger**: Nuevo contacto creado con tag "Website Lead"
**Acción**: Enviar SMS/Email al equipo
**Contenido sugerido**:
```
Nuevo lead de Control de Plagas:
Nombre: [Nombre]
Teléfono: [Teléfono]
Tipo: [Tipo de Plaga]
Contactar inmediatamente
```

### 3. Secuencia de Seguimiento

**Día 1 (Inmediato)**: Email de confirmación
**Día 2**: Email con información sobre el tipo de plaga
**Día 3**: Llamada telefónica automática (si no se ha contactado)
**Día 5**: Email con testimonios y casos de éxito

### 4. Asignación Automática

**Trigger**: Nuevo contacto creado
**Acción**: Asignar a un usuario/equipo específico
**Condición**: Basado en el tipo de plaga o ubicación

### 5. Crear Oportunidad Automáticamente

Si configuraste el Pipeline ID en las variables de entorno, los leads se agregarán automáticamente a tu pipeline. Si no, puedes crear una automatización en GoHighLevel:

**Trigger**: Nuevo contacto creado
**Acción**: Crear oportunidad en pipeline "Nuevos Leads"
**Valor estimado**: Basado en el tipo de servicio

---

## 📊 Campos Personalizados en GoHighLevel

Si quieres capturar información adicional, puedes agregar campos personalizados en GoHighLevel:

1. Ve a **Settings** → **Custom Fields**
2. Crea campos personalizados como:
   - "Tipo de Plaga" (dropdown)
   - "Dirección del Problema" (text)
   - "Urgencia" (dropdown)
3. Actualiza el código en `app/api/gohighlevel/route.ts` para mapear estos campos

Ejemplo de mapeo:
```typescript
customField: {
  'Tipo de Plaga': body.pestType,
  'Dirección': body.address,
}
```

---

## 🔒 Seguridad

### Buenas Prácticas

1. **Nunca expongas tu API Key** en el código del frontend
2. **Usa variables de entorno** para todas las credenciales
3. **Mantén `.env.local` en `.gitignore`**
4. **Rota tu API Key** periódicamente
5. **Usa HTTPS** en producción

### Validación

El código ya incluye validación básica:
- Campos requeridos (nombre, email, teléfono)
- Formato de email
- Manejo de errores

Puedes agregar validación adicional según tus necesidades.

---

## 📚 Recursos Adicionales

- [Documentación de GoHighLevel API](https://highlevel.stoplight.io/docs/integrations)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [GoHighLevel Help Center](https://help.gohighlevel.com)

---

## ✅ Checklist de Configuración

- [ ] API Key de GoHighLevel obtenida
- [ ] Location ID obtenido
- [ ] Archivo `.env.local` creado con credenciales
- [ ] Servidor reiniciado después de agregar variables de entorno
- [ ] Prueba de formulario exitosa
- [ ] Contacto aparece en GoHighLevel
- [ ] Automatizaciones configuradas en GoHighLevel
- [ ] Pipeline configurado (opcional)
- [ ] Email de confirmación funcionando
- [ ] Notificaciones al equipo funcionando

---

## 🆘 Soporte

Si tienes problemas con la integración:

1. Revisa la sección de [Solución de Problemas](#solución-de-problemas)
2. Verifica los logs del servidor
3. Revisa la documentación de GoHighLevel API
4. Contacta al soporte de GoHighLevel si el problema es con su API

---

¡Listo! Tu página ahora está conectada a GoHighLevel y capturará leads automáticamente. 🎉

