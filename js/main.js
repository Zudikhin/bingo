$(document).ready(function() {
    "use strict";

    $(".header_block_desk_loto").hover(function () {
        $(".header_block_desk_loto_drop").stop().slideDown();
    }, function(){
        $(".header_block_desk_loto_drop").stop().slideUp();
    });

    $(".header_block_desk_flag").hover(function () {
        $(".header_block_desk_flag_list").stop().slideDown();
    }, function(){
        $(".header_block_desk_flag_list").stop().slideUp();
    });

    $(".blockchain_block_right_item_head").click(function() {
        $(this).parent().find(".blockchain_block_right_item_body").slideToggle();
        $(this).toggleClass("active");
    });

    $(".wallet_block_right_item").click(function() {
        $(this).toggleClass("active");
        $(this).find(".wallet_block_right_item_drop").slideToggle();
    });

    $("#autoNo").click(function() {
        $(".account_block_left_plan_auto_btns button").removeClass("active");
        $(this).addClass("active");
        $(".account_block_left_plan_auto_btns").addClass("active");
    });

    $("#autoYes").click(function() {
        $(".account_block_left_plan_auto_btns button").removeClass("active");
        $(this).addClass("active");
        $(".account_block_left_plan_auto_btns").removeClass("active");
    });

    $("#tarif").click(function() {
        $(this).toggleClass("active");
        $(".account_block_left_plan").slideToggle();
    });

    $("#withdraw").click(function() {
        $(".back_modal").addClass("active");
        $(".withdraw").addClass("active");
    });
    
    $("#replenishUsdt").click(function() {
        $(".back_modal").addClass("active");
        $(".replenish_usdt").addClass("active");
    });

    $("#replenishTon").click(function() {
        $(".back_modal").addClass("active");
        $(".replenish_ton").addClass("active");
    });

    $("#buyTon").click(function() {
        $(".back_modal").addClass("active");
        $(".buy_ton").addClass("active");
    });

    $(".back_modal").click(function() {
        $(this).removeClass("active");
        $(".replenish_ton").removeClass("active");
        $(".replenish_usdt").removeClass("active");
        $(".withdraw").removeClass("active");
        $(".buy_ton").removeClass("active");
        $(".drop_menu").removeClass("active");
    });

    $(".header_block_mob_btn").click(function() {
        $(".back_modal").addClass("active");
        $(".drop_menu").addClass("active");
    });

    $(".drop_menu_lot_head").click(function() {
        $(this).toggleClass("active");
        $(this).parent().find(".drop_menu_lot_wrap").slideToggle();
    });

    $(".drop_menu_top_close").click(function() {
        $(".drop_menu").removeClass("active");
        $(".back_modal").removeClass("active");
    });

    $('.slider_feature_wrap').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		speed: 500,
		autoplay: false,
        fade: true,
		prevArrow: $('.slider_feature_down_arrows_prev'),
      	nextArrow: $('.slider_feature_down_arrows_next')
	});

    $('.slider_feature_wrap').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $(".rules").removeClass("active");
        $(".rules").each(function() {
            var attr = $(this).attr("data-target");
            var num = parseInt(attr);
            if(num == currentSlide) {
                $(this).addClass("active");
            }
        });
    });

    $('.fortuna_slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: true,
        infinity: true,
		speed: 500,
        centerMode: true,
		autoplay: false,
        fade: false,
		prevArrow: $('.fortuna_arrows_prev'),
      	nextArrow: $('.fortuna_arrows_next'),
          responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    fade: true
                }
            }
        ]
	});

    $('.fortuna_slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $(".rules").removeClass("active");
        $(".rules").each(function() {
            var attr = $(this).attr("data-target");
            var num = parseInt(attr);
            if(num == currentSlide) {
                $(this).addClass("active");
            }
        });
    });

});