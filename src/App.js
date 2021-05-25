import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Order from './components/Order';
import Menu from './components/Menu';
// import Store from './components/Store';

function App() {
  return (
        <div className="App">
          <Header></Header>
          <Hero></Hero>
          <Menu></Menu>
          <Order></Order>
        </div>
  );
}

export default App;
