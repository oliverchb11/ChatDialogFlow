var express = require("express"); // se llama libreria express
var bodyParser = require("body-parser"); // se llama libreria // bady-parser
const ngrok = require("ngrok"); // se llama libreria ngrok para conectarlo con dialogflow
var app = express();
var port = process.env.PORT || 4000;
var ip = process.env.IP || "127.0.0.1";
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// con nuestra variable app la cual usa express hace un post y creamos las condicionales con cada
//intems creado en el dialogflow
app.post("/", function (req, res) {
  if (req.body.queryResult.action == "fiebre") {
    let sintoma1 = String(req.body.queryResult.parameters.sintoma1);
    let sintoma = sintoma1;
    response =
      "tienes fiebre, Mucho cuidado tienes que revisar vamos a ver lo siguientes pasos: \nPaso1: Si tu temperatura es mayor de 38 grados en caso de que si tomar acetaminofeno (Tylenol, entre otros), ibuprofeno (Advil, Motrin IB, entre otros) o aspirina. \nPaso2: Lee la etiqueta atentamente para saber la dosis adecuada. \npaso3: Ten cuidado de no tomar más de un medicamento que contenga acetaminofeno, como algunos antigripales o medicamentos para la tos. \nPaso4: Llama al médico si la fiebre no baja con la medicación, si se mantiene constante a 103 °F (39,4 °C) o más, o si dura más de tres días. \nPaso5: Si tienes otros sintomas llama a la linea de atencion: https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/ED/VSP/coronavirus-telefonos.pdf";
    console.log("el sintoma que tienes es :", response);
    res.json({
      fulfillmentText: response,
    });
  } else if (req.body.queryResult.action == "input.unknown") {
    response = "Que quieres decir? No te entiendo, Puedes ser mas claro ";

    res.json({
      fulfillmentText: response,
    });
    return response;
  } else if (req.body.queryResult.action == "gripa") {
    let sintoma2 = String(req.body.queryResult.parameters.sintoma2);
    let sintomagripa = sintoma2;
    response = "No te entiendo ? puede ser mas claro";
    console.log("el sintoma que tienes es :", response);
    res.json({
      fulfillmentText: response,
    });
  } else if (req.body.queryResult.action == "tos") {
    let sintoma3 = String(req.body.queryResult.parameters.sintoma3);
    let sintomatos = sintoma3;
    response =
      "tienes TOS , tienes que Taparse la boca al toser o estornudar. Y a ser posible, con cualquier cosa que no sea la mano. El virus de la gripe se contagia por vía aérea, a través de pequeñas gotas que se expulsan al toser o al estornudar, por lo que es preciso taparse para evitar el contagio de más personas. Los expertos señalan que lo mejor es cubrirse la nariz y la boca con un pañuelo de un solo uso y luego tirarlo. A falta de esto, mejor la manga del brazo que la mano. “Si te tapas con las manos tienes que ir rápidamente a lavártelas con agua y jabón”, apostilla el epidemiólogo del Clínic.  y si tienes otros sintomas llama a la linea de atencion: https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/ED/VSP/coronavirus-telefonos.pdf";
    console.log("el sintoma que tienes es :", response);
    res.json({
      fulfillmentText: response,
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
      fulfillmentText: response,
    });
  } else if (req.body.queryResult.action == "tiemporeal") {
    let tiemporeal1 = String(req.body.queryResult.parameters.tiemporeal1);
    let tiemporeal = tiemporeal1;
    response =
      "Para ver informacion en tiempo real de COVID-19 ingresa a este link: https://www.covidvisualizer.com/";
    console.log("el sintoma que tienes es :", response);
    res.json({
      fulfillmentText: response,
    });
  } else if (req.body.queryResult.action == "despedida") {
    let despedida1 = String(req.body.queryResult.parameters.despedida1);
    let despedida = despedida1;
    response =
      "Espero a ver sido muy util , espero que estes muy bien pasa una feliz noche a ti y a los tuyos, esperemos que todo este pase pronto que estes muy bien";
    console.log("el sintoma que tienes es :", response);
    res.json({
      fulfillmentText: response,
    });
  } else if (req.body.queryResult.action == "saludos") {
    let saludos1 = String(req.body.queryResult.parameters.saludos1);
    let saludos = saludos1;
    response =
      "Hola como estas Soy un asistente de COVID-19 el cual te puede dar informacion actualizada y precisa sobre esta pandemia a nivel mundial. puedes preguntar cosas como: \n-¿Quiero información en tiempo real de los contagiados a nivel mundial? \n-En que casos es necesario ir al hospital. \n-¿Como es la linea de atencion para sistomas del virus?. \n-¿Que puedo hacer para no ser infectado con COVID-19?. \n-¿Tengo fiebre?. \n-¿Tengo gripa?. \n-¿Tengo tos? ";
    console.log("el sintoma que tienes es :", response);
    res.json({
      fulfillmentText: response,
    });
  } else if (req.body.queryResult.action == "lineasatencion") {
    let lineas = String(req.body.queryResult.parameters.lineas);
    let lineasatencion = lineas;
    response =
      "Las lineas de atencion a niviel nacional a las cuales puedes llamar si tienes varios sintomas de COVID-19:  \nAmazonas: 315 361 50 18. \nAntioquia: Departamento : 300 305 02 95, # 774 , \nMedellín: 123. \nArauca: 125 , 350 412 01 27. \nAtlántico : (035) 323 62 20, \nBarranquilla: 379 33 33, 317 517 39 64, 315 300 20 03. \nBogotá: Secretaría Distrital de Salud de Bogotá: 123. \nBolivar: 125 , \nCartagena: 317 401 61 83. \nBoyacá: 311 483 41 04, 740 74 64. \nCaldas :(6) 880 08 18 , 310 426 79 06 \nManizales:123. \nCaquetá: 321 394 5327 \nCasanare: 321 394 53 17 ,  (8) 634 55 55. \nCauca: 301 273 77 87. \nCesar:320 565 31 59 , \nValledupar:310 633 22 91. \nChocó: 321 394 52 97. \nCórdoba: 320 530 82 09, 316 875 12 77. \nCundinamarca: 123 . \nGuainía: (8) 5 65 62 51, 311 742 19 83, 311 744 70 06. \nGuaviare:321 394 65 60, 321 394 53 50. \nHuila: 870 66 33, 870 22 77. \nLa Guajira: 318 340 08 83, 321 394 53 30. \nMagdalena: 312 807 03 26, 321 394 40 87, \nSanta Marta: 301 273 77 83. \nMeta: 321 394 53 51, 321 204 76 05. \nNariño: 317 712 98 18. \nNorte de Santander: 320 271 45 12. \nPutumayo: 312 319 17 36, 311 878 48 64. \nQuindío: 322 581 64 22. \nRisaralda: 302 290 74 90. \nSan Andrés: 310 651 13 41. \nSantander: 697 87 85, 697 87 88 , 697 0000 ext. 1283 - 1287. \nSucre: 282 25 56, 317 402 80 49. \nTolima: 322 812 39 75. \nValle del Cauca: 620 68 19, \nLínea Exclusiva Cali: 486 55 55 Opción 7. \nVaupés: 321 394 53 41. \nVichada: 322 247 63 44    ";
    console.log("el sintoma que tienes es :", response);
    res.json({
      fulfillmentText: response,
    });
  } else if (req.body.queryResult.action == "hospital") {
    let hospital1 = String(req.body.queryResult.parameters.hospital1);
    let hospital = hospital1;
    response =
      "Mira en los caso mas extremos como: \ncaso1: Si tienes fiebre mayor a 38 grados. \ncaso2: Si tienes tos seca. \ncaso3: Si tienes gripa. \ncaso4: Si tienes dificultad para respirar. \ncaso5: Si tienes mucha debilidad en el cuerpo ";
    console.log("el sintoma que tienes es :", response);
    res.json({
      fulfillmentText: response,
    });
  } else if (req.body.queryResult.action == "SaludosBot.SaludosBot-custom") {
    response = "Hola Oliver ";
    console.log("el sintoma que tienes es :", response);
    res.json({
      fulfillmentText: response,
    });
  } else if (
    req.body.queryResult.action ==
    "SaludosBot.SaludosBot-custom.SaludosBot-custom-yes"
  ) {
    response = "Hola Oliver ";
    console.log("el sintoma que tienes es :", response);
    res.json({
      fulfillmentText: response,
    });
  } else if (
    req.body.queryResult.action ==
    "SaludosBot.SaludosBot-custom.SaludosBot-custom-no"
  ) {
    response = "Hola Oliver ";
    console.log("el sintoma que tienes es :", response);
    res.json({
      fulfillmentText: response,
    });
  } else if (
    req.body.queryResult.action == "SintomaFiebre.SintomaFiebre-custom"
  ) {
    response = "Hola Oliver ";
    console.log("el sintoma que tienes es :", response);
    res.json({
      fulfillmentText: response,
    });
  } else if (
    req.body.queryResult.action ==
    "SintomaFiebre.SintomaFiebre-custom.SintomaFiebre-custom-yes"
  ) {
    response = "Hola Oliver ";
    console.log("el sintoma que tienes es :", response);
    res.json({
      fulfillmentText: response,
    });
  } else if (
    req.body.queryResult.action ==
    "SintomaFiebre.SintomaFiebre-custom.SintomaFiebre-custom-no"
  ) {
    response = "Hola Oliver ";
    console.log("el sintoma que tienes es :", response);
    res.json({
      fulfillmentText: response,
    });
  } else if (req.body.queryResult.action == "respuestasinsentido") {
    response = "Que quieres decir? No te entiendo ";

    res.json({
      fulfillmentText: response,
    });
    return response;
  }
});
///////////////////////////////////////////////////////////77

app.listen(port, ip);
(async () => {
  const url = await ngrok.connect(port);
  console.log(url);
})();
