// Importer le module http
const http = require('http');

// Configuration du port
const port = 3000;

// Création du serveur HTTP
const server = http.createServer((req, res) => {
  // En-têtes de la réponse HTTP
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Message à afficher
  res.end('Hello, World!\n');
});

// Démarrage du serveur sur le port spécifié
server.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});
