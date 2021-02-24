<?php
require_once 'dompdf/autoload.inc.php';
use Dompdf\Dompdf; 
define("DOMPDF_UNICODE_ENABLED", true);
$dompdf = new Dompdf();

// Load content from html file 
$dompdf->loadHtml($aData["html"]);
$dompdf->set_option("isHtml5ParserEnabled",true);
$dompdf->set_option("isRemoteEnabled",true);
$html = file_get_contents("ResumeData.html"); 
$dompdf->loadHtml($html); 
 
// (Optional) Setup the paper size and orientation 
$dompdf->setPaper('A4', 'landscape'); 
 
// Render the HTML as PDF 
$dompdf->render(); 

// $dompdf->stream("sample.pdf");
 
// Output the generated PDF (1 = download and 0 = preview) 
$dompdf->stream("codexworld", array("Attachment" => 0));
?>