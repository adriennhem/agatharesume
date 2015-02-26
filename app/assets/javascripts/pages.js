
var ready;
ready = function() {

   $('.scroll-top').click(function(){
  $('body,html').animate({scrollTop:0},1000);
})

// scroll to section 
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top+20
	        }, 700);
	        return false;
	      }
	    }
	  });
	});



// Highlight active nav
$('body').scrollspy({ target: '.navbar' })


// Pie chart 

$('.last:last-child').waypoint(function() {
   //create instance
    $('.chart').easyPieChart({
        animate: 2000,
        barColor: '#FF675F',
        lineWidth:10,
        trackColor:'#E8E7E7',
        scaleColor:false,
        lineCap:'circle',
        easing: 'easeOutBounce',
				onStep: function(from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
				}
    });


});


};


$(document).ready(ready);
$(document).on('page:load', ready);


  window.analytics=window.analytics||[],window.analytics.methods=["identify","group","track","page","pageview","alias","ready","on","once","off","trackLink","trackForm","trackClick","trackSubmit"],window.analytics.factory=function(t){return function(){var a=Array.prototype.slice.call(arguments);return a.unshift(t),window.analytics.push(a),window.analytics}};for(var i=0;i<window.analytics.methods.length;i++){var key=window.analytics.methods[i];window.analytics[key]=window.analytics.factory(key)}window.analytics.load=function(t){if(!document.getElementById("analytics-js")){var a=document.createElement("script");a.type="text/javascript",a.id="analytics-js",a.async=!0,a.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.io/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a,n)}},window.analytics.SNIPPET_VERSION="2.0.9",
  window.analytics.load("3RFWifDMXM");
  window.analytics.page();




