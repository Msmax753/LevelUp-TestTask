$('.reviews__content').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    prevArrow: ".arrow__prev",
    nextArrow: ".arrow__next",
  });

  $(".button").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".form").offset().top
    }, 1000);
});


function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    
    
    return {
     'total': t,
     
     
     'minutes': minutes,
     'seconds': seconds
   };
  }
  
   function initializeClock(id, endtime) {
   var clock = document.getElementById(id);
  
   var hoursSpan = clock.querySelector('.hours')
   var minutesSpan = clock.querySelector('.minutes');
   var secondsSpan = clock.querySelector('.seconds');
  
  function updateClock() {
  var t = getTimeRemaining(endtime);
   
    
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
  
   updateClock();
  var timeinterval = setInterval(updateClock, 1000);
  }
  
    var deadline = new Date(Date.parse(new Date()) + 30 * 60 * 1000);
    initializeClock('clockdiv', deadline);  


    document.querySelector('.phone__input').addEventListener('input', 
    function(e){
      this.value = this.value.replace(/[^\d.]/g, '');
    }
)