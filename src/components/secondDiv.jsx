
import React from "react";
import tabData from "../tabData";
import Tab from './tab'
import Headersubtext from "./header&subtext";


function Seconddiv(){
    const [active, setActive]=React.useState({
tab1:true,
tab2:false,
tab3:false
    })
   
    const [tabContent,setTabContent]=React.useState(tabData[0]) 

         function handleClick(event){
const {id}=event.target

if(id==='tab1'){
    setActive({tab1:true, tab2:false, tab3:false})
  setTabContent(tabData[0])
}

else if(id==='tab2') {
setActive({tab1:false, tab2:true, tab3:false})
        setTabContent(tabData[1])
    }   

else{
    setActive( {tab1:false, tab2:false, tab3:true})
        setTabContent(tabData[2])
}  
         }
return(
    <div>
<div>
<Headersubtext
bigtext=' Features'
smalltext='Our aim is to make it quick and easy for you to access your favourite websites. 
Your bookmarks sync between your devices so you can access them on the go.'
/>
 <div className="tabheads">
<p  onClick={handleClick} id='tab1' style={{borderBottom:active.tab1?'3px solid hsl(0, 94%, 66%)':null}}>  Simple Bookmarking</p> 
<p  onClick={handleClick} id="tab2"  style={{borderBottom:active.tab2?'3px solid hsl(0, 94%, 66%)':null}} >  Speedy Searching</p> 
<p onClick={handleClick} id="tab3"  style={{borderBottom:active.tab3?'3px solid hsl(0, 94%, 66%)':null}}>Easy Sharing</p> 
  </div>
</div>

<Tab
tabMainText={tabContent.mainText}
tabSubText={tabContent.subText}
tabImage={tabContent.image}

/>
</div>

)

}

export default Seconddiv;