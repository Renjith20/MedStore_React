import React  from 'react';
import Navbar from './components/Navbar';



function App() {
  return(
    <div style={{ backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
    <Navbar />
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
 
    <h1 style={{ color: "#00A676"}}><b>WELCOME TO MEDSTORE</b></h1>
<br/>

   
  </div>
   
  </div>
);
}

export default App;