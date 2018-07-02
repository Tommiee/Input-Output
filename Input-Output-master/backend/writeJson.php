<?php
$filepath;
$control;

  if(!empty($_GET['path'])){
    $filepath = $_GET['path'];
  }

  if(!empty($_GET['put'])){
    $control = $_GET['put'];
  }

echo $control;

$file = fopen($filepath, "w") or die("can't open file");

$controlObj = json_decode($control,true);

fwrite($file,$control);
fclose($file);

?>
