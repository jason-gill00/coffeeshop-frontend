import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Order from './components/Order';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <div className="App">
        <Header></Header>
        <Hero></Hero>
        <Menu></Menu>
        <Order></Order>
      </div>
    </>
  );
}

export default App;
