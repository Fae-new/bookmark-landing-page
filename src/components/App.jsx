import React from 'react';
import Header from './Header';
import Mobilenav from './mobilenav';
import Firstdiv from './firstdiv';
import Seconddiv from './secondDiv';
import Browserdiv from './browserDiv';
import Faqdiv from './faqDiv';
import Lastdiv from './lastDiv';
import Footer from './footer';


function App() {
  return (
    <div className="App">
   <Header/>
   <Mobilenav/>
<Firstdiv/>
<Seconddiv/>
<Browserdiv/>
<Faqdiv/>
<Lastdiv/>
<Footer/>

    </div>
  );
}

export default App;
