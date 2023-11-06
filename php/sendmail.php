<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mensaje</title>
</head>
<body>  

    <h3>Mensaje enviado</h3>
    <a href="/contacto.html">Volver</a>
    <?php

        $nombre = $_GET['nombre'];
        $email = $_GET['email'];
        $asunto = $_GET['asunto'];
        $telefono = $_GET['telefono'];
        $mensaje = $_GET['mensaje'];


        ini_set('display_errors', 1);
        error_reporting(E_ALL);

        $from = "direccion@digitalrelmex.com";
        $to = "direccion@digitalrelmex.com";

        $subject = $asunto;
        $message = 
            "<h3>Nuevo mensaje de: " . $nombre . "</h3>" .
            "<h3>Correo: " . $email . "</h3>" .
            "<h3>Teléfono: " . $telefono . "</h3>" .
            "<h3>Mensaje: " . "</h3>" . 
            "<p>" . $mensaje . "</p>";
        $header  = 'MIME-Version: 1.0' . "\r\n";
        $header .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
        $header .= 'To: ' . $to. "\r\n";
        $header .= 'From: ' . $from. "\r\n";

        mail($to, $subject, $message, $header);
    ?>


</body>
</html>

