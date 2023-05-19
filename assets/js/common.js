$(function(){ 

  /**
   * 마우스 커서
   */
  $('body').mousemove(function(e){
    xVal=e.clientX-25;
    yVal=e.clientY-25;
    // xVal=e.pageX;
    // // yVal=e.pageY;
    // console.log(xVal+'///'+yVal);

    gsap.to('.cursor',{
      x:xVal,
      y:yVal,
      stagger:0.01
    })
  })



//헤더

/** 
 * nav 
 * close,open
 */
// open
$('.header .btn-menu').mouseover(function(e){
    e.preventDefault();
    $('.nav').addClass('on')
    $('.header .contact-area').addClass('on')
    $('.header .line-box').addClass('on')
    $('.header .logo a').addClass('on')
    $('.header .txt').addClass('on')
    $('.nav .nav-item .item').addClass('on')
    $('.header .btn-menu').addClass('on')
    $('.header .line').addClass('on')
})
$('.nav-wrap').mouseover(function(e){
    e.preventDefault();
    $('.nav').addClass('on')
    $('.header .contact-area').addClass('on')
    $('.header .line-box').addClass('on')
    $('.header .logo a').addClass('on')
    $('.header .txt').addClass('on')
    $('.nav .nav-item .item ').addClass('on')
    $('.header .btn-menu').addClass('on')
    $('.header .line').addClass('on')
})
//close
$('.nav').mouseout(function(e){
    $('.nav').removeClass('on')
    $('.header .contact-area').removeClass('on')
    $('.header .line-box').removeClass('on')
    $('.header .logo a').removeClass('on')
    $('.header .txt').removeClass('on')
    $('.nav .nav-item .item').removeClass('on')
    $('.header .btn-menu').removeClass('on')
    $('.header .line').removeClass('on')
  });

//메인
/**
 * sc-main
 * btn-down
 **/  
  s1Pos = $('.sc-bean').offset().top;

  console.log(s1Pos);

  $('.btn-down').click(function(){
    window.scrollTo({top:s1Pos,behavior:"smooth"})
  })

//headline
const introTxt = new SplitType('.sc-main .headline span',{ types: 'words, chars', });
gsap.from(introTxt.chars,{
  delay:0.5,
  opacity:0,
  stagger:0.05,
})

/**
 * sc-bean
 **/ 
//headline
const beanTxt = new SplitType('.sc-bean .headline span',{ types: 'words, chars', });
gsap.from(beanTxt.chars,{
  scrollTrigger:{
    trigger:".sc-bean .group-txt",
    start: "0% 60%",
    end:"100% 100%",
    scrub:2,
    // markers:true,
},
opacity: 0,
delay:2,
stagger:0.05
})

/** 
 * sc-coffee
 */
gsap.set('.coffee-inner',{
    scale: 0.8
  })
gsap.to('.coffee-inner',{
    scrollTrigger:{
      trigger:".coffee-inner",
      start:"0% 100%",
      end:"0% 0%",
      scrub:2,
      // markers:true,
  },
  'scale': '1'
})

/** 
 * sc-blend
 * headline
 */
const blendTxt = new SplitType('.sc-blend .headline span',{ types: 'words, chars', });
gsap.from(blendTxt.chars,{
  scrollTrigger:{
    trigger:".sc-blend .headline-area",
    start: "0% 60%",
    end:"100% 100%",
    scrub:2,
    // markers:true,
},
opacity: 0,
delay:2,
stagger:0.05
})


/** 
 * sc-class
 */

//bg scale
gsap.set('.class-bg',{
  scale: 0
})
gsap.to('.class-bg',{
  scrollTrigger:{
    trigger:".sc4",
    start:"-50% 100%",
    end:"0% 0%",
    scrub:2,
    // markers:true,
},
'scale': '1'
})

//img-box
gsap.set('.sc-class .img-box.first',{
    xPercent:30
  })
gsap.to('.sc-class .img-box.first',{
    scrollTrigger:{
      trigger:".sc-class .img-area",
      start: "0% 80%",
      end:"100% 100%",
      scrub:1,
      // markers:true,
  },
  'xPercent': '20',
})
gsap.set('.sc-class .img-box.last',{
    xPercent:-30
  })
gsap.to('.sc-class .img-box.last',{
    scrollTrigger:{
      trigger:".sc-class .img-area",
      start: "0% 80%",
      end:"100% 100%",
      scrub:1,
      // markers:true,
  },
  'xPercent': '-20',
})

//headline
const classTxt = new SplitType('.sc-class .headline span',{ types: 'words, chars', });
gsap.from(classTxt.chars,{
  scrollTrigger:{
    trigger:".sc-class .class-bg",
    start: "0% 100%",
    end:"30% 50%",
    scrub:2,
    // markers:true,
},
opacity: 0,
delay:2,
stagger:0.05
})

/** 
 * sc-card
 */
//desc
const descTxt = new SplitType('.sc-card .txt',{ types: 'words, chars', });
gsap.from(descTxt.chars,{
  scrollTrigger:{
    trigger:".sc-card .group-txt",
    start: "0% 60%",
    end:"70% 100%",
    scrub:2,
    // markers:true,
},
opacity: 0,
delay:2,
stagger:0.05
})

//card style
$('.sc-card .group-img .img-box.last .frame').plate({
  inverse: true
});










}) //지우지말것