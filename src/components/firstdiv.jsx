import React, { useEffect, useState } from "react";
import Textdiv from "./textdiv";
import Button from "./button";

function FirstDiv(){
const [fullText]=useState('A Simple Bookmark Manager')
const [text,setText]=useState('')
const [index,setIndex]=useState(0)


useEffect(()=>{
setTimeout(()=>{
if(index<fullText.length){
setText(text+fullText[index])
  setIndex(index+1)
}

},50)

})


    return(
      <div className="firstdiv">
      <div style={{marginTop:'40px'}}>
<Textdiv
maintext={text}
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
export default FirstDiv;