
    
    
function tipamt(){

    const billAmt = document.querySelector("#billamt").value;
    const Select = document.querySelector("#select").value;
    const People = document.querySelector("#people").value;

    if(billAmt===""){ 
        alert("Please Enter Values");
         return;
    }
    if(billAmt <=0 || People<= 0){
        alert("Please Enter Valid Details");
        return;
    }
    const xxx= document.querySelector(".xx");
    const x = Math.floor((billAmt*Select)/People);
        
    console.log(x);
    if(People >1){
        alert("TOTAL TIP is ₹"+x+" per head")
    }
    else if(People==1){
        alert("TOTAL TIP you pay is ₹"+x)
    }

}
  
  
