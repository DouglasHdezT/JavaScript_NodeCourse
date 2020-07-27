/**
 * Promises to write a File
 */

const fs = require("fs");

const appendInFile = text => { 
	return new Promise((resolve, reject) => { 
		try {
			fs.writeFileSync("./result.txt", text, { flag: "a" });
			resolve();
		} catch{ 
			reject(new Error("Falló al escribir en el archivo"));
		}
	});
}

appendInFile("Mucho texto\n")
	.then(() => { 
		console.log("¡Archivo escrito correctamente!")
	})
	.catch(err => { 
	})