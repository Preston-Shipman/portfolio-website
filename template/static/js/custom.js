/*========================================================================
EXCLUSIVE ON themeforest.net
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Template Name   : Alexio
Author          : PxDraft
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Copyright (c) 2018 - PxDraft
========================================================================*/

(function($){
    "use strict"
    var ALX = {};

    ALX.WebLoad = function(){
      document.getElementById("loading").style.display = "none";
    }

    ALX.LightboxGallery = function(){
      $('.portfolio-col').magnificPopup({
          delegate: '.lightbox-gallery',
          type: 'image',
          tLoading: '#%curr%',
          mainClass: 'mfp-fade',
          fixedContentPos: true,
          closeBtnInside: true,
          gallery: {
              enabled: true,
              navigateByImgClick: true,
              preload: [0, 1]
          }
      });
    }

    ALX.mTypeIt = function() {
        new TypeIt('#type-it', {
            speed: 200,
            loop:true,
            strings: [
              'Designer',
              'Developer'
            ],
            breakLines: false
        });
    }
    $(window).on("load", function(){
      ALX.WebLoad();
    });

    $( document ).ready(function() {
        ALX.LightboxGallery(),
        ALX.mTypeIt();
    });
    $("#resumeButton").click(function() {
      window.open(
        "https://drive.google.com/file/d/1xlr1oP5L8sCoCjkKhTgJJtnD1tAjvLuz/view?usp=sharing"
      );
    });
        $("#resumeButton2").click(function() {
          window.open(
            "https://drive.google.com/file/d/1xlr1oP5L8sCoCjkKhTgJJtnD1tAjvLuz/view?usp=sharing"
          );
        });
                $("#github").click(function() {
                  window.open("https://github.com/Preston-Shipman");
                });
                        $("#linkedin").click(function() {
                          window.open(
                            "https://www.linkedin.com/in/prestonshipman/"
                          );
                        });
})(jQuery);
