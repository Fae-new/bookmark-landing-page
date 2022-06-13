import React from "react";

import Button from "./button";





function Tab(props){

 
return(
    <div className="tab">
    <img src={props.tabImage} alt=''/>
   
    <div className="tabtext">
 <h2>{props.tabMainText}</h2>

 <p>{props.tabSubText}.</p>

 <Button
text='More Info'
backgroundColor='hsl(231, 69%, 60%)'
width='35%'
 />

</div>
</div>
)

}

export default Tab;