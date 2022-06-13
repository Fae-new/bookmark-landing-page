import React from "react";

function Mobilenav(){

    function closeNav(){
        let target=document.getElementsByClassName('mobilenav')[0]   
        target.classList.add('close-animation')
setTimeout(()=>document.getElementsByClassName('mobilenav')[0].style.display='none',1500)
       
    }


return(
<div className="mobilenav"  >
<img src="images/icon-close.svg" alt="" id="close" onClick={closeNav}/>
  <p> Features</p> 
  <p>  Pricing</p> 
  <p>   Contact</p> 
  <p>  Login</p> 


</div>
)





}

export default Mobilenav;