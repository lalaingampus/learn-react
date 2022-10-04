import { useState } from "react"
import ProductList from "./components/ProdukList";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditpProduct";
// function App() {
//   const [title, setTitle] = useState("hello world");

//   const changeTitle = () => {
//     setTitle("ini HaiWorld");
//   }

//   return (
//     <div>
//       <h1>{title}</h1>
//       <button onClick={ changeTitle }>Change Title</button>
//     </div>
//   );
// }

function App() {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
      <Router>
        <Switch>

          <Route exact path="/">
          <ProductList/>
          </Route>
          
          <Route exact path="/add">
          <AddProduct />
          </Route>  

          <Route exact path="/edit/:id">
            <EditProduct/>
          </Route>

        </Switch>
     </Router>
     </div>
     </div>
    </div>
  );
}

export default App;
