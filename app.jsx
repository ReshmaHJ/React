import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textforms from './components/Textforms';

function App() {
  return (
      <>
    <Navbar title="Reshma4" home="dubere"/>
   <div className="container">
    <Textforms heading="Hello"/>
    </div>
   </>
  );
}

export default App;
