/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("lang_line").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.lang_sel')) {
      var dropdowns = document.getElementsByClassName("lang_content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  $(document).ready(function(){
    $(".mainMenu>li").hover(function() {
      var isHovered = $(this).is(":hover");
      if (isHovered) {
        $(this).children("#subMenu_box").stop().fadeIn(200);
      } else {
        $(this).children("#subMenu_box").stop().fadeOut(200);
      }
    }); 
  });    

  
    // $("#mainMenu_bar").append('<div class="bg"></div>');
    // $(".mainMenu>li>a").hover(
    //   function () {
    //      $(this).children('#subMenu_box,.bg').stop().slideDown(300);
    //   }, 
    //   function () {
    //     $(this).children('#subMenu_box,.bg').stop().slideUp(300);

    //   }
    // );
  // }); 
  