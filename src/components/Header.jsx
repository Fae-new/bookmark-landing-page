import React from "react";
import Button from "./button";



function Header(){


function toggleNav(){
let target=document.getElementsByClassName('mobilenav')[0]
target.style.display='block'
target.classList.add('open-animation')
target.classList.remove('close-animation')
}


return(<div className="header" >
<img src="images/logo-bookmark.svg" alt="logo" />
<img src="images/icon-hamburger.svg" alt="hamburger-icon" id="ham" onClick={toggleNav}/>
<div id="textnav" className="textNav">
<p> Features</p> 
<p>  Pricing</p> 
<p>   Contact</p> 
<Button
text='Login'
backgroundColor='hsl(0, 94%, 66%)'
width='80px'
    />
</div>
</div>



)

}

export default Header;