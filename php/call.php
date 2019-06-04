<?php
if(!empty($_POST['telephone'] ))
{
$to = "ava.narek@gmail.com";
$tema = "Обратный звонок"; 
$message = "Имя: ".$_POST['name']."<br>";
$message .= "Номер телефона: ".$_POST['telephone']."<br>"; 
$headers  = 'MIME-Version: 1.0' . "\r\n"; 
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; 
$result = mail($to, $subject, $message, $headers);

    if ($result){ 
        echo "<p>Спасибо ".$_POST['name'].", cкоро мы Вам перезвоним!</p>";
    }
    else{
        echo "<p>Cообщение не отправленно. Пожалуйста, попрбуйте еще раз</p>";
    }
}
else {
echo "<p>Обязательные поля не заполнены. Введите номер телефона</p>";
}
?>