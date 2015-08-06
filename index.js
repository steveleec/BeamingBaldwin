var app = require('./server/server.js');

app.listen(process.env.BBSERVERPORT || 8000);
