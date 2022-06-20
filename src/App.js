// import logo from './logo.svg';
import './App.css';
import ShoppingList from './components/ShoppingList';
import { CartProvider } from './context/Cartcontext';
import Navbar from './components/Nav';
import { AddItem } from './components/AddItem';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Navbar />
        <AddItem />
        <ShoppingList />
      </div>
    </CartProvider>
  );
}

export default App;
