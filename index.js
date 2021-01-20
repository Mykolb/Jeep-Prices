const server = require('./api/server');
const secrets = require('./secrets');

const port = secrets.PORT
server.listen(port, () => {
    console.log(`*** Server is listening on port ${port}***`)
})










