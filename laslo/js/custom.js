jQuery(function ($) {

  var $body = $("header"),
  $img = $(".s-collage .c-image");
  // $body.mousemove(function (e) {
  //   var sxPos = e.pageX / $body.innerWidth - .5;
  //   var syPos = e.pageY / $body.innerHeight - .5;
  //   var yPos = e.pageX;
  //   var xPos = e.pageY;
  //   gsap.to($img, {
  //     duration:1, 
  //     y: yPos / 15,
  //     x: xPos / 15,
  //     rotationY: 25 * sxPos,
  //     rotationX: 25 * syPos,
  //     ease: Power1.easeOut,
  //     clearProps: 'all'
  //   });

  // });
  // $body.mouseout(function (event) {
  //   gsap.to($img, {
  //     duration:1, 
  //     y: 0,
  //     x: 0,
  //     rotationY: 0,
  //     rotationX: 0,
  //   });
  // });
  var isSafari = navigator.userAgent.match(/Version\/([0-9\._]+).*Safari/);
  var p = $img[0],
  m = $img[1],
  v = $img[2],
  y = $img[3],
  g = $img[4],
  _ = $img[5],
  w = window.innerHeight / 2,
  x = window.innerWidth / 2;
  TweenMax.set(p, {
    y: -w / 20,
    x: x / 20,
    transformOrigin: "center",
    transformPerspective: 1500
  }), TweenMax.set(m, {
    y: -w / 15,
    x: x / 15,
    transformOrigin: "center",
    transformPerspective: 1e3
  }), TweenMax.set(v, {
    y: -w / 10,
    x: x / 10,
    transformOrigin: "center",
    transformPerspective: 500
  }), TweenMax.set(y, {
    y: w / 20,
    x: x / 20,
    transformOrigin: "center",
    transformPerspective: 1500
  }), TweenMax.set(g, {
    y: w / 10,
    x: x / 10,
    transformOrigin: "center",
    transformPerspective: 500
  }), TweenMax.set(_, {
    y: w / 15,
    x: x / 15,
    transformOrigin: "center",
    transformPerspective: 1e3
  }), 
  window.addEventListener("mousemove", function(e) {
    var t = e.clientX / window.innerWidth - .5,
    i = e.clientY / window.innerHeight - .5,
    n = e.clientY,
    o = e.clientX;
    isSafari || (TweenMax.to(p, 1, {
      y: -n / 20,
      x: o / 20,
      rotationY: 25 * t,
      rotationX: 25 * i,
      ease: Power1.easeOut
    }), 
    TweenMax.to(m, 1, {
      y: -n / 15,
      x: o / 15,
      rotationY: 25 * t,
      rotationX: 25 * i,
      ease: Power1.easeOut
    }), 
    TweenMax.to(v, 1, {
      y: -n / 10,
      x: o / 10,
      rotationY: 25 * t,
      rotationX: 25 * i,
      ease: Power1.easeOut
    }), 
    TweenMax.to(y, 1, {
      y: n / 20,
      x: o / 20,
      rotationY: 25 * t,
      rotationX: 25 * i,
      ease: Power1.easeOut
    }), 
    TweenMax.to(g, 1, {
      y: n / 10,
      x: o / 10,
      rotationY: 25 * t,
      rotationX: 25 * i,
      ease: Power1.easeOut
    }), 
    TweenMax.to(_, 1, {
      y: n / 15,
      x: o / 15,
      rotationY: 25 * t,
      rotationX: 25 * i,
      ease: Power1.easeOut
    })), isSafari && (TweenMax.to(p, 1, {
      y: -n / 20,
      x: o / 20,
      ease: Power1.easeOut
    }), 
    TweenMax.to(m, 1, {
      y: -n / 15,
      x: o / 15,
      ease: Power1.easeOut
    }), 
    TweenMax.to(v, 1, {
      y: -n / 10,
      x: o / 10,
      ease: Power1.easeOut
    }), 
    TweenMax.to(y, 1, {
      y: n / 20,
      x: o / 20,
      ease: Power1.easeOut
    }), 
    TweenMax.to(g, 1, {
      y: n / 10,
      x: o / 10,
      ease: Power1.easeOut
    }), 
    TweenMax.to(_, 1, {
      y: n / 15,
      x: o / 15,
      ease: Power1.easeOut
    }));
});

  // var img_hover_left = $('.s-collage .c-left .c-image');
  // var img_hover_right = $('.s-collage .c-right .c-image');
  // var block_left = $('.s-collage .c-hit-left');
  // var block_right = $('.s-collage .c-hit-right');

  // block_left.hover(function() {
  //   img_hover_left.find('img:first-child').css('opacity', '1');
  //   img_hover_left.find('img:last-child').css('opacity', '0');
  // }, function() {
  //   img_hover_left.find('img:first-child').css('opacity', '0');
  //   img_hover_left.find('img:last-child').css('opacity', '1');
  // });
  // block_right.hover(function() {
  //   img_hover_right.find('img:first-child').css('opacity', '1');
  //   img_hover_right.find('img:last-child').css('opacity', '0');
  // }, function() {
  //   img_hover_right.find('img:first-child').css('opacity', '0');
  //   img_hover_right.find('img:last-child').css('opacity', '1');
  // });



  $(".autoplay").each(function() {
    $(this).slick($(this).data());
  });
  $(".button-slide").each(function() {
    $(this).slick($(this).data());
  });

  var $btn_menu = $(".a-burger");
  var $img_menu = $('.navigation-menu .c-image ul li img');
  var i = 0
  $btn_menu.click(function(){
    if($(this).parent().children('.navigation-menu').is(':hidden')){
      $(this).addClass('active');
      $(this).parent().children('.navigation-menu').addClass('active');
      $img_menu[i].style.display = "block";
      i = i + 1;
      if (i > ($img_menu.length - 1)) {
        i = 0;
      }
    }
    else{
      $(this).removeClass('active');
      $(this).parent().children('.navigation-menu').removeClass('active');   
      $img_menu.css('display', 'none');
    };
  });

  // scroll desktop
  $(document).ready(function ($){
    if ($(document).width() > 1199){
      var menu = $('.a-logo, .a-burger, .menu_nav');
      var content = document.querySelector("#content");

      var startchange = $('main').find('.module-testimonial');
      var offset = startchange.offset();
      var change_h = startchange.height()/2;
      var data5 = $('.video-media-slider').data('color');

      var startchange2 = $('main').find('.blog-latest');
      var offset2 = startchange2.offset();    
      var change_h2 = startchange2.height()/2;
      var data6 = $('.page-contact').data('color');

      var startchange3 = $('main').find('.blog-list');
      var offset3 = startchange3.offset();
      var change_h3 = startchange3.height()/2;

      var background =  $('.a-background');
      var bounds = content.getBoundingClientRect();
      var requestId = null;
      var scroller = {
        // lower values will decrease how far it moves on scroll
        wheelMultiplier: getLineHeight(),

        // lower values will make the animation longer
        ease: 0.099,

        speed: 60000,
        minY: 0,
        maxY: bounds.height - window.innerHeight,
        y: 0
      };

      window.scrollTo(0, 0);
      window.addEventListener("wheel", onWheel);
      function onFrame() {

        scroller.speed += -scroller.speed * scroller.ease;
        scroller.y -= Math.round(scroller.speed * 1000) / 1000;
        var scroll_bg = scroller.y;
        menu.addClass('active');
        if (scroller.y < scroller.minY) {
          scroller.y = scroller.minY;
          scroller.speed = 0;
          menu.removeClass('active');
        } else if (scroller.y > scroller.maxY) {
          scroller.y = scroller.maxY;
          scroller.speed = 0;
        }

        if (scroll_bg > (offset3.top - change_h3)) {
          $('.a-burger').addClass("change-color");
        } else {
          $('.a-burger').removeClass("change-color");
        }

        if (scroll_bg > (offset2.top + change_h2)) {
          background.css({
            'background-color': data6
          });        }
          else if (scroll_bg > offset.top + change_h) {
            background.css({
              'background-color': data5
            });
          }
          else {
            background.css({
              'background-color': 'transparent'
            });
          }
          content.style.transform = "translate3d(0px," + -scroller.y + "px, 1px)";
          requestId = null;

          if (scroller.speed) {
            requestId = requestAnimationFrame(onFrame);
          }
        }

        function onWheel(event) {

          var normalized;  
          var delta = event.wheelDelta;

          if (delta) {
            normalized = (delta % 120) == 0 ? delta / 120 : delta / 12;
          } else {
            delta = event.deltaY || event.detail || 0;
            normalized = -(delta % 3 ? delta * 10 : delta / 3);
          }

          scroller.speed += normalized * scroller.wheelMultiplier;

          if (scroller.speed && !requestId) {
            requestId = requestAnimationFrame(onFrame);
          }
        }

        function getLineHeight() {

          var element = document.createElement("div");
          element.style["font-size"] = "128ex";
          document.body.appendChild(element);
          var value = getComputedStyle(element).getPropertyValue("font-size");
          var size = parseFloat(value, 10) / 128;
          document.body.removeChild(element);
          return size;
        }

        function random(min, max) {
          if (max == null) { max = min; min = 0; }
          if (min > max) { var tmp = min; min = max; max = tmp; }
          return min + (max - min) * Math.random();
        }
      }
    });
  
  var item = $('.c-hit-left, .c-hit-right');
  item.hover(function() {
    var data = $(this).data('color');
    // console.log(data);
    $('header, .s-core-values').css({
      "background-color": data
    });
  });

  $(function (){
    var    column = $('.s-core-values .c-column');
      // var column_text = column.children('.c-text');
      // console.log(column_text);
      column.hover(function() {

        var data2 = $(this).data('color');
        $('header, .s-core-values').css({
          "background-color": data2
        })
        var val = $(this).find('.c-copy').height()/2;
        var val = -val;
        $(this).find('.c-heading, .c-copy').css({
          '-webkit-transform': 'translateY(' + val +'px' + ')',
          '-moz-transform': 'translateY(' + val +'px' + ')',
          '-ms-transform': 'translateY(' + val +'px' + ')',
          '-o-transform': 'translateY(' + val +'px' + ')',
          'transform': 'translateY(' + val +'px' + ')'
        });
      }, function(){
        $(this).find('.c-heading, .c-copy').css({
          '-webkit-transform': 'matrix(1, 0, 0, 1, 0, 0)',
          '-moz-transform': 'matrix(1, 0, 0, 1, 0, 0)',
          '-ms-transform': 'matrix(1, 0, 0, 1, 0, 0)',
          '-o-transform':'matrix(1, 0, 0, 1, 0, 0)' ,
          'transform': 'matrix(1, 0, 0, 1, 0, 0)'
        });
      });
    })

  $(function(){
    var blog_hover = $('.blog-list .c-categories .c-heading a');
    blog_hover.hover(function() {
      var data3 = $(this).parents('.c-category').data('color');
      $('.blog-list').css({
        "background-color": data3
      });
      $(this).parents('.blog-list').addClass('in-hover');

      var data4 = $(this).parents('.c-category').data('color');
      $(this).parents('.blog-list').css({
        'background-color': data4
      })

      var blog_img = $(this).parents('.c-category').find('img:first-child').attr('src');
      var blog_img_thumb = $(this).parents('.c-category').find('img:last-child').attr('src');
      var style2 = "url('" + blog_img + "')";
      var style3 = "url('" + blog_img_thumb + "')";
      $(this).parents('section').children('.c-image-l,.c-image-s').css({
        'opacity': '1',
        'transform': 'translateY(0)'
      })
      $(this).parents('section').children('.c-image-l').find('.c-inside').css({
        "background-image":style2
      });
      $(this).parents('section').children('.c-image-s').find('.c-inside').css({
        "background-image": style3
      });

    },
    function(){
      $(this).parents('.blog-list').removeClass('in-hover');
      $(this).parents('.blog-list').css({
        'background-color': '#ffffff'
      })
      $(this).parents('section').children('.c-image-l,.c-image-s').css({
        'opacity': '0',
        'transform':'translateY(-25%)'
      })
      $(this).parents('section').children('.c-image-l').find('.c-inside').css({
        "background-image":'none'
      });
      $(this).parents('section').children('.c-image-s').find('.c-inside').css({
        "background-image": 'none'
      });
    });
  });
  // scroll mobile
  $(function()  {
    if ($(document).width() < 1199){
      $(document).scroll( () => {
        var  menu_mb = $('.a-logo, .a-burger, .menu_nav');
        var body_mb = $('body,html');
        var location_mb = menu_mb.offset().top;
        var startpage_mb = body_mb.scrollTop();

        var startchange_mb = $('main').find('.module-testimonial');
        var offset_mb = startchange_mb.offset();
        var change_h_mb = startchange_mb.height()/2;
        var data5_mb = $('.video-media-slider').data('color');

        var startchange2_mb = $('main').find('.blog-latest');
        var offset2_mb = startchange2_mb.offset();    
        var change_h2_mb = startchange2_mb.height()/2;
        var data6_mb = $('.page-contact').data('color');

        var startchange3_mb = $('main').find('.blog-list'); 
        var offset3_mb = startchange3_mb.offset();
        var change_h3_mb = startchange3_mb.height()/2;

        var background_mb =  $('.a-background');

        (startpage_mb >= location_mb) ? (menu_mb.addClass('active')) : (menu_mb.removeClass('active'));
        (startpage_mb >= (offset3_mb.top - change_h3_mb)) ? ($('.a-burger').addClass('change-color')) : ($('.a-burger').removeClass('change-color'));

        if (startpage_mb > (offset2_mb.top + change_h2_mb)) {
          background_mb.css({
            'background-color': data6_mb
          });        }
          else if (startpage_mb > (offset_mb.top + change_h3_mb)) {
            background_mb.css({
              'background-color': data5_mb
            });
          }
          else {
            background_mb.css({
              'background-color': 'transparent'
            });
          }
        }); 
    }
  });
});