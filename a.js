/*
MX = EXEC_CODE_JS | KM = DATA.HTML
UP = DATA.HTML
DN = DATA.HTML
*/
(function(w, d) {
   console.time('MX');
   function mx_get(url, callback) {
       var x = new XMLHttpRequest();
       x.onreadystatechange = function() {
           if (x.readyState == 4 && x.status == 200) {
               console.log('responseText:' + x.responseText);
               try {
                   var r = JSON.parse(x.responseText);
               } catch (err) {
                   console.log(err.message + ' => ' + x.responseText);
                   return;
               }
               callback(r);
           }
       };
       x.open('GET', url, true);
       x.send();
   }
/*
   try {
       localStorage.setItem("myKey", JSON.stringify(obj));
   } catch (e) {
       if (e == QUOTA_EXCEEDED_ERR) {
           console.warn('Превышен лимит');
       }
   }
   var obj = JSON.parse(localStorage.getItem("myKey"));
*/
   d.addEventListener('click', t, true);
   function t(e){
       var t=e.target,
       a=t.getAttribute('href');
       if(a){
           if(a=='#l'){
               mx_get('https://2828.ru/a/z.php?u=554', function(r) {   //&test
                   if (r['UP']) d.getElementById('up').innerHTML = r['UP'];
                   if (r['DN']) d.getElementById('dn').innerHTML = r['DN'];
                   if (r['MX']) {
                       var mx = new Function('r', r['MX']);
                       mx(r);
                       // new Function('return ' + r['MX']);
                       // eval(r['MX']);
                   } else if (r['KM']) {
                       d.getElementById('m').innerHTML = r['KM'];
                   }
               });
               e.preventDefault();
               return !1;
           // }else if( indexOf('http://') ){
           }
       }else{
           console.info(t.tagName, ': ', t.textContent);
           // localStorage.getItem("M1");
           // localStorage.setItem("M1", "K");
       }
   }
   console.timeEnd('MX');
})(window, document);