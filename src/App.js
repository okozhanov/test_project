import './App.css';
import Products from "./components/products/Products";
import {
    BrowserRouter as Router,
    // Switch,
    Route,
    Link,
    // withRouter
} from "react-router-dom";
import ProductDetails from "./components/product_details/ProductDetails";

function App() {


    return (
        <div className="App">
            <Router>
                <Link to={'/products'}>Products</Link>

                <Route exact path={'/products'} component={Products}/>
                <Route path={'/products/:id'} component={ProductDetails}/>
            </Router>


        </div>
    );
}

export default App;
