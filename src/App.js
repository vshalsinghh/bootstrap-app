import './App.css';
import Button from 'react-bootstrap/Button';
import Header from './components/header/header';
import Heropage from './components/hero-page/hero-page';
import Carousalcontainer from './components/carousal/carousal';
import Compimg from './components/compimg/compimg';
import Body from './components/body/body';
import Footer from './components/footer/footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Heropage />
      <Carousalcontainer heading='Results Speak The Loudestt'/>
      <Compimg />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
