var Btns = document.querySelectorAll('div');
// Btns.forEach(function(Btn){
    window.addEventListener('keydown',function(){
       if(event.keyCode == 65){
           var aa = document.getElementById('aa');
           aa.play();
       }else if(event.keyCode == 83){
            var ss = document.getElementById('ss');
            ss.play();
       }else if(event.keyCode == 68){
            var dd = document.getElementById('dd');
            dd.play();
       }
       else if(event.keyCode == 70){
        var ff = document.getElementById('ff');
        ff.play();
       }
       else if(event.keyCode == 71){
        var gg = document.getElementById('gg');
        gg.play();
       }
       else if(event.keyCode == 72){
        var hh = document.getElementById('hh');
        hh.play();
       }
       else if(event.keyCode == 74){
        var jj = document.getElementById('jj');
        jj.play();
       }
       else if(event.keyCode == 75){
        var kk = document.getElementById('kk');
        kk.play();
       }
       else if(event.keyCode == 76){
        var ll = document.getElementById('ll');
        ll.play();
       }
    })

// })
