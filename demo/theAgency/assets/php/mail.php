<!-- Через 10 секунд после появления сообщения об отправке или ошибке — отправляемся на сайт Кода :) -->
<meta http-equiv='refresh' content='10; url=http://thecode.local/'>
<meta charset="UTF-8" />
<?php
$to = 'ava.narek@gmail.com';
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$mes = "Имя: $name \nE-mail: $email \nТелефон: $phone \nТекст: $message";
$send = mail($to, 'Новое сообщение с сайта The Agency!', $mes, "Content-type:text/plain; charset = UTF-8\r\nFrom:$email");
if ($send == 'true') {echo "Сообщение отправлено";}
else {echo "Ой, что-то пошло не так";}
?>