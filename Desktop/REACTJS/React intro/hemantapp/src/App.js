import Navbar from "./components/Navbar";
import Textform from "./components/Textform";



function App() {
  return (
    
        <>
              

        <Navbar title="Hemant Blog" aboutText="About Textutils"/>

        <div className="container my-3">
          <Textform heading="Enter the text to analysis"/>
        </div>

       
        
        </>
    
  );
}

export default App;
