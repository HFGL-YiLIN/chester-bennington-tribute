//  $(document).ready(function ($) {
//        var controller = new ScrollMagic();
//         var blockTween = TweenMax.to('.title h1', 1.5, {
//         backgroundColor: 'red'
//     });

//     var containerScene = new ScrollScene({
//             triggerElement: '#title',
//             triggerHook: 'onLeave',
//             duration: 350,
//             offset: 200
//         })
//         .setTween(blockTween)
//         .addTo(controller);
//                 containerScene.addIndicators({zindex: 100})

// /*    var containerScene = new ScrollMagic.Scene({
//             triggerElement: '#container',
//             duration: 500
//         })
//         .setPin('#block')
//         .addIndicators()
//         .addTo(controller); */  
// }); 
$(document).ready(function ($) {
    // document.getElementById('t-chester').style.opacity = 1;
    // var heightH = $('#header').height(); 
    // var widthH = $('#header').width(); 
    // var $ol = $('#overlay'); 
    // $ol.height(heightH); 
    // $ol.width(widthH); 
    // $('#overlay').css({'height': $('#header').innerHeight()}); 

    var $tChester = $("#t-chester");
    var tweenS1Title = new TimelineMax()
        .fromTo($tChester, 2.5, {
            opacity: 0
        }, {
            opacity: 1,
            ease: Power1.easeIn
        })
        .from($tChester, 1.5, {
            y: '-= 180'
        });


    $(function () {
        //rotate title
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
        y: 160,
        scale: 0.7,
        force3D: true
    });

    var tweenS1Fadeo2 = new TweenMax.to(".year", 0.1, {
        autoAlpha: 0,
        y: 300,
        scale: 0.7,
        force3D: true
    });

    var tweenS1Fadei = new TweenMax.fromTo(".year", 0.8, {
        opacity: 0
    }, {
        opacity: 1
    });

    var sceneS1Fadeo1 = new ScrollMagic.Scene({
            triggerElement: '#header',
            duration: 180,
            triggerHook: 'onLeave',
            offset: 0
        })
        .setTween(tweenS1Fadeo1)
        .addIndicators()
        .addTo(controllerS1);

    var sceneS1Fadei = new ScrollMagic.Scene({
            triggerElement: '#header',
            triggerHook: 'onLeave',
            offset: 190
        })
        .setTween(tweenS1Fadei)
        .addIndicators()
        .addTo(controllerS1);


    var sceneS1Fadeo2 = new ScrollMagic.Scene({
            triggerElement: '#header',
            duration: 420,
            triggerHook: 'onLeave',
            offset: 230
        })
        .setTween(tweenS1Fadeo2)
        .addIndicators()
        .addTo(controllerS1);

    //parallel scrolling 
    // var tweenFadeinPs = new TweenMax.fromTo(".fadeIn-1", 3, {opacity: 0}, {opacity: 1}); 
    var tweenFadeinPs = new TweenMax.fromTo(".fadeIn-1", 1.5, {
        opacity: 0
    }, {
        opacity: 1,
        ease: Power1.easeIn
    });

    var scenefadeInPs = new ScrollMagic.Scene({
            triggerElement: '.bar-1',
            triggerHook: 'onLeave'
        })
        .setTween(tweenFadeinPs)
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
        interval: 1000 * 10
    });

});