import {deleteProduct, getProducts} from "../../services/products.api.services";
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    // withRouter
} from "react-router-dom";

export default function Product({item, setProducts}) {

    let buttonDelete = async () => {
        await deleteProduct(item.id)
        await getProducts().then(value => setProducts([...value]))
    }

    return (

        <div>
            <h4>{item.name}</h4>
            <img src={item.imageUrl} alt="product_img"/><br/>
            <button onClick={buttonDelete}>delete</button>
            <Link to={{pathname: '/products/' + item.id, state: item}}>details</Link>
            <hr/>
        </div>
    );
}