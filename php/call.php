<?php
$to = "ava.narek@gmail.com";
$tema = "Обратный звонок"; 
$message = "Имя: ".$_POST['name']."<br>";
$message .= "Номер телефона: ".$_POST['phone']."<br>"; 
$headers  = 'MIME-Version: 1.0' . "\r\n"; 
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; 
mail($to, $tema, $message, $headers); 
?>