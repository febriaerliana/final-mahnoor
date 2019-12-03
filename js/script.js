$(function() {



    $('.add').on('click', function() {
        let v = $(this.nextElementSibling).val();
        v = parseInt(v);
        v += 1;
        $(this.nextElementSibling).val(v);
    });
    $('.substract').on('click', function() {
        let v = $(this.nextElementSibling.nextElementSibling).val();
        v = parseInt(v);
        v -= 1;
        if (v <= 0) {
            v = 0;
        }
        $(this.nextElementSibling.nextElementSibling).val(v);
    });



    $('nav-menu a').click(function(e) {
        var targetHref = $(this).attr('href');
            
        $('html, body').animate({
          scrollTop: $(targetHref).offset().top
      }, 1000);
          
      e.preventDefault();
    });
    });