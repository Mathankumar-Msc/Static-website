var slideimg=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'];
var index=0;


function imgslide(){
    document.getElementById('img').src=slideimg[index];
    index++;
    if(index==slideimg.length)
    {
        index=0;
    }
    setTimeout("imgslide()",2000)
}
imgslide();