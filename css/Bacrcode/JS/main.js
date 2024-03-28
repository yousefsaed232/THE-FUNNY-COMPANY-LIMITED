let lname=document.getElementById('lname');
let phone=document.getElementById('phone');
let text=document.getElementById('text');
let address=document.getElementById('address');

let frm=document.getElementById('frm');

var test={};

document.getElementById("btn").addEventListener("click", () => {
    
 let text = document.getElementById("text").value;


  if(lname !='' && phone !='' &&text !='' && address != ''){

    JsBarcode("#barcode", text);

    btn.style.display='none';
    window.print();
 btn.style.display='block';
    
  }
    
  });