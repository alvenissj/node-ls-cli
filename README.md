# 📂 Implementación del comando `ls` en Node.js

![Node](https://img.shields.io/badge/Node.js-18+-green)
![Async](https://img.shields.io/badge/Async-await-blue)
![CLI](https://img.shields.io/badge/CLI-Tool-orange)

Este proyecto implementa una **versión simplificada del comando `ls` de
sistemas Unix** utilizando Node.js.

El objetivo del ejercicio es demostrar el uso de:

- APIs asíncronas del sistema de archivos
- Promesas y `async/await`
- procesamiento concurrente de archivos
- manejo robusto de errores
- formateo de salida para herramientas CLI

---

# 🚀 Descripción del ejercicio

El programa implementa una herramienta de línea de comandos que permite
listar el contenido de un directorio mostrando información relevante de
cada archivo o subdirectorio.

Para cada elemento encontrado se muestra:

- Tipo (`D` para directorio, `F` para archivo)
- Nombre del archivo o directorio
- Tamaño en bytes
- Fecha de última modificación

Este ejercicio simula el comportamiento básico del comando `ls`
utilizado en sistemas tipo Unix.

---

# ⚙️ Tecnologías utilizadas

- JavaScript
- Node.js
- Módulo `fs/promises`
- Módulo `path`

---

# ▶️ Uso

Ejecuta el script desde la terminal:

```bash
node app.js <directorio>
```

Ejemplo:

```bash
node app.js ./CarpetaMuestra
```

Si no se proporciona un directorio, el programa utilizará el
**directorio actual**.

```bash
node app.js
```

---

# 🖥 Ejemplo de salida

    F app.js                   4096  8/3/2026, 14:30:21
    F package.json             5120  8/3/2026, 13:10:12
    D CarpetaMuestra           4096  7/3/2026, 18:20:45

### Descripción de columnas

Columna Descripción

---

Tipo `D` si es directorio, `F` si es archivo
Nombre Nombre del archivo o directorio
Tamaño Tamaño del archivo en bytes
Modificado Fecha de última modificación

---

# 🧠 Conceptos de ingeniería aplicados

Este ejercicio demuestra varias prácticas importantes en desarrollo
backend con Node.js:

### Uso de APIs asíncronas

Se utilizan funciones del módulo `fs/promises` para evitar bloquear el
event loop.

    fs.readdir()
    fs.stat()

### Procesamiento concurrente

Los archivos se procesan en paralelo utilizando:

    Promise.all()

Esto mejora el rendimiento cuando el directorio contiene múltiples
archivos.

### Uso de `withFileTypes`

La opción:

    fs.readdir(dir, { withFileTypes: true })

permite obtener objetos `Dirent`, lo que hace posible determinar si un
elemento es un directorio sin realizar llamadas adicionales al sistema.

---

# 📁 Estructura del proyecto

    node-ls-cli
    │
    |__ CarpetaMuestra
    ├── app.js
    ├── README.md
    └── package.json

---

# 🔧 Posibles mejoras

Algunas mejoras que podrían implementarse en versiones futuras:

- Mostrar archivos ocultos (`-a`)
- Mostrar tamaños en formato legible (`-h`)
- Ordenar resultados
- Colorear la salida en terminal
- Limitar concurrencia para directorios muy grandes
- Empaquetar la herramienta como CLI global de npm

---

# 🎯 Objetivo educativo

Este proyecto es un **ejercicio técnico típico de entrevistas para
ingenieros de software**, enfocado en evaluar:

- manejo de asincronía en Node.js
- comprensión del sistema de archivos
- calidad de código
- diseño de herramientas CLI

---
