import React from "react";
import Card from "./card";
import cardData from '../cardData'
import Headersubtext from "./header&subtext";


function Browserdiv(){
return(
    <div>
<Headersubtext
    bigtext='Download the extension'
    smalltext=' We’ve got more browsers in the pipeline. Please do let us know if you’ve 
  got a favourite you’d like us to prioritize.'
/>
    <div className="browserdiv">
<Card
id='chrome'
imageSource={cardData[0].image}
mainText={cardData[0].mainText}
subText={cardData[0].subText}
/>
<Card
id='firefox'
imageSource={cardData[1].image}
mainText={cardData[1].mainText}
subText={cardData[1].subText}
/>
<Card
id='opera'
imageSource={cardData[2].image}
mainText={cardData[2].mainText}
subText={cardData[2].subText}
/>

</div>
</div>

)
}


export default Browserdiv