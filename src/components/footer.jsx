import React from "react";

function Footer(){
return(
<div style={{backgroundColor:'hsl(229, 31%, 21%)'}} className='footer'>
<img src="images/logo-bookmark.svg" alt=" company logo" id="bottomlogo"
style={{backgroundColor:'white',padding:'3px',borderRadius:'5px'}}/>

<div className="textFooter">
<p>Features</p>
<p>Contact</p>
<p>Pricing</p>
</div>

<div className="imgfooter">
<img src="images/icon-facebook.svg" alt="facebook" />
<img src="images/icon-twitter.svg" alt="twitter"/>
</div>


</div>
)


}


export default Footer;