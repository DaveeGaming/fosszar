/* global $ */

$(function () {
    'use strict';


    $('.info-list li').click(function () {
        $(this).addClass('selected').siblings('li').removeClass('selected');

        $('.info-content div').hide();
        // window.console.log($(this).data('class'));

        $('.' + $(this).data('class')).fadeIn();
    });
});