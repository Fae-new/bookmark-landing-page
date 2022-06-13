import React from "react";


function Card(props){
    return(
<div  id={props.id} className='browserCard'>
<img src={props.imageSource} alt='Browser'/>
<h4>{props.mainText}</h4>
<p style={{borderBottom:'1px dotted black',paddingBottom:'7px'}}> {props.subText}</p>

<button id="browserbtn">Add & Install Extension</button>


</div>



    )





}

export default Card;