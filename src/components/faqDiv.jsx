import React  from "react";
import Headersubtext from "./header&subtext";
import Question from "./Q&A";

function Faq(){

return(
<div className="faqDiv">
<Headersubtext
bigtext='Frequently Asked Questions'
smalltext='Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.'
/>
<Question
id='firstQuestion'
question='What is Bookmark'
answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis'
/>

<Question
    question='How to ask for a new browser?'
    answer='Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.'
/>
<Question
    question='Is there a mobile app?'
    answer='Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum'
/>
<Question

    question='What about other browsers?'
    answer='Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit'
/>

<button style={{backgroundColor:'hsl(231, 69%, 60%)', width:'35%',marginLeft:'32.5%'
,borderRadius:'5px',border:'none',fontSize:'18px',color:'white',padding:'8px',marginTop:'20px'}} >
     More Info
</button>

</div>
)
}

export default Faq;