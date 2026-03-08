// Desarrolla un script de línea de comandos utilizando Node.js que implemente una versión simplificada del comando ls.
//  El programa debe recibir opcionalmente como argumento la ruta de un directorio (por ejemplo node app.js <directorio>);
//  si no se proporciona, deberá utilizar el directorio actual o raíz. El script debe leer el contenido del directorio utilizando
//  las APIs asíncronas del módulo Node.js fs module, listar todos los archivos y subdirectorios contenidos en él y mostrar
//  por cada elemento una línea con la siguiente información formateada en columnas: tipo ("D" si es directorio o "F" si es archivo),
//  nombre del archivo o directorio alineado a 20 caracteres, tamaño en bytes alineado a la derecha en una columna de 10 caracteres
// y la fecha de última modificación en formato legible. La solución debe procesar los archivos de forma asíncrona y eficiente
// (por ejemplo mediante async/await y Promises), manejar errores adecuadamente en caso de que el directorio no exista o no
// pueda leerse, evitar que el programa termine abruptamente si un archivo individual produce un error durante la lectura
//  de sus metadatos, y finalmente imprimir en consola la lista resultante con una línea por cada elemento encontrado en el directorio.

// SOLUCIÓN # 1

const fs = require("node:fs/promises");
const path = require("node:path");

const folder = process.argv[2] ?? ".";

async function comandLs(nameDir) {
  try {
    const entries = await fs.readdir(nameDir, { withFileTypes: true });
    const results = await Promise.all(
      entries.map(async (file) => {
        const filePath = path.join(nameDir, file.name);
        let stats;
        try {
          stats = await fs.stat(filePath);
        } catch (err) {
          console.error(
            `No se puede leer el fichero: ${file.name}:${err.message}`,
          );
          return null;
        }

        const typeFile = file.isDirectory() ? "D" : "F";
        const size = stats.size.toString().padStart(10);
        const modified = stats.mtime.toLocaleString();

        return `${typeFile} ${file.name.padEnd(20)} ${size} ${modified}`;
      }),
    );

    results.filter(Boolean).forEach((line) => console.log(line));
  } catch (err) {
    console.error(`No se puede leer el directorio: ${nameDir}`);
    process.exit(1);
  }
}

comandLs(folder);

// SOLUCIÓN # 2

// const fs = require("node:fs/promises");
// const path = require("node:path");

// const folder = process.argv[2] ?? ".";

// async function comandoLs(nameFolder) {
//   let files;
//   try {
//     // RETORNA UN ARRAY CON TODOS LOS FICHEROS QUE ESTÁN DENTRO DEL DIRECTORIO
//     files = await fs.readdir(nameFolder);
//   } catch {
//     console.error(`No se puedo leer el directorio: , ${nameFolder}`);
//     process.exit(1);
//   }

//   const filePromises = files.map(async (file) => {
//     // Muestra el nombre del directorio y el nombre del fichero
//     const filePath = path.join(folder, file);
//     let stats;
//     try {
//       stats = await fs.stat(filePath);
//     } catch {
//       console.error(`No se puede leer el archivo: ${filePath}`);
//       process.exit(1);
//     }
//     const isDirectory = stats.isDirectory();
//     const fileType = isDirectory ? "D" : "F";
//     const fileSize = stats.size;
//     const fileModified = stats.mtime.toLocaleString();

//     return `${fileType} ${file.padEnd(20)} ${fileSize.toString().padStart(10)} ${fileModified}`;
//   });

//   const filesInfo = await Promise.all(filePromises);

//   filesInfo.forEach((file) => {
//     console.log(file);
//   });
// }

// comandoLs(folder);
