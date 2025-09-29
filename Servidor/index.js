const net = require("net");
const server = net.createServer();
//encender el servidor de sockets
server.on("connection", (socket) => {
  socket.on("data", (data) => {
    //da un mensaje cuando el cliente envia un mensaje
    console.log("Mensaje recibido del cliente: ", data.toString()); //escribe en la consola
    socket.write("Mensaje recibido \n"); //escribe en la consola del cliente
  });
  //da un mensaje cuando el cliente se desconecta
  socket.on("close", () => {
    console.log("Cliente desconectado");
  });
  //da un mensaje cuando hay un error
  socket.on("error", (err) => {
    console.log("Error: ", err);
  });
});

//levanta el servidor
server.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000", server.address().port);
});
