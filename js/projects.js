( function () {
  'use strict'
  $(document).ready( function () {
    $(".project-text").addClass("project-text-overlay")
    if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
      $(".project-text").hide()
      $(".project-title, .project-stack").addClass("project-text-shadow")
      $(".project").mouseover( function () {
        $(this).children(".project-text").fadeIn(500)
        $(this).children(".project-image").addClass("project-image-blurred")
      }).mouseleave( function () {
        $(this).children(".project-text").fadeOut(500)
        $(this).children(".project-image").removeClass("project-image-blurred")
      })
    }
  })
}())
