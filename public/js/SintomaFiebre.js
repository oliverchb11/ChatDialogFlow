var express = require("express");
var bodyParser = require("body-parser");
const ngrok = require("ngrok");
var app = express();
var port = process.env.PORT || 3000;
var ip = process.env.IP || "127.0.0.1";
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

////////////////////////////////////////////////////////////////
app.post("/", function(req, res) {
  if (req.body.queryResult.action == "sintoma") {
    let sintoma1 = String(req.body.queryResult.parameters.sintoma1);
    let sintoma = sintoma1;
    response =
      "tienes fiebre, Mucho cuidado tienes que revisar si tu temperatura es mayor de 38 grados, en caso de que si ,tomar acetaminofeno (Tylenol, entre otros), ibuprofeno (Advil, Motrin IB, entre otros) o aspirina. Lee la etiqueta atentamente para saber la dosis adecuada, y ten cuidado de no tomar más de un medicamento que contenga acetaminofeno, como algunos antigripales o medicamentos para la tos. Llama al médico si la fiebre no baja con la medicación, si se mantiene constante a 103 °F (39,4 °C) o más, o si dura más de tres días. y si tienes otros sintomas llama a la linea de atencion:";
    console.log("el sintoma que tienes es :", response);
    res.json({
      fulfillmentText: response
    });
  } else if (req.body.queryResult.action == "sintomagripa") {
    let sintoma2 = String(req.body.queryResult.parameters.sintoma2);
    let sintomagripa = sintoma2;
    response =
      "tienes GRIPA, Mucho cuidado tienes que tener buena ventilación de la estancia donde más tiempo pase el paciente con gripe es fundamental para mantener correctamente las medidas higiénicas que recomiendan las autoridades sanitarias. “Si hay aire muy concentrado y no circula, aumenta el riesgo de contagio. La ventilación se lleva las partículas con el virus”, señala Trilla.  y si tienes otros sintomas llama a la linea de atencion:";
    console.log("el sintoma que tienes es :", response);
    res.json({
      fulfillmentText: response
    });
  } else if (req.body.queryResult.action == "sintomatos") {
    let sintoma3 = String(req.body.queryResult.parameters.sintoma3);
    let sintomatos = sintoma3;
    response =
      "tienes TOS , tienes que Taparse la boca al toser o estornudar. Y a ser posible, con cualquier cosa que no sea la mano. El virus de la gripe se contagia por vía aérea, a través de pequeñas gotas que se expulsan al toser o al estornudar, por lo que es preciso taparse para evitar el contagio de más personas. Los expertos señalan que lo mejor es cubrirse la nariz y la boca con un pañuelo de un solo uso y luego tirarlo. A falta de esto, mejor la manga del brazo que la mano. “Si te tapas con las manos tienes que ir rápidamente a lavártelas con agua y jabón”, apostilla el epidemiólogo del Clínic.  y si tienes otros sintomas llama a la linea de atencion:";
    console.log("el sintoma que tienes es :", response);
    res.json({
      fulfillmentText: response
    });
  } else if (req.body.queryResult.action == "medidauno") {
    let medida1 = String(req.body.queryResult.parameters.medida1);
    let medidauno = medida1;
    response =
      "Límpiese las manos con frecuencia : 1-) Lávese las manos frecuentemente con agua y jabón por al menos 20 segundos, especialmente después de haber estado en un lugar público, o después de sonarse la nariz, toser o estornudar, 2-) Si no hay agua y jabón fácilmente disponibles, use un desinfectante de manos que contenga al menos un 60 % de alcohol. Cubra todas las superficies de las manos y frótelas hasta que sienta que se secaron, 3-) Evite tocarse los ojos, la nariz y la boca con las manos sin lavar. ";
    response =
      "Evite el contacto cercano: 1-) Evite el contacto cercano con personas que estén enfermas, 2-) Mantenga una distancia entre usted y las otras personas si el COVID-19 se está propagando en su comunidad. Estos es especialmente importante para las personas que tengan un mayor riesgo de enfermarse gravemente.";
    response =
      "Tome medidas para proteger a los demás: 1-) Quédese en casa si está enfermo, excepto para conseguir atención médica. Sepa qué hacer si se enferma, 2-) Cúbrase la boca y la nariz  con un pañuelo desechable cuando tosa o estornude, o use la parte interna del codo, 3-)Bote los pañuelos desechables que haya usado a la basura.";
    console.log("el sintoma que tienes es :", response);
    res.json({
      fulfillmentText: response
    });
  } else if (req.body.queryResult.action == "tiemporeal") {
    let tiemporeal1 = String(req.body.queryResult.parameters.tiemporeal1);
    let tiemporeal = tiemporeal1;
    response =
      "Para ver informacion en tiempo real de COVID-19 ingresa a este link: https://www.covidvisualizer.com/";
    console.log("el sintoma que tienes es :", response);
    res.json({
      fulfillmentText: response
    });
  } else if (req.body.queryResult.action == "despedida") {
    let despedida1 = String(req.body.queryResult.parameters.despedida1);
    let despedida = despedida1;
    response =
      "Espero a ver sido muy util , espero que estes muy bien pasa una feliz noche a ti y a los tuyos, esperemos que todo este pase pronto que estes muy bien";
    console.log("el sintoma que tienes es :", response);
    res.json({
      fulfillmentText: response
    });
  } else if (req.body.queryResult.action == "saludos") {
    let saludos1 = String(req.body.queryResult.parameters.saludos1);
    let saludos = saludos1;
    response = "Hola como estas? cuantame en que te puedo ayudar ? ";
    console.log("el sintoma que tienes es :", response);
    res.json({
      fulfillmentText: response
    });
  } else if (req.body.queryResult.action == "saludos") {
    let noches = String(req.body.queryResult.parameters.noches);
    let saludos = noches;
    response =
      "Hola buenas noches como estas? cuantame en que te puedo ayudar ? ";
    console.log("el sintoma que tienes es :", response);
    res.json({
      fulfillmentText: response
    });
  } else if (req.body.queryResult.action == "lineasatencion") {
    let lineas = String(req.body.queryResult.parameters.lineas);
    let lineasatencion = lineas;
    response =
      "Las lineas de atencion a niviel nacional a las cuales puedes llamar si tienes varios sintomas de COVID-19:  \nAmazonas: 315 361 50 18. \nAntioquia: Departamento : 300 305 02 95, # 774 , \nMedellín: 123. \nArauca: 125 , 350 412 01 27. \nAtlántico : (035) 323 62 20, \nBarranquilla: 379 33 33, 317 517 39 64, 315 300 20 03. \nBogotá: Secretaría Distrital de Salud de Bogotá: 123. \nBolivar: 125 , \nCartagena: 317 401 61 83. \nBoyacá: 311 483 41 04, 740 74 64   ";
    console.log("el sintoma que tienes es :", response);
    res.json({
      fulfillmentText: response
    });
  }
});
///////////////////////////////////////////////////////////77

app.listen(port, ip);
(async function() {
  const url = await ngrok.connect(port);
  console.log(url);
})();
