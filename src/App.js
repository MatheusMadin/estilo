import logo from './logo.svg';
import './App.css';
import Fundo from './components/fundo';
import Header from './components/header';
import Footer from './components/footer';
import Parallax from './components/parallax';

function App() {
  return (
    <div className="App">
    
      <Header
      headersrc="https://i.pinimg.com/736x/23/03/59/230359fe713e4b3d01bcc927456491e7.jpg"
      textHeader="Header foda "
      />
      <Fundo/>
      <Footer
      footerText="&copy; Copyright MatheusMadin 2024"
      />




    </div>
  );
}

export default App;
