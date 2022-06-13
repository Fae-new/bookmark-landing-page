import React from "react";


function Question(props){
const [show,toggleShow]=React.useState(false)
const [counter,setCounter]=React.useState(1)
function showAnswer(){
    setCounter(()=>{
        return(
            counter+1
        )
    })

toggleShow(()=>{
if(counter%2===0){
    return(
        false
    )
}else{return true}

})
}
  return(

<div className="question">
<div id={props.id} style={{display:'flex',flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
    <h3>{props.question}</h3>
    <img src="images/icon-arrow.svg" alt="arrow" onClick={showAnswer}/>
    </div>
    <p style={{display:show?'block':'none'}} id='answer'>{props.answer}</p>
   
</div>



)
}
export default Question;