import React from "react";


function Textdiv(props){
return(
    <div className="textdiv">
 <h2>{props.maintext}</h2>

 <p>{props.subtext}.</p>



</div>

)
}
export default Textdiv;