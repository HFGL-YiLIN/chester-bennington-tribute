$(document).ready(function ($) {
    // document.getElementById('t-chester').style.opacity = 1;
    // var heightH = $('#header').height(); 
    // var widthH = $('#header').width(); 
    // var $ol = $('#overlay'); 
    // $ol.height(heightH); 
    // $ol.width(widthH); 
    // $('#overlay').css({'height': $('#header').innerHeight()}); 


//fixed title
    var $tChester = $("#t-chester");
    var tweenS1Title = new TimelineMax()
        .fromTo('.rotate-title-fix', 2.5, {
            opacity: 0
        }, {
            opacity: 1,
            ease: Power1.easeIn
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
                //                TweenLite.to($sp.text(t[i]), 0.5, {width:widths[i], onComplete:function () {
                TweenLite.to($sp.text(t[i]), 5, {
                    autoAlpha: 1
                });
                TweenLite.to($sp.text(t[i]), 1.5, {
                    autoAlpha: 0,
                    delay: 2.5,
                    onComplete: loop
                });
                //            }});
            });
        })();
    });

    //scrollmagic-section-1
    // title effect
    var controllerS1 = new ScrollMagic.Controller();

    var tweenS1Fadeo1 = new TweenMax.to(".title", 0.1, {
        autoAlpha: 0,
        y: 400,
        scale: 0.7,
        force3D: true
    });

    var tweenS1Fadeo2 = new TweenMax.to(".year", 0.1, {
        autoAlpha: 0,
        y: 300,
        scale: 0.7,
        force3D: true
    });

    var tweenS1Fadei = new TweenMax.fromTo(".year", 0.3, {
        opacity: 0
    }, {
        opacity: 1,
        ease: Power1.easeIn
    });

    var sceneS1Fadeo1 = new ScrollMagic.Scene({
            triggerElement: '#header',
            duration: 380,
            triggerHook: 'onLeave',
            offset: 50
        })
        .setTween(tweenS1Fadeo1)
        .addIndicators()
        .addTo(controllerS1);

    var sceneS1Fadei = new ScrollMagic.Scene({
            triggerElement: '#header',
            triggerHook: 'onLeave',
            offset: 520
        })
        .setTween(tweenS1Fadei)
        .addIndicators()
        .addTo(controllerS1);


    var sceneS1Fadeo2 = new ScrollMagic.Scene({
            triggerElement: '#header',
            duration: 420,
            triggerHook: 'onLeave',
            offset: 650
        })
        .setTween(tweenS1Fadeo2)
        .addIndicators()
        .addTo(controllerS1);

    //early-life 
    // var tweenFadeinPs = new TweenMax.fromTo(".fadeIn-1", 3, {opacity: 0}, {opacity: 1}); 
    //
    var tweenFadeinEl1 = new TweenMax.fromTo(".fadeIn-1", 0.5, {
        opacity: 0
    }, {
        opacity: 1,
        ease: Power1.easeIn
    });

    var sceneFadeinEl1 = new ScrollMagic.Scene({
            triggerElement: '.bar-1',
            triggerHook: 'onLeave',
            offset: -150
        })
        .setTween(tweenFadeinEl1)
        .addIndicators()
        .addTo(controllerS1);

    var tweenFadeinEl2 = new TweenMax.fromTo(".fadeIn-2", 0.5, {
        opacity: 0
    }, {
        opacity: 1,
        ease: Power1.easeIn
    });

    var sceneFadeinEl2 = new ScrollMagic.Scene({
            triggerElement: '.bar-2',
            triggerHook: 'onLeave',
            offset: -450
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

    var sceneFadeinEl3 = new ScrollMagic.Scene({
            triggerElement: '.bar-2',
            triggerHook: 'onLeave',
            offset: 0
        })
        .setTween(tweenFadeinEl3)
        .addIndicators()
        .addTo(controllerS1);

    var tweenFadeinEl4 = new TweenMax.fromTo(".fadeIn-4", 0.5, {
        opacity: 0
    }, {
        opacity: 1,
        ease: Power1.easeIn
    });

    var sceneFadeinEl4 = new ScrollMagic.Scene({
            triggerElement: '.bar-3',
            triggerHook: 'onLeave',
            offset: -450
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

    var sceneFadeinEl5 = new ScrollMagic.Scene({
            triggerElement: '.bar-3',
            triggerHook: 'onLeave',
            offset: 0
        })
        .setTween(tweenFadeinEl5)
        .addIndicators()
        .addTo(controllerS1);

//career 
// define movement of panels
  var wipeAnimation = new TimelineMax()
    .fromTo(".slide-b", 1, {
      x: "100%"
    }, {
      x: "0%",
      ease: Linear.easeNone
    }) // in from right
    .fromTo(".slide-c", 1, {
      x: "-100%"
    }, {
      x: "0%",
      ease: Linear.easeNone
    }) // in from left
    .fromTo(".slide-d", 1, {
      y: "-100%"
    }, {
      y: "0%",
      ease: Linear.easeNone
    }); // in from top

  // create scene to pin and link animation
  var scene = new ScrollMagic.Scene({
      triggerElement: ".container-pin",
      triggerHook: "onLeave",
      duration: "340%", 
      offset: 60
    })
    .setPin(".container-pin")
    .setTween(wipeAnimation)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controllerS1);


var tweenZidx = new TweenMax.set(".layer-1", {zIndex:-1}); 
var sceneZidx = new ScrollMagic.Scene({
  triggerElement: ".container-pin",
  triggerHook: "onLeave",
  offset: 60
})
.setTween(tweenZidx)
.addIndicators()
.addTo(controllerS1); 








    //scrollmagic-section-2
    // var controllerS2 = new ScrollMagic.Controller();

    // var $S2Title = $("#time-line .title-el"); 

    // var tweenS2Title = new TimelineMax()
    // .fromTo($S2Title, 1, {opacity: 0}, {opacity: 1})
    // .fromTo($S2Title, 0.7, {y: 0, x: 0}, {y: -170, x: 0}); 

    // var sceneS2Title = new ScrollMagic.Scene({
    //     triggerElement: '#time-line',
    //     triggerHook: 'onLeave',
    //     offset: 0
    // })
    // .setTween(tweenS2Title)
    // .addIndicators()
    // .addTo(controllerS1);








    //others-section-2
    $('.carousel').carousel({
        interval: 10000000 * 10
    });

});