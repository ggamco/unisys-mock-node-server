var http = require('http');
var server = http.createServer();

function mensaje(request, response) {
    response.writeHead(200, {'content-type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:4200'});
    response.write('{"coord":{"lon":-5.4505,"lat":36.1333},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"base":"stations","main":{"temp":293.97,"feels_like":293.88,"temp_min":293.97,"temp_max":293.97,"pressure":1014,"humidity":68},"visibility":10000,"wind":{"speed":4.63,"deg":40},"rain":{"1h":0.1},"clouds":{"all":100},"dt":1686146710,"sys":{"type":1,"id":7026,"country":"ES","sunrise":1686114289,"sunset":1686166599},"timezone":7200,"id":2522013,"name":"Algeciras","cod":200}');
    response.end();
}

server.on('request', mensaje);

server.listen(3000, function() {
    console.log('La aplicacion está funcionando en el puerto 3000')
});