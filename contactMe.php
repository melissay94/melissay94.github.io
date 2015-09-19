<?php
$contact_name = $_POST['full_name'];
$contact_email = $_POST['email_addr'];
$contact_back .= $_POST['contact']." ";
$contact_msg = $_POST['message'];

$mail_to = 'melissay94@yahoo.com';
$subject = 'Message from your site '.$contact_email;

$body_messsage = ' From: '.$contact_name.'\n Email: '.$contact_email.'\n '.$contact_msg.'\n Would they like a reply?'.$contact_back;

$email_header = "From: $email\r\n"."Reply-To: $email\r\n";

$mail_status = mail($mail_to, $subject, $body_messsage, $email_header); 

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert("Your message has been sent. Thanks for the feedback!");
		window.location = 'contact.html';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert("Your message was not sent. Sorry for the inconvenience. Please email me at melissay94@yahoo.com");
		window.location = 'contact.html';
	</script>

}

?>