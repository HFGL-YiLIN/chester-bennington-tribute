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

//audio scroll stop/play 
window.addEventListener("scroll", myFunction);

function myFunction() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        document.getElementById("player-1").pause(); 
    } else {
        document.getElementById("player-1").play();  
    }
}

// function muteToggle(img) {
//     if(img.src == "img/icon/unmute-2.png")
//     {img.src = "img/icon/mute-2.png"; 
//     documet.getElementById("player-1").pause();}
//     else {
//         img.src = "img/icon/unmute-2.png";
//         document.getElementById("player-1").play();
//     }

// }

$("#mute-1").click(function(){
    if($(this).attr('src') == $(this).attr('data-src'))
    {
        var idx1 = $(this).attr('data-swap');
        $(this).attr('src', idx1);
        $('#player-1').each(function(){
    this.pause(); 
}); 
    }
    else {
        var idx2 = $(this).attr('data-src'); 
        $(this).attr('src', idx2); 
        $('#player-1').each(function(){
    this.play(); 
});
    }
});

    var controllerS1 = new ScrollMagic.Controller();
    
var sceneMutePin = new ScrollMagic.Scene({

triggerElement: '#header',
            duration: 580,
            triggerHook: 'onLeave',
            offset: -10
        })
        .setPin("#mute-1")
        .addIndicators()
        .addTo(controllerS1);

    //scrollmagic-section-1
    // title effect

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

    var scene1S1Fadeo1 = new ScrollMagic.Scene({
            triggerElement: '#header',
            duration: 380,
            triggerHook: 'onLeave',
            offset: 50
        })
        .setTween(tweenS1Fadeo1)
        .addIndicators()
        .addTo(controllerS1);

    var scene2S1Fadei = new ScrollMagic.Scene({
            triggerElement: '#header',
            triggerHook: 'onLeave',
            offset: 520
        })
        .setTween(tweenS1Fadei)
        .addIndicators()
        .addTo(controllerS1);


    var scene3S1Fadeo2 = new ScrollMagic.Scene({
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

    var scene4FadeinEl1 = new ScrollMagic.Scene({
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

    var scene5FadeinEl2 = new ScrollMagic.Scene({
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

    var scene6FadeinEl3 = new ScrollMagic.Scene({
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

    var scene7FadeinEl4 = new ScrollMagic.Scene({
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

    var scene8FadeinEl5 = new ScrollMagic.Scene({
            triggerElement: '.bar-3',
            triggerHook: 'onLeave',
            offset: 0
        })
        .setTween(tweenFadeinEl5)
        .addIndicators()
        .addTo(controllerS1);

//career 
// define movement of panels
  // define movement of slides
		var tweenSlide = new TimelineMax()
			// animate to second slide
			.to(".container-scrollslide", 0.5, {z: -150, delay: 0.5})		// move back in 3D space
			.to(".container-scrollslide", 1,   {x: "-25%"})	// move in to first slide
			.to(".container-scrollslide", 0.5, {z: 0})				// move back to origin in 3D space
			// animate to third slide
			.to(".container-scrollslide", 0.5, {z: -150, delay: 0.5})
			.to(".container-scrollslide", 1,   {x: "-50%"})
			.to(".container-scrollslide", 0.5, {z: 0})
			// animate to forth slide
			.to(".container-scrollslide", 0.5, {z: -150, delay: 0.5})
			.to(".container-scrollslide", 1,   {x: "-75%"})
			.to(".container-scrollslide", 0.5, {z: 0});

		// create scene to pin and link animation
		var scene9Pin = new ScrollMagic.Scene({
				triggerElement: ".container-pin",
				triggerHook: "onLeave",
				duration: "500%"
			})
			.setPin(".container-pin")
			.setTween(tweenSlide)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controllerS1);


var tweenZidx = new TweenMax.set(".layer-1", {zIndex:-1}); 
var scene10Zidx = new ScrollMagic.Scene({
  triggerElement: ".container-pin",
  triggerHook: "onLeave",
  offset: 60
})
.setTween(tweenZidx)
.addIndicators()
.addTo(controllerS1); 



//stop when scroll away 
var scene11Stopifame = new ScrollMagic.Scene({
    triggerElement: '.container-pin', 
    triggerHook: 'onLeave',
    offset: -700
})
.addIndicators()
.addTo(controllerS1)
.on("enter leave", function(){

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
.on("enter leave", function(){

$('iframe').each(function (index) {
$(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');    
    });
});




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