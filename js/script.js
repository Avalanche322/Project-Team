$(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(500).fadeOut('slow');
});

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

$(document).ready(function(){
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

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

$("nav").on("click","a", function (event) {
    // исключаем стандартную реакцию браузера
    event.preventDefault();

    // получем идентификатор блока из атрибута href
    var id  = $(this).attr('href'),

    // находим высоту, на которой расположен блок
        top = $(id).offset().top;
     
    // анимируем переход к блоку, время: 800 мс
    $('body,html').animate({scrollTop: top}, 800);
});
