<!DOCTYPE html>
<html lang="en">
<head>
	<?php include_once 'pages/includes/head.php'; ?>
</head>
<body class="grey lighten-4">
	<!-- top nav -->
	<nav class="z-depth-0">
		<div class="nav-wrapper container center">
			<span class="left grey-text text-darken-1">
				<img src="img/menubar.svg" class="sidenav-trigger"  data-target="side-menu" width="26" height="26">
			</span>
			<a href=".">Marburg'ta <span>Hayat</span></a>
			<span class="right grey-text text-darken-1">
				<img src="img/menubar.svg" class="sidenav-trigger"  data-target="side-links" width="26" height="26">
			</span>
		</div>
	</nav>

	<!-- right nav -->
	<?php include_once 'pages/includes/nav.php'; ?>

	<main>
		<div class="recipes container grey-text text-darken-1">
			<div class="card-panel recipe white row">
				<img src="img/icons/icon-48x48.png" alt="recipe thumb">
				<div class="recipe-details">
					<div class="recipe-title">Marburg Bilgilendirme</div>
					<div class="recipe-ingredients">Marburg hakkında genel bilgiler. Tarihi, coğrafyası ...</div>
				</div>
			</div>
			<div class="card-panel recipe white row">
				<img src="img/icons/icon-48x48.png" alt="recipe thumb">
				<div class="recipe-details">
					<div class="recipe-title">Alışveriş Rehberi</div>
					<div class="recipe-ingredients">Helal gıda, uygun ürünler bulabileceğiniz yerler</div>
				</div>
			</div>
			<div class="card-panel recipe white row">
				<img src="img/icons/icon-48x48.png" alt="recipe thumb">
				<div class="recipe-details">
					<div class="recipe-title">İşyerleri</div>
					<div class="recipe-ingredients">Marburg hakkında genel bilgiler. Tarihi, coğrafyası ...</div>
				</div>
			</div>
			<div class="card-panel recipe white row">
				<img src="img/icons/icon-48x48.png" alt="recipe thumb">
				<div class="recipe-details">
					<div class="recipe-title">Resmi İşlemler</div>
					<div class="recipe-ingredients">Almanyada yaşamak için gerekli resmi işlemler</div>
				</div>
			</div>
			<div class="card-panel recipe white row">
				<img src="img/icons/icon-48x48.png" alt="recipe thumb">
				<div class="recipe-details">
					<div class="recipe-title">Ulaşım</div>
					<div class="recipe-ingredients">Marburg tren yolu, kara yolu hakkında bilgiler</div>
				</div>
			</div>
			<div class="card-panel recipe white row">
				<img src="img/icons/icon-48x48.png" alt="recipe thumb">
				<div class="recipe-details">
					<div class="recipe-title">Eğitim</div>
					<div class="recipe-ingredients">Almanca kursları, çocaklarınız için okullar</div>
				</div>
			</div>
			<div class="card-panel recipe white row">
				<img src="img/icons/icon-48x48.png" alt="recipe thumb">
				<div class="recipe-details">
					<div class="recipe-title">Sağlık</div>
					<div class="recipe-ingredients">Hastaneler, diş polikilinikleri</div>
				</div>
			</div>
		</div>
	</main>
	<div class="center">
		<a class="btn-floating btn-small btn-large add-btn sidenav-trigger" data-target="side-links">
			<i class="material-icons"><-</i>
		</a>
	</div>

	<!-- left nav -->
	<?php include_once 'pages/includes/links.php'; ?>

	<footer>
		<p class="center">&copy; Marburg Citizens</p>
	</footer>
</body>
</html>