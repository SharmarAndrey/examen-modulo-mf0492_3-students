const fs = require('fs');
const path = require('path');


function logRequest(message) {
	const date = new Date();
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');


	const fileName = `${year}-${month}-${day}.txt`;
	const filePath = path.join(__dirname, '../logs', fileName); // Папка logs

	const logMessage = `[${date.toISOString()}] ${message}\n`;


	fs.appendFile(filePath, logMessage, (err) => {
		if (err) {
			console.error('Error al escribir en el archivo de logs:', err);
		}
	});
}

module.exports = logRequest;
