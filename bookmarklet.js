javascript:(
	function(e,a,g,h,f,c,b,d){
		if(!(f=e.jQuery)||g>f.fn.jquery||h(f)){
			c=a.createElement('script');c.type='text/javascript';
			c.src='http://ajax.googleapis.com/ajax/libs/jquery/'+g+'/jquery.min.js';
			c.onload=c.onreadystatechange=function(){
				if(!b&&(!(d=this.readyState)||d=='loaded'||d=='complete')){
					h((f=e.jQuery).noConflict(1),b=1);f(c).remove()
					}
			};
			
			a.documentElement.childNodes[0].appendChild(c)}
			}
	)(window,document,'1.3.2',function($,L){
	
	var url = $(".media-photo, .media-inner .imgContainer .imgImg").css("background-image").replace("url(","").replace(")","");
	window.open(url,'_blank');
	win.focus();
});
