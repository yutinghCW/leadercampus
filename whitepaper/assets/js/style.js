$(function () {
	var width = $(window).width(),
		height = $(window).height(),
		headerHeight = $('header').outerHeight();
	$(".hamburger").click(function () {
		$(".hamburger, nav").toggleClass("active");
	});
	$("nav a").click(function () {
		$(".hamburger, nav").removeClass("active");
	});
	$('nav ul li i.icon').click(function () {
		$(this).toggleClass('active');
		$(this).siblings('ul').slideToggle();
	});
	// Smooth scrolling using jQuery easing
	$('a.smooth-scroll[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
			if (target.length) {
				$("html, body").animate({
					scrollTop: target.offset().top - headerHeight
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});
	$("body").scrollspy({
		target: "#navigation",
		offset: height/2,
	});
	$(".slick-center").slick({
		// centerMode: true,
		centerMode: false,
		centerPadding: "0",
		slidesToShow: 5,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					centerMode: false,
					centerPadding: "0",
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					centerMode: false,
					centerPadding: "0",
					slidesToShow: 1,
				},
			},
		]
	}).on('setPosition', function(slick){
		$(this).addClass('slick-done');
	});
	$(".btn--more").click(function() {
        var speakerName = $(this).data('name'),
            speaker = "";
        for (var i = 0; i < data.length; i++) {
            if (speakerName == data[i]["speakerName"]) {
                speaker += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="icon icon-cancel"></i></button><div class="model-basic"><div class="model-img"><img src="assets/images/' + data[i]["speakerImg"];
                speaker += '" alt="' + data[i]["speakerName"];
                speaker += '"></div><div class="model-text"><h2 class=" my0">' + data[i]["speakerName"] + '<span>' + data[i]["speakerNameEng"];
                speaker += '</span></h2><div class="h4 mt-d-0 mt-m-10 mb0">' + data[i]["speakerInfo"];
                speaker += '</div></div></div><div class="model-detail mt30"><p class="my0">' + data[i]["speakerIntro"];
                speaker += '</p></div>'
            }
        }
        $('.modal-body').html(speaker);
    });
	$(window).on("scroll", function () {
		var scroll = $(window).scrollTop();
		if (scroll >= height / 3) {
			$("header").addClass("scroll");
		} else {
			$("header").removeClass("scroll");
		}
	});
});
