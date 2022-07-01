<?php
$to = "jenesius1998@gmail.com"
$name = $_POST['name'];
$text = $_POST['text'];
$data = data("d.m,Y");
$time = data ("h:i");
$from = $email;
$subject = "Заявка с сайта";
$msg ="
Имя : $name /n
Почта :$email /n
mail($to , $subject , $msg , "From : $from");
?>

