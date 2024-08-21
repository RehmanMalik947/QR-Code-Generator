let imgbox=document.getElementById("imgbox")
let qrimg=document.getElementById("qrimg")
let qrtext=document.getElementById("qrtext")
const ap1_url="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
function generate()
{
    if(qrtext.value.length>0)
    {
        qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtext.value;

    }
   
}
