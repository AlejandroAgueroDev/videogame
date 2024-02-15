const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const PORT=3001



conn.sync({ force: false }).then(() => { //*Cambiar el estado de la base de dato
  server.listen(PORT, () => {
    console.log(`Listenig in port: ${PORT}`)
  });
});
