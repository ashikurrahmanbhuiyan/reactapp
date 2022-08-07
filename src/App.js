import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products = [{names: 'Phone', price: '$100'},
  {names: 'Laptop', price: '$200'},
  {names: 'TV', price: '$300'},
  {names: 'Tablet', price: '$400'},
  {names: 'Watch', price: '$500'},
  {names: 'Speaker', price: '$600'},
  {names: 'Headphone', price: '$700'}];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <p> this is test {5 + 6} </p>
        <User/>
        <Counter />
        <ul>
          {products.map(element => 
            <Product name={element.names} price={element.price} />
          )}
        </ul>
        < Person name="ashikur rahman" />
        <Person />
      </header>
    </div>
  );
}

function Counter() {
  const [count,setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
  }
  return(<div>
    <h1>Like this Project : {count}</h1>
    <button onClick={handleIncrease}>Like</button>
    <button onClick={()=>{setCount(count-1)}}>Dislike</button>
    </div>
  );
}

function User() {
  const [users,setUser] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data));
  },[])
  return(<div>
      <h3>Dynamic User : {users.length}</h3>
      <ul>
        {
        users.map(user => <li>{user.name} : {user.email}</li>)
        }
      </ul>
    </div>
  );
}

function Product(args) {
  const ProStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f2f2f2',
    padding: '10px',
    float : 'left',
    margin: '10px'
  }
  return(<div style={ProStyle}>
    <h2>Name : {args.name}</h2>
    <h1>Price : {args.price}</h1>
    <button>Buy Now</button>
    </div>)
}
function Person(args) {
  const PerStyle = {
    border: '1px solid red',
    margin: '10px'
  }
  return(<div style={PerStyle}>
    <h1>My name is {args.name}</h1>
    <p>I am a student</p>
    </div>)
}

export default App;
