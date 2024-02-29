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

    $(".wallet_block_right_item").click(function() {
        $(this).toggleClass("active");
        $(this).find(".wallet_block_right_item_drop").slideToggle();
    });

});