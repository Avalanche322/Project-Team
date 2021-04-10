/*=====================================Preloader========================================================*/
$(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(500).fadeOut('slow');
});
/*=====================================Our Skills Progres========================================================*/
$(".dial").knob();
$({animatedVal: 0}).animate({animatedVal: 90}, {
  duration: 2000,
  easing: "swing",
  step: function() { 
      $(".dial").val(Math.ceil(this.animatedVal)).trigger("change"); 
  }   
}); 

$(".dial1").knob();
$({animatedVal: 0}).animate({animatedVal: 75}, {
  duration: 2000,
  easing: "swing",
  step: function() { 
      $(".dial1").val(Math.ceil(this.animatedVal)).trigger("change"); 
  }   
}); 

$(".dial2").knob();
$({animatedVal: 0}).animate({animatedVal: 70}, {
  duration: 2000,
  easing: "swing",
  step: function() { 
      $(".dial2").val(Math.ceil(this.animatedVal)).trigger("change"); 
  }   
}); 

$(".dial3").knob();
$({animatedVal: 0}).animate({animatedVal: 85}, {
  duration: 2000,
  easing: "swing",
  step: function() { 
      $(".dial3").val(Math.ceil(this.animatedVal)).trigger("change"); 
  }   
}); 
/*=====================================Menu for mobile========================================================*/
$(document).ready(function(){
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

/*============================On Skroll Page and off for mobeli==============================================*/
function windowSize(){
    if ($(window).width() >= '820'){
jQuery(window).scroll(function(){
         var $sections = $('div');
  $sections.each(function(i,el){
        var top  = $(el).offset().top-20;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
      if( scroll > top && scroll < bottom){
            $('a.active').removeClass('active');
      $('a[href="#'+id+'"]').addClass('active');

        }
    })
 });
}
}
$(window).on('load resize',windowSize);
$("nav").on("click","a", function (event) {
    // исключаем стандартную реакцию браузера
    event.preventDefault();

    // получем идентификатор блока из атрибута href
    var id  = $(this).attr('href'),

    // находим высоту, на которой расположен блок
        top = $(id).offset().top;
     if ($(window).width() >= '820'){
    // анимируем переход к блоку, время: 0 мс
    $('body,html').animate({scrollTop: top}, 800);
  } else{
    // анимируем переход к блоку, время: 800 мс
     $('body,html').animate({scrollTop: top}, 0);
  }
});

/*=====================================Animation========================================================*/
const animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0){
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(){
    for(let index = 0; index < animItems.length; index++){
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if(animItemHeight > window.innerHeight){
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
        animItem.classList.add('_active');
      } else{
        if(!animItem.classList.contains('_anim-no-hide')){
          animItem.classList.remove('_active');
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }

  setTimeout(() => {
    animOnScroll();
  }, 1500);
}