/**
 * Configuración para formularios embebidos de GoHighLevel
 * 
 * Para usar: Reemplaza el valor de GOHIGHLEVEL_EMBED_CODE con tu código embed
 * que obtienes desde tu cuenta de GoHighLevel.
 * 
 * El código embed generalmente se ve así:
 * <iframe src="https://forms.gohighlevel.com/..." ...></iframe>
 * o puede incluir scripts adicionales
 */

// Embed code del formulario de GoHighLevel
// Puedes usar variable de entorno o configurarlo directamente aquí
export const GOHIGHLEVEL_EMBED_CODE = process.env.NEXT_PUBLIC_GOHIGHLEVEL_EMBED_CODE || `<iframe
    src="https://api.leadconnectorhq.com/widget/form/P7FM7xhO40AGUyVZpmtG"
    style="width:100%;height:100%;border:none;border-radius:4px"
    id="inline-P7FM7xhO40AGUyVZpmtG" 
    data-layout="{'id':'INLINE'}"
    data-trigger-type="alwaysShow"
    data-trigger-value=""
    data-activation-type="alwaysActivated"
    data-activation-value=""
    data-deactivation-type="neverDeactivate"
    data-deactivation-value=""
    data-form-name="Servicio"
    data-height="873"
    data-layout-iframe-id="inline-P7FM7xhO40AGUyVZpmtG"
    data-form-id="P7FM7xhO40AGUyVZpmtG"
    title="Servicio"
        >
</iframe>
<script src="https://link.msgsndr.com/js/form_embed.js"></script>`;

// Si prefieres poner el código directamente aquí (no recomendado para producción),
// puedes hacerlo así:
// export const GOHIGHLEVEL_EMBED_CODE = `<iframe src="https://forms.gohighlevel.com/..." ...></iframe>`;

