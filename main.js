<script language="javascript">

var index=0;
var inde=0;
var word=document.getElementById("w").innerHTML;
var ha=document.getElementById("m").innerHTML;


function hh(){
    var type=setInterval(function(){
        document.title=word.substring(0,index++);
        if(index==word.length+1){
            clearInterval(type);
            index=0;
            var ty=setInterval(function(){
                document.title=ha.substring(0,inde++);
                if(inde==ha.length+1){    
                    clearInterval(ty);
                    inde=0;
                    hh();
                }
            },300);
            
        }
    },300);

}
setTimeout(hh,2500);
</script>
<script type="text/javascript">
try{
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        window.location.href="mindex.html";
    }else{
        window.location.href="index.html";
    }
}catch(e){}
</script>