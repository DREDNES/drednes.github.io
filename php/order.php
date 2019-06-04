<?php
if(!empty($_POST['email'] ))
{
    $to = "ava.narek@gmail.com";
    $tema = "Обратный звонок"; 
    $message = "Имя: ".$_POST['name']."<br>";
    $message .= "Email: ".$_POST['email']."<br>"; 
    $message .= "Сообщение: ".$_POST['message']."<br>"; 
    $headers  = 'MIME-Version: 1.0' . "\r\n"; 
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; 
    $result = mail($to, $tema, $message, $headers);

    if ($result){ 
        echo "<p>Спасибо ".$_POST['name'].", cкоро мы Вам ответим!</p>";
    }
    else{
        echo "<p>Cообщение не отправленно. Пожалуйста, попрбуйте еще раз</p>";
    }
}
else {
echo "<p>Обязательные поля не заполнены. Введите адрес электронной почты</p>";
}
?>