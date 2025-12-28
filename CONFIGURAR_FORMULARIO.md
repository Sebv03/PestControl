# Configurar Formulario Embebido de GoHighLevel

Los formularios embebidos de GoHighLevel ya están integrados en ambos lugares:
- **LeadCapture** (formulario principal en la página)
- **ContactModal** (formulario en el modal de contacto)

## Pasos para Configurar

### Opción 1: Usar Variable de Entorno (Recomendado)

1. Crea un archivo `.env.local` en la raíz del proyecto
2. Agrega tu código embed:

```env
NEXT_PUBLIC_GOHIGHLEVEL_EMBED_CODE="<iframe src='https://forms.gohighlevel.com/...' width='100%' height='600' frameborder='0'></iframe>"
```

**Nota:** Si tu código embed incluye comillas dobles, escápalas o usa comillas simples en el exterior.

### Opción 2: Editar Directamente el Archivo de Configuración

1. Abre el archivo `lib/gohighlevel-config.ts`
2. Reemplaza la línea del `export const GOHIGHLEVEL_EMBED_CODE` con tu código:

```typescript
export const GOHIGHLEVEL_EMBED_CODE = `<iframe src="https://forms.gohighlevel.com/..." width="100%" height="600" frameborder="0"></iframe>`;
```

## Obtener el Código Embed de GoHighLevel

1. Inicia sesión en tu cuenta de GoHighLevel
2. Ve a **Forms** (Formularios)
3. Selecciona el formulario que quieres usar
4. Busca la opción **Embed** o **Código de inserción**
5. Copia todo el código (puede incluir `<iframe>`, `<script>`, o ambos)
6. Pega el código completo en la configuración

## Reiniciar el Servidor

Después de configurar el embed code, reinicia el servidor de desarrollo:

```bash
npm run dev
```

## Verificar

Una vez configurado, deberías ver tu formulario de GoHighLevel en:
- La sección de contacto principal de la página
- El modal de contacto (al hacer clic en "Servicio de Emergencia" o "Cotizar")

Si no ves el formulario, verifica:
- Que el código embed esté correctamente configurado
- Que no haya errores en la consola del navegador
- Que el servidor se haya reiniciado después de los cambios


