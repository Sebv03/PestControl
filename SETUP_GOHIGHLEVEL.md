# Setup Rápido - Integración GoHighLevel

## 🚀 Pasos Rápidos

### 1. Obtener Credenciales de GoHighLevel

1. **API Key**: Settings → Integrations → API → Generate New API Key
2. **Location ID**: Settings → Locations → [Tu Location] → ID

### 2. Configurar Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
GOHIGHLEVEL_API_KEY=tu_api_key_aqui
GOHIGHLEVEL_LOCATION_ID=tu_location_id_aqui
```

### 3. Reiniciar el Servidor

```bash
npm run dev
```

### 4. Probar

1. Llena el formulario en tu página
2. Verifica que el contacto aparece en GoHighLevel

## 📚 Documentación Completa

Para más detalles, consulta: `GOHIGHLEVEL_INTEGRATION.md`

## ⚠️ Importante

- El archivo `.env.local` NO debe subirse a GitHub
- Nunca compartas tu API Key públicamente
- Reinicia el servidor después de agregar variables de entorno

