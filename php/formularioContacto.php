<?php
if (!empty($_POST)) {
    if($_POST["message"]) {
        mail("cursopemsepe@gmail.com", "Contacto desde tu mi web",
        $_POST["message"]. "De: email@email.address");
        }
}
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Contacto Test</title>
</head>
<body>
    <h1>Formulario de contacto</h1>
    <form method="post" action="formularioContacto.php">
    <textarea name="message"></textarea>
    <input type="submit">
    </form>
</body>
</html>