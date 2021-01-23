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
