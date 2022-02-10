$(function () {
	// =========================================================================
		// ========================================================================
	var header = $('.header'),
		scrollPrev = 0;

	$(window).scroll(function () {
		var scrolled = $(window).scrollTop();

		if (scrolled > 100 && scrolled > scrollPrev) {
			header.addClass('header--active');
		} else {
			header.removeClass('header--active');
		}
		scrollPrev = scrolled;
	});
	// =========================================================================
		// ========================================================================

	const menuBtn = $('.icon-menu'),
		menu = $('.menu');

	menuBtn.on('click', function () {
		if ($(this).hasClass('icon-menu--active')) {
			$(this).removeClass('icon-menu--active');
			menu.removeClass('menu--active');
		} else {
			$(this).addClass('icon-menu--active');
			menu.addClass('menu--active');
		}
	});

	$(document).click(function (e) {
		if (!menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0) {
			menu.removeClass('menu--active');
			menuBtn.removeClass('icon-menu--active');
		};
	});
	// =========================================================================
		// ========================================================================

	//звёздный рейтинг
	$("#star-raiting").rateYo({
		starWidth: "10px",
		// normalFill: "#FFFFFF",
		ratedFill: "#333333",
		readOnly: true,
	})
	// стилизация Select
	$('.product__sizes').styler();
	// =========================================================================
	// ========================================================================

	// Стилизация  Инпута Число (input number)
	$('.product__input').styler();
	// =========================================================================
	// ========================================================================

	// сдайжер больших картинок
	$('.product-big').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		fade: true,
		asNavFor: '.product-small',
	});
	// =========================================================================
	// ========================================================================
	$('.product-small').slick({
		slidesToShow: 4,
		slidesToScroll: 0,
		asNavFor: '.product-big',
		dots: false,
		arrows: false,
		centerMode: true,
		focusOnSelect: true,
		vertical: true,
	});
	// =========================================================================
	// ========================================================================
	
	let butt = document.getElementById('product__btn');
	butt.addEventListener("click", function (event) {
		event.preventDefault()
	});
	// ========================================================================
	butt.onclick = function () {
		let title = document.querySelector('h2');
		let titleContent = title.textContent;
		var val = document.getElementById('product__input').value;
		document.getElementById('product__popup').innerHTML = `Товар ${titleContent} в количестве ${val} единиц добавлен в "Корзину"`;
	// ========================================================================

		let productPopup = document.querySelector('.product__popup');
		productPopup.classList.add('product__popup--active');

		// закрыть через 3 секунды===========================================
		if (productPopup.classList.contains("product__popup--active")) {
			setTimeout(function(){
				productPopup.classList.toggle("product__popup--active");
				}, 2500);
		}
	};
	// ========================================================================
	// ========================================================================

	let buttLike = document.getElementById('product__btn-like');
	buttLike.addEventListener("click", function (event) {
		event.preventDefault()
	});
	// ========================================================================
	buttLike.onclick = function () {
		let title = document.querySelector('h2');
		let titleContent = title.textContent;
		var val2 = document.getElementById('product__input').value;
		document.getElementById('product__popup').innerHTML = `Товар ${titleContent} в количестве ${val2} единиц добавлен в "Избранное"`;
	// ========================================================================

		let productPopup = document.querySelector('.product__popup');
		productPopup.classList.add('product__popup--active');

		// закрыть через 3 секунды===========================================
		if (productPopup.classList.contains("product__popup--active")) {
			setTimeout(function(){
				productPopup.classList.toggle("product__popup--active");
				}, 2500);
		}
	};



	// =============================s============================================
});