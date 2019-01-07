<?php
    if (isset($_POST['go'])) {
    $to      = $_POST['email'];
$from        = "sent_from@domain.com"; // address message is sent from
$subject     = "Your IOS development book"; // email subject
$body        = "<p>The PDF is attached.</p>"; // email body
$pdfLocation = "./filesToSend/IOS_book.pdf"; // file location
$pdfName     = "IOS_book.pdf"; // pdf file name recipient will get
$filetype    = "application/pdf"; // type

// create headers and mime boundry
$eol = PHP_EOL;
$semi_rand     = md5(time());
$mime_boundary = "==Multipart_Boundary_x{$semi_rand}x";
$headers       = "From: $from$eol" .
"MIME-Version: 1.0$eol" .
"Content-Type: multipart/mixed;$eol" .
" boundary=\"$mime_boundary\"";

// add html message body
$message = "--$mime_boundary$eol" .
"Content-Type: text/html; charset=\"iso-8859-1\"$eol" .
"Content-Transfer-Encoding: 7bit$eol$eol" .
$body . $eol;

// fetch pdf
$file = fopen($pdfLocation, 'rb');
$data = fread($file, filesize($pdfLocation));
fclose($file);
$pdf = chunk_split(base64_encode($data));

// attach pdf to email
$message .= "--$mime_boundary$eol" .
"Content-Type: $filetype;$eol" .
" name=\"$pdfName\"$eol" .
"Content-Disposition: attachment;$eol" .
" filename=\"$pdfName\"$eol" .
"Content-Transfer-Encoding: base64$eol$eol" .
$pdf . $eol .
"--$mime_boundary--";

// Send the email
if(mail($to, $subject, $message, $headers)) {
    echo "The email was sent.";
}
else {
    echo "There was an error sending the mail.";
}
    }
?>
