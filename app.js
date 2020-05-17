// // const path = require("path");
// var express = require("express");
// var bodyParser = require("body-parser");
// const ngrok = require("ngrok");
// var app = express();
// var port = process.env.PORT || 3000;
// var ip = process.env.IP || "127.0.0.1";
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// // // SE LE DICE AL SERVIDOR QUE ME CREE UNA CARPETA Y ALMACENE LOS ESTILOS
// // app.use("/cssFiles", express.static(__dirname + "/public/style"));
// // // SE LE DICE AL SERVIDOR QUE ME CREE UNA CARPETA Y ALMACENE LOS SCRIPT
// app.use("/jsFiles", express.static(__dirname + "/public/js"));
// // // SE LE DICE AL SERVIDOR QUE ME CREE UNA CARPETA Y ALMACENE LOS html
// // app.use("/htmlFiles", express.static(__dirname + "/views"));
// // // SE ACCEDE AL HTML
// // app.get("/", function(req, resp) {
// //   resp.sendfile("index.html", { root: path.join(__dirname, "./views") });
// // });

// app.listen(port, ip);
// (async function() {
//   const url = await ngrok.connect(port);
//   console.log(url);
// })();
