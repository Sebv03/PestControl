# Script para iniciar el servidor de desarrollo
# Este script maneja mejor las rutas con espacios

$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptPath

Write-Host "Iniciando servidor de desarrollo Next.js..." -ForegroundColor Green

# Intentar usar npm run dev primero
try {
    npm run dev
} catch {
    Write-Host "Error con npm run dev, intentando con node directamente..." -ForegroundColor Yellow
    node node_modules/next/dist/bin/next dev
}

