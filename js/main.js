$(document).ready(function () {
    // scrollspy
    // spy 
    $('.blog-contents').scroll(function () { 
        $('.blog-content-item').each(function () { 
            lengths = $(this).offset().top;
            if (lengths > -400 && lengths <400)  {
                href ='.' + $(this).attr('value');
                $(href).addClass('actives').siblings().removeClass('actives'); 
            };
        });
    });
    // scroll 
    $('.list-blog-item').click(function (event) {
        event.preventDefault(); 
        setTimeout(() => {
            $(this).addClass('actives').siblings().removeClass('actives'); 
        },500);   
        link = $(this).attr('href');
        position = $(link).attr('value');
        height = $('.blog-contents').height();
        $('.blog-contents').animate({scrollTop: position * height},800);
    });
    window.addEventListener("scroll", function(){
        if (window.scrollY ==0) {
             $('.navbar').removeClass("color-bg");
        }else if(window.scrollY >0){ $('.navbar').addClass("color-bg")};
    });
    $('.list-item').click(function (e) { 
        e.preventDefault();
        link = $(this).attr('href');
        $(link).addClass('show').siblings().removeClass('show'); 
        $(this).addClass('visited').siblings().removeClass('visited'); 
    });
    $('.card-product').addClass("col-md-3 card");
    $('.product-name').click(function (e) { 
        e.preventDefault();
        show ='#' + ($(this).attr('value'));
        if (($(show).css('height'))== '350px') {
            $(show).css('height','max-content');
            $(show).css('overflow-y','hidden');
        } else {
            $(show).css('overflow-y','scroll');
            $(show).css('height','350px');
        };
    });
    $('.back-top').click(function (e) { 
        e.preventDefault();
        $('html').animate({scrollTop:0},500);
    });
});
