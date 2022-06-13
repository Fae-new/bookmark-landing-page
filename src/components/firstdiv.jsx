import React from "react";
import Textdiv from "./textdiv";
import Button from "./button";

function firstDiv(){
    return(
      <div className="firstdiv">
      <div style={{marginTop:'40px'}}>
<Textdiv
maintext='A Simple Bookmark Manager'
subtext='A clean and simple interface to organize your favourite websites. Open a new 
  browser tab and see your sites load instantly. Try it for free'

/>
<div className="btndiv">
<Button

text='Get it on Chrome'
backgroundColor='hsl(231, 69%, 60%)'
width='45%'
/>
<Button

text='Get it on Firefox'
color='black'
width='45%'
/>
</div>

</div>
<img src="images/illustration-hero.svg"  alt=''/>
</div>

    )
}
export default firstDiv;