var $box = $('#box'); 

// TweenMax.to($box, 2, {left: 0}); 

// TweenMax.from($box, 2, {x: '+=200px', autoAlpha: 0});

// TweenLite.set($box, {x: '-=200px', scale: 0.3});
// TweenLite.set($box, {x: '+=100px', scale: 0.6, delay: 1});
// TweenLite.set($box, {x: '-50%', scale: 1, delay: 2});

function start(){
  console.log('start');
}

var tweenBox = new TimelineMax()
// .fromTo($box, 2, {x: '-=200px'}, {x: 150, ease:Sine.easeInOut});
// .set($box, {top: -10})
.set($box, {top: '-=56'})
.fromTo($box, 3, {opacity: 0}, {opacity: 1})
.from($box, 1, {y: '-=56'})

// TweenLite.fromTo($box, 2, {x: '-=200px'}, {x: 150, ease:Sine.easeInOut});