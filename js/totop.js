(function($) {
    
    // When to show the scroll link
    // higher number = scroll link appears further down the page    
    var upperLimit = 1000; 
        
    // Our scroll link element
    var scrollElem = $('#totop');
    
    // Scroll to top speed
    var scrollSpeed = 500;
    
    // Show and hide the scroll to top link based on scroll position    
    scrollElem.hide();
    $(window).scroll(function () {             
        var scrollTop = $(document).scrollTop();        
        if ( scrollTop > upperLimit ) {
            $(scrollElem).stop().fadeTo(300, 1); // fade back in            
        }else{        
            $(scrollElem).stop().fadeTo(300, 0); // fade out
        }
    });

    // Scroll to top animation on click
    $(scrollElem).click(function(){ 
        $('html, body').animate({scrollTop:0}, scrollSpeed); return false; 
    });

    $('a[href="http://www.fzxgj.top/"]').attr('target', '_blank').css({"color": "#43ff4b"});
    $('a[href="http://w3schools.fzxgj.top/"]').attr('target', '_blank').css({"color": "#43ff4b"});

    $.ajax({
        url:"/jsonp.html",
        dataType :'JSONP',
        jsonpCallback:"localhandler",
        contentType: "application/json;charset=utf-8",
        success: function (res) {
            $(".ourWxhao").text(res.Wechat).css({"color":'#333'});
            $(".ourQqhao").html('<a href="http://wpa.qq.com/msgrd?v=3&uin='+res.QQ+'&site=qq&menu=yes" target="_blank" style="color: rgb(51, 51, 51);">'+res.QQ+'</a>').css({"color":'#333'});
        }
    });
})(jQuery);