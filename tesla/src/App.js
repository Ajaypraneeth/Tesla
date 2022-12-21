import './App.css';
import Header from './Components/Header/header'
import Body from './Components/Body/cars'
import Middle from './Components/Middle/middle'
import Footer from './Components/Footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Body/>
        <Middle/>
        <Footer/>
    </div>
  );
}

export default App; 