import React from "react";

function Button(props){


return(
<p className="btn" 
style={{backgroundColor:props.backgroundColor,width:props.width,
float:'left',textAlign:"center",marginTop:'17px',color:props.color}}
>{props.text}</p>

)

}

export default Button;