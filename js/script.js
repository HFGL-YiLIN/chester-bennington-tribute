$(document).ready(function ($) {

    preloader
    $(window).ready(function () {
        $('#status').delay().fadeOut();
        $('#preloader').delay(300).fadeOut('slow');
    });

    //title appear
    var $tChester = $("#t-chester");
    var tweenS1Title = new TimelineMax()
        .fromTo('.rotate-title', 2.5, {
            opacity: 0
        }, {
                opacity: 1,
                ease: Power1.easeIn,
                delay: 1
            })
        .from($tChester, 1.5, {
            y: '-= 120'
        });

    //rotate title
    $(function () {

        var t = ["TALENT", "SUPERSTAR", "FATHER", "HUSBAND", "CHARITARIAN", "PATNER"],
            $h1 = $(".rotate-title"),
            $sp = $h1.find(".rotate-title-ro"),
            i = 0,
            widths = [];

        $.each(t, function (i, v) {
            var el = $('<span />', {
                text: v
            }).appendTo($h1);
            widths.push(el.width());
            el.remove();
        });

        $sp.css({
            opacity: 0
        });

        (function loop() {
            i = ++i % t.length;
            $sp.text(t[i]).animate({
                width: widths[i]
            }, 500, function () {
                TweenLite.to($sp.text(t[i]), 5, {
                    autoAlpha: 1
                });
                TweenLite.to($sp.text(t[i]), 1.5, {
                    autoAlpha: 0,
                    delay: 2.5,
                    onComplete: loop
                });
            });
        })();
    });

    //audio scroll stop/play 
    // scroll to mute 
    $(window).scroll(function () {
        if ($(document).scrollTop() > 350) {
            $("#player-1").each(function () {
                this.pause();
            });
            $(".mute-1").attr('src', 'img/icon/mute-2.png');
        }
    });

    //mute fade out, scroll back fade in
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            // $('#mute-1').animate({opacity: 0}); 
            $('.back-home').fadeIn();
        } else {
            $('.back-home').fadeOut();
            // $('#mute-1').animate({opacity: 1}); 
        }
    });


    //toggle mute manually
    $(".mute-1").click(function () {
        if ($(this).attr('src') == $(this).attr('data-src')) {
            var idx1 = $(this).attr('data-swap');
            $(this).attr('src', idx1);
            $('#player-1').each(function () {
                this.pause();
            });
        } else {
            var idx2 = $(this).attr('data-src');
            $(this).attr('src', idx2);
            $('#player-1').each(function () {
                this.play();
            });
        }
    });

    var controllerS1 = new ScrollMagic.Controller();

    //scrollmagic-section-1
    // title
    var tweenS1Fadeo1 = new TimelineMax()
        .to(".title", 0.5, {
            autoAlpha: 0,
            scale: 0.7,
            force3D: true,
            delay: 0.4
        })
        .to(".mouse-icon", 0.1, {
            autoAlpha: 0,
        })
        .fromTo(".year", 0.1, {
            opacity: 0
        }, {
                opacity: 1,
                ease: Power1.easeIn
            })
        .to(".year", 0.5, {
            autoAlpha: 0,
            scale: 0.7,
            force3D: true,
            delay: 0.7
        })
        .fromTo("#header", 0.8, {
            opacity: 1
        }, {
                opacity: 0
            });

    var scene1S1Fadeo1 = new ScrollMagic.Scene({
        triggerElement: '#header',
        duration: 1200,
        triggerHook: 'onLeave',
        offset: 50
    })
        .setTween(tweenS1Fadeo1)
        .addIndicators()
        .addTo(controllerS1);

    // navbar heart color change
    var $navbarHeart = $(".navbar-heart");
    var $navbarRight = $(".goldHeart");
    var originalColors = $navbarHeart.css('color');

    $navbarRight.hover(function () {
        $navbarHeart.css("color", "#fdfe00");
    }, function () {
        $navbarHeart.css('color', originalColors);
        // or $navbarHeart.css({'color': originalColors});
    });

    //early-life 
    //  bar narration
    var tweenFadeinEl1 = new TweenMax.fromTo(".fadeIn-1", 0.5, {
        opacity: 0
    }, {
            opacity: 1,
            ease: Power1.easeIn
        });

    var scene4FadeinEl1 = new ScrollMagic.Scene({
        triggerElement: '.bar-1',
        triggerHook: 'onLeave',
        offset: 0
    })
        .setTween(tweenFadeinEl1)
        .addIndicators()
        .addTo(controllerS1);

    var tweenFadeinEl2 = new TimelineMax()
        .fromTo(".bg-img-1", 0.8, {
            opacity: 1
        }, {
                opacity: 0.2
            })
        .fromTo(".fadeIn-2", 0.5, {
            opacity: 0
        }, {
                opacity: 1,
                ease: Power1.easeIn
            });

    var scene5FadeinEl2 = new ScrollMagic.Scene({
        triggerElement: '.bar-2',
        triggerHook: 'onLeave',
        duration: 500,
        offset: -880
    })
        .setTween(tweenFadeinEl2)
        .addIndicators()
        .addTo(controllerS1);

    //
    var tweenFadeinEl3 = new TweenMax.fromTo(".fadeIn-3", 0.5, {
        opacity: 0
    }, {
            opacity: 1,
            ease: Power1.easeIn
        });

    var scene6FadeinEl3 = new ScrollMagic.Scene({
        triggerElement: '.bar-2',
        triggerHook: 'onLeave',
        offset: 0
    })
        .setTween(tweenFadeinEl3)
        .addIndicators()
        .addTo(controllerS1);

    var tweenFadeinEl4 = new TimelineMax()
        .fromTo(".bg-img-2", 0.8, {
            opacity: 1
        }, {
                opacity: 0.2
            })
        .fromTo(".fadeIn-4", 0.5, {
            opacity: 0
        }, {
                opacity: 1,
                ease: Power1.easeIn
            });

    var scene7FadeinEl4 = new ScrollMagic.Scene({
        triggerElement: '.bar-3',
        triggerHook: 'onLeave',
        duration: 500,
        offset: -900
    })
        .setTween(tweenFadeinEl4)
        .addIndicators()
        .addTo(controllerS1);

    var tweenFadeinEl5 = new TweenMax.fromTo(".fadeIn-5", 0.5, {
        opacity: 0
    }, {
            opacity: 1,
            ease: Power1.easeIn
        });


    var scene8FadeinEl5 = new ScrollMagic.Scene({
        triggerElement: '.bar-3',
        triggerHook: 'onLeave',
        offset: 0
    })
        .setTween(tweenFadeinEl5)
        .addIndicators()
        .addTo(controllerS1);

    var tweenDark = new TweenMax.fromTo(".bg-img-3", 0.5, {
        opacity: 1
    }, {
            opacity: 0,
            ease: Power1.easeIn
        });


    var sceneDark = new ScrollMagic.Scene({
        triggerElement: '.bar-4',
        triggerHook: 'onLeave',
        duration: 900,
        offset: -900
    })
        .setTween(tweenDark)
        .addIndicators()
        .addTo(controllerS1);

    //career 
    // define movement of panels
    // define movement of slides
    var tweenSlide = new TimelineMax()
        // animate to second slide
        .to(".container-scrollslide", 0.5, {
            z: -150,
            delay: 0.5
        }) // move back in 3D space
        .to(".container-scrollslide", 1, {
            x: "-25%"
        }) // move in to first slide
        .to(".container-scrollslide", 0.5, {
            z: 0
        }) // move back to origin in 3D space
        // animate to third slide
        .to(".container-scrollslide", 0.5, {
            z: -150,
            delay: 0.5
        })
        .to(".container-scrollslide", 1, {
            x: "-50%"
        })
        .to(".container-scrollslide", 0.5, {
            z: 0
        })
        // animate to forth slide
        .to(".container-scrollslide", 0.5, {
            z: -150,
            delay: 0.5
        })
        .to(".container-scrollslide", 1, {
            x: "-75%"
        })
        .to(".container-scrollslide", 0.5, {
            z: 0
        });

    var scene9Pin = new ScrollMagic.Scene({
        triggerElement: ".container-pin",
        triggerHook: "onLeave",
        duration: "500%"
    })
        .setPin(".container-pin")
        .setTween(tweenSlide)
        .addIndicators()
        .addTo(controllerS1);


    var tweenZidx = new TweenMax.set(".layer-1", {
        zIndex: -1
    });
    var scene10Zidx = new ScrollMagic.Scene({
        triggerElement: ".container-pin",
        triggerHook: "onLeave",
        offset: 60
    })
        .setTween(tweenZidx)
        .addIndicators()
        .addTo(controllerS1);



    //stop music when scroll away 
    var scene11Stopifame = new ScrollMagic.Scene({
        triggerElement: '.container-pin',
        triggerHook: 'onLeave',
        offset: -700
    })
        .addIndicators()
        .addTo(controllerS1)
        .on("enter leave", function () {

            $('iframe').each(function (index) {
                $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
            });
        });


    var scene12Stopifame2 = new ScrollMagic.Scene({
        triggerElement: '.container-pin',
        triggerHook: 'onLeave',
        offset: 500
    })
        .addIndicators()
        .addTo(controllerS1)
        .on("enter leave", function () {

            $('iframe').each(function (index) {
                $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
            });
        });

    //-----------fadeout&dead-----------
    var tweenRip1 = new TimelineMax()
        .fromTo("#career", 0.8, {
            opacity: 1
        }, {
                opacity: 0
            })
        .fromTo("#cc-5-1", 0.5, {
            opacity: 0
        }, {
                opacity: 1,
                ease: Power1.easeIn
            })
        .to("#cc-5-1", 0.5, {
            autoAlpha: 0,
            scale: 0.7,
            force3D: true,
            delay: 0.7
        });

    var sceneRip1 = new ScrollMagic.Scene({
        triggerElement: "#rip",
        triggerHook: "onLeave",
        offset: -750,
        duration: 700
    })
        .setTween(tweenRip1)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controllerS1);

    //-----------rip-----------
    function pathPrepare($el) {
        var lineLength = 136;
        $el.css("stroke-dasharray", lineLength);
        $el.css("stroke-dashoffset", lineLength);
    }

    var $rip = $("path.rip");

    // prepare SVG
    pathPrepare($rip);

    // build tween
    var tweenRip2 = new TimelineMax()
        .to($rip, 1, {
            strokeDashoffset: 0,
            ease: Power1.easeIn
        })
        .to("path", 0.5, {
            stroke: "#F48FB1",
            ease: Power1.easeNone
        });

    var sceneRip2 = new ScrollMagic.Scene({
        triggerElement: "#rip",
        triggerHook: "onLeave",
        offset: -100,
        duration: 500,
        tweenChanges: true
    })
        .setTween(tweenRip2)
        .addIndicators()
        .addTo(controllerS1);

    var tweenRipPic = new TimelineMax()
        .fromTo(".chester-rip", 2, {
            opacity: 0,
            x: -50
        }, {
                opacity: 1,
                x: 0,
                ease: Power1.easeIn
            });

    var sceneRipPic = new ScrollMagic.Scene({
        triggerElement: "#rip",
        triggerHook: "onLeave",
        offset: 0,
        duration: 320
    })
        .setTween(tweenRipPic)
        .addIndicators()
        .addTo(controllerS1);

    var tweenOfferUr = new TimelineMax()
        .fromTo('#offerurhelp .urhelptext1', 0.5, {
            y: -60,
            x: -20,
            opacity: 0
        }, {
                y: 0,
                x: 0,
                opacity: 1
            }, 0.2)
        .fromTo('#offerurhelp .urhelptext2', 0.5, {
            y: -60,
            x: -20,
            opacity: 0
        }, {
                y: 0,
                x: 0,
                opacity: 1,
                delay: 0.2
            }, 0.2)
        .fromTo('#offerurhelp .urhelptext3', 0.5, {
            y: 20,
            x: 60,
            opacity: 0
        }, {
                y: 0,
                x: 0,
                opacity: 1,
                delay: 0.4
            }, 0.2)
        .fromTo('#offerurhelp .urhelptext4', 0.5, {
            y: 20,
            x: 60,
            opacity: 0
        }, {
                y: 0,
                x: 0,
                opacity: 1,
                delay: 0.8
            }, 0.2)
        .fromTo('#offerurhelp .urhelptext5', 0.5, {
            y: 20,
            x: 60,
            opacity: 0
        }, {
                y: 0,
                x: 0,
                opacity: 1,
                delay: 1
            }, 0.2);

    var sceneOfferUr = new ScrollMagic.Scene(
        {
            triggerElement: "#offerurhelp",
            triggerHook: "onLeave",
            offset: -250,
            duration: 500
        }
    )
        .setTween(tweenOfferUr)
        .addIndicators()
        .addTo(controllerS1);

    //start the slider
    $(".slick").slick({
        infinite: true,
        arrows: false,
        dots: true,
        fade: true,
        speed: 500,
        cssEase: 'linear'
    });


});
