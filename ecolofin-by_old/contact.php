<!DOCTYPE html>
<html lang="ru">

	<head>
		<meta charset="utf-8">
		<title>Сообщение отправлено | Экология Финансов</title>
		<meta name="robots" content="noindex,nofollow">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="Ваше сообщение успешно отправлено. Экология Финансов свяжется с вами.">

		<!-- Libs CSS -->
		<link href="css/bootstrap.css" rel="stylesheet">
		<link href="css/style.css" rel="stylesheet">

		<style>
			@font-face {
				font-family: 'Raleway';
				font-style: normal;
				font-weight: 400;
				font-display: swap;
				src: url(https://fonts.gstatic.com/s/raleway/v37/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCIPrQ.ttf) format('truetype');
			}
			@font-face {
				font-family: 'Raleway';
				font-style: normal;
				font-weight: 700;
				font-display: swap;
				src: url(https://fonts.gstatic.com/s/raleway/v37/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVs9pbCIPrQ.ttf) format('truetype');
			}
		</style>
	</head>

	<body>

		<div id="contentForm">

			<?php
			header('Content-Type: text/html; charset=utf-8');

			if(isset($_POST['email'])) {

				$email_to = "info@ecolofin.by";
				$email_subject = "Заявка с сайта ecolofin.by";

				$first_name = trim($_POST['first_name']);
				$email_from = trim($_POST['email']);
				$phone = trim($_POST['phone']);
				$tariff = isset($_POST['tariff']) ? trim($_POST['tariff']) : '';

				// Validate email format
				if (!filter_var($email_from, FILTER_VALIDATE_EMAIL)) {
					$email_from = 'noreply@ecolofin.by';
				}

				// Sanitize against header injection (remove newlines)
				function clean_header($string) {
					return preg_replace('/[\r\n]/', '', $string);
				}

				function clean_string($string) {
					$bad = array("content-type","bcc:","to:","cc:","href");
					return str_replace($bad, "", $string);
				}

				$email_message = "Заявка с сайта ecolofin.by\n\n";
				$email_message .= "Имя: ".clean_string($first_name)."\n";
				$email_message .= "Email: ".clean_string($email_from)."\n";
				$email_message .= "Телефон/Вопрос: ".clean_string($phone)."\n";
				if (!empty($tariff)) {
					$email_message .= "Тариф: ".clean_string($tariff)."\n";
				}

				// Safe headers with sanitized From
				$safe_from = clean_header($email_from);
				$headers = 'From: '.$safe_from."\r\n".
				'Reply-To: '.$safe_from."\r\n" .
				'X-Mailer: PHP/' . phpversion();

				$mail_sent = mail($email_to, $email_subject, $email_message, $headers);

				$safe_name = htmlspecialchars($first_name, ENT_QUOTES, 'UTF-8');

				?>

				<div class="container">
					<div class="row">
						<div class="col-sm-6 col-sm-offset-3">
							<div id="form_response" class="text-center">
								<img class="img-responsive" src="img/thumbs/mail_sent.png" alt="Сообщение отправлено">
								<h1>ОТПРАВЛЕНО</h1>
								<p>Спасибо, <b><?=$safe_name;?></b>! Ваше сообщение отправлено!<br> Наш специалист скоро свяжется с Вами!</p>
								<a class="btn btn-theme btn-lg" href="index.html">Вернуться на сайт</a>
							</div>
						</div>
					</div>
				</div>

				<?php

				}

				?>

		</div>

	</body>

</html>
