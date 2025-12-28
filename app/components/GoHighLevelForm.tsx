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
      if (dataHeight) {
        iframe.style.height = `${dataHeight}px`;
        iframe.style.minHeight = `${dataHeight}px`;
      } else {
        iframe.style.minHeight = '600px';
      }
      iframe.style.width = '100%';
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
        minHeight: '600px', 
        height: '100%',
        width: '100%',
        position: 'relative'
      }}
    />
  );
};

export default GoHighLevelForm;

