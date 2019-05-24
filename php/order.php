<?php
$to = "ava.narek@gmail.com";
$tema = "Обратный звонок"; 
$message = "Имя: ".$_POST['name']."<br>";
$message .= "Email: ".$_POST['email']."<br>"; 
$message .= "Сообщение: ".$_POST['message']."<br>"; 
$headers  = 'MIME-Version: 1.0' . "\r\n"; 
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; 
mail($to, $tema, $message, $headers); 
?>