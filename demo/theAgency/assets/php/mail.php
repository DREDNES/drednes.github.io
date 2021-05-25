<?php

if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
  $to = 'ava.narek@gmail.com';
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];
  $mes = "Имя: $name \nE-mail: $email \nТелефон: $phone \nТекст: $message";

  $send = mail($to, 'Новое сообщение с сайта The Agency!', $mes, "Content-type:text/plain; charset = UTF-8\r\nFrom:$email");
  if ($send == 'true') {
    echo 'Спасибо за обращение! Совсем скоро мы свяжемся с Вами!';
  }
}
?>