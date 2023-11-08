import './App.css'
import Item from './Item'
import Cart from './Cart'
function App() {


  return (
    <div className='App'>
      <h1>Shooping Cart</h1>
      <Item name="MacBook Pro" price={10000} />
      <Item name="Pendrive" price={400} />
      <Item name="Mobile" price={3500} />

      <Cart />
    </div>
  )
}

export default App
