"use client";

import React, { useEffect, useRef } from 'react';

interface GoHighLevelFormProps {
  embedCode?: string;
  className?: string;
}

/**
 * Componente para renderizar formularios embebidos de GoHighLevel
 * 
 * Uso:
 * <GoHighLevelForm 
 *   embedCode="<iframe src='...'></iframe>" 
 *   className="custom-class"
 * />
 */
const GoHighLevelForm: React.FC<GoHighLevelFormProps> = ({ 
  embedCode, 
  className = "" 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptsLoadedRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (!embedCode || !containerRef.current) return;

    const container = containerRef.current;
    
    // Limpiar contenido anterior
    container.innerHTML = '';

    // Extraer scripts del embed code
    const scriptRegex = /<script[^>]*>[\s\S]*?<\/script>/gi;
    const scripts: string[] = [];
    let htmlWithoutScripts = embedCode.replace(scriptRegex, (match) => {
      scripts.push(match);
      return '';
    });

    // Insertar HTML sin scripts primero
    container.innerHTML = htmlWithoutScripts;
    
    // Ajustar altura del iframe si existe
    const iframe = container.querySelector('iframe');
    if (iframe) {
      // Usar la altura del data-height o una altura mínima
      const dataHeight = iframe.getAttribute('data-height');
      const isMobile = window.innerWidth < 640;
      const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;
      
      if (dataHeight) {
        const originalHeight = parseInt(dataHeight);
        let height = originalHeight;
        
        // Ajustar altura según el tamaño de pantalla - más conservador
        if (isMobile) {
          // En móvil, reducir significativamente
          height = Math.min(originalHeight, 550);
        } else if (isTablet) {
          // En tablet, reducir moderadamente
          height = Math.min(originalHeight, 650);
        } else {
          // En desktop, reducir un poco para mejor visualización
          height = Math.min(originalHeight, 700);
        }
        
        iframe.style.height = `${height}px`;
        iframe.style.minHeight = `${height}px`;
        iframe.style.maxHeight = `${height}px`;
      } else {
        // Altura por defecto según tamaño de pantalla
        if (isMobile) {
          iframe.style.minHeight = '450px';
          iframe.style.height = '450px';
        } else if (isTablet) {
          iframe.style.minHeight = '550px';
          iframe.style.height = '550px';
        } else {
          iframe.style.minHeight = '650px';
          iframe.style.height = '650px';
        }
      }
      iframe.style.width = '100%';
      iframe.style.maxWidth = '100%';
      iframe.style.border = 'none';
      iframe.style.display = 'block';
    }
    
    // Ajustar el contenedor al tamaño del iframe
    if (container && iframe) {
      container.style.height = 'auto';
      container.style.minHeight = 'auto';
    }

    // Cargar scripts después de que el HTML esté en el DOM
    scripts.forEach((scriptHtml) => {
      const tempScriptDiv = document.createElement('div');
      tempScriptDiv.innerHTML = scriptHtml;
      const scriptElement = tempScriptDiv.querySelector('script');
      
      if (scriptElement) {
        const src = scriptElement.getAttribute('src');
        
        // Evitar cargar el mismo script externo múltiples veces
        if (src && scriptsLoadedRef.current.has(src)) {
          return;
        }

        const newScript = document.createElement('script');
        
        // Copiar todos los atributos
        Array.from(scriptElement.attributes).forEach((attr) => {
          newScript.setAttribute(attr.name, attr.value);
        });
        
        // Copiar contenido si es script inline
        if (!src && scriptElement.textContent) {
          newScript.textContent = scriptElement.textContent;
        }

        // Manejar carga del script externo
        if (src) {
          newScript.onload = () => {
            scriptsLoadedRef.current.add(src);
          };
          newScript.onerror = () => {
            console.error('Error loading script:', src);
          };
          // Scripts externos van al head
          document.head.appendChild(newScript);
        } else {
          // Scripts inline van al contenedor
          container.appendChild(newScript);
        }
      }
    });

    // Cleanup function
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [embedCode]);

  if (!embedCode) {
    return (
      <div className={`p-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 text-center ${className}`}>
        <p className="text-gray-500">Por favor, proporciona el código embed de GoHighLevel</p>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className={`gohl-form-container ${className}`}
      style={{ 
        width: '100%',
        position: 'relative',
        overflow: 'visible',
        height: 'auto',
        minHeight: 'auto'
      }}
    />
  );
};

export default GoHighLevelForm;

