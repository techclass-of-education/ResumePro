<?php

$myfile = fopen("ResumeData.html", "r") or die("Unable to open file!");
$fileData= fread($myfile,filesize("ResumeData.html"));
fclose($myfile);
echo $fileData;
?>