$(document).ready(function () {
  //Sticky Nav
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("#headerDiv").addClass("sticky");
      } else {
        $("#headerDiv").removeClass("sticky");
      }
    },
    {
      offset: "60px",
    }
  );

  //Call To Action Scroll
  $(".js--scroll-to-plan").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    );
  });

  $(".js--scroll-to-start").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  // Anchor Scroll
  $(function () {
    $("a[href*=#]:not([href=#])").click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000
          );
          return false;
        }
      }
    });
  });

  // Animation On Scroll
  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-2").waypoint(
    function (direction) {
      $(".js--wp-2").addClass("animated fadeInUp");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-3").waypoint(
    function (direction) {
      $(".js--wp-3").addClass("animated fadeIn");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-4").waypoint(
    function (direction) {
      $(".js--wp-4").addClass("animated pulse");
    },
    {
      offset: "50%",
    }
  );

  //Mobile Nav
  $(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i");

    nav.slideToggle(200);

    if (icon.hasClass("fa-align-right")) {
      icon.addClass("fa-times");
      icon.removeClass("fa-align-right");
    } else {
      icon.addClass("fa-align-right");
      icon.removeClass("fa-times");
    }

    // var icon = $('.')
    // <ion-icon name="close-outline"></ion-icon>
    // console.log(document.getElementsByClassName("mob-nav")[0])
    // var classes = document.getElementsByClassName("mob-nav")[0];
    // if(classes.innerHTML == '<ion-icon class="mob-nav" name="menu-outline"></ion-icon>'){
    //   console.log("true");
    //   classes.innerHTML="";
    //   classes.innerHTML='<ion-icon name="close-outline"></ion-icon>';
    // }else{
    //   classes.innerHTML="";
    //   classes.innerHTML='<ion-icon class="mob-nav" name="menu-outline"></ion-icon>';
    // }
  });
});
