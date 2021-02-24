<?php
$myfile = fopen("ResumeData.html", "w");

$txt= ' <meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="external/jquery/jquery.js"></script>
<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
<script src="js/bootstrap.min.js"></script>
<script src="https://kit.fontawesome.com/a076d05399.js"></script>';
$txt .= $_POST["pData"];

fwrite($myfile, $txt);

fclose($myfile);
echo($txt);

?>