$(document).ready(function() {
    "use strict";

    $(".header_block_desk_loto_current").hover(function () {
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

    $(".back_modal").click(function() {
        $(this).removeClass("active");
        $(".replenish_ton").removeClass("active");
        $(".replenish_usdt").removeClass("active");
        $(".withdraw").removeClass("active");
    });
});