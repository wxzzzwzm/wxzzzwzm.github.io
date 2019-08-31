try{
    if (/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)) {
setActiveStyleSheet("pcss.css"); 

    }else{
setActiveStyleSheet("wcss.css"); 
    }
function setActiveStyleSheet(filename){document.write("£¼link href="+filename+" rel=stylesheet
}catch(e){}
