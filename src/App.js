
import './App.css';
import Facebook from './components/Facebook';
import ResponsiveAppBar from './components/ResponsiveAppBar';
function App() {



  return (
    <div className="App"> 
      <ResponsiveAppBar />
      <div style={{ height: "70px" }} />
      <Facebook />
    </div>
  );
}

export default App;
