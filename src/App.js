import { useState } from 'react';
import './App.css';

function App(){
  // const products = [
  //   {name:'iPhone', price:150000, color:'golden'},
  //   {name:'Samsung', price:30000, color:'blue'},
  //   {name:'watch', price:3500, color:'black'},
  //   {name:'Vivo', price:150000, color:'made black'},
  // ]
  return(
    <div className='App'>
      <Counter></Counter>
      {/* {
        products.map(product => <Product name={product.name} price={product.price} color={product.color}></Product>)
      } */}
      {/* <Product name='Phone' price="50000"></Product>
      <Product name='laptop' price="100000"></Product>
      <Product name='watch' price="1000"></Product> */}
    </div>
  )
}

// function Product(props) {
//   console.log(props);
//   return(
//     <div className='product'>
//       <h2>Name: {props.name}</h2>
//       <h3>Price :{props.price}</h3>
//       <h3>Price :{props.color}</h3>
//     </div>
//   )
// }

function Counter () {
  const [count, setCount] = useState(20);
  const increaseCount = () => setCount(count  + 1);
  const decreaseCount = () => setCount(count - 1)

  // const increaseCount = () =>{
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  return(
    <div>
      <h2>Count:{count}</h2>
      <button onClick={increaseCount}>increase:</button>
      <button onClick={decreaseCount}>decrease:</button>
    </div>
  )
}
export default App;
