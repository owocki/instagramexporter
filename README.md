There are a few good tools around the web for exporting instagram photos from your account.  Unfortunately, these tools only allow you to export you *own* photos from Instagram.  Well, I’d like to be able to copies of other photos on Instagram too.

[Here](http://owocki.com/tools/export-instagram-photos-bookmarklet/) is a bookmarklet that allows me to export anyone’s instagram photos.  Drag this bookmarklet into your browser bookmark bar and navigate to instagram.com to use it.

> javascript:(function(e,a,g,h,f,c,b,d)%7Bif(!(f%3De.jQuery)%7C%7Cg>f.fn.jquery%7C%7Ch(f))%7Bc%3Da.createElement(%27script%27)%3Bc.type%3D%27text/javascript%27%3Bc.src%3D%27http://ajax.googleapis.com/ajax/libs/jquery/%27%2Bg%2B%27/jquery.min.js%27%3Bc.onload%3Dc.onreadystatechange%3Dfunction()%7Bif(!b%26%26(!(d%3Dthis.readyState)%7C%7Cd%3D%3D%27loaded%27%7C%7Cd%3D%3D%27complete%27))%7Bh((f%3De.jQuery).noConflict(1),b%3D1)%3Bf(c).remove()%7D%7D%3Ba.documentElement.childNodes%5B0%5D.appendChild(c)%7D%7D)(window,document,%271.3.2%27,function(%24,L)%7Bvar imgURL %3D %24(%27.media-photo img%27).attr(%27src%27)%3B%3Bif(typeof imgURL %3D%3D %27undefined%27 )imgURL %3D %24(".media-photo, .media-inner .imgContainer .imgImg").css(%27background-image%27).replace(%27url(%27,%27%27).replace(%27)%27,%27%27)%3Bvar win %3D window.open(imgURL,%27_blank%27)%3Bwin.focus()%3B%7D)%3B

Cheers, and happy instagramming!



