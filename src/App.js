import './App.css';
import Products from "./components/products/Products";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import ProductDetails from "./components/product_details/ProductDetails";

function App() {

    return (
        <div className="App">
            <Router>
                <h1><Link id={'Headline'} to={'/products'}>Makeup</Link></h1>

                <Route exact path={'/products'} component={Products}/>
                <Route path={'/products/:id'} component={ProductDetails}/>
            </Router>


        </div>
    );
}

export default App;
