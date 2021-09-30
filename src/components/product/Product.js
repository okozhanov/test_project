import {deleteProduct, getProducts} from "../../services/products.api.services";
import {Link} from "react-router-dom";
import './Product.css'

export default function Product({item, setProducts}) {

    let buttonDelete = async () => {
        if (window.confirm('Do you really want to delete this product?')) {
            await deleteProduct(item.id)
            await getProducts().then(value => setProducts([...value]))
        }
    }

    return (
        <div className={'product_card'}>
            <div className={'product'}>
                <div className="img_container">
                    <img src={item.imageUrl} alt="product_img"/>
                </div>
                <h3>{item.name}</h3>
                <h5>count - {item.count}</h5>
            </div>
            <div className="buttons_container">
                <button className={'delete_button'} onClick={buttonDelete}>delete</button>
                <Link className={'details_link'} to={{pathname: '/products/' + item.id, state: item}}>details</Link>
            </div>
        </div>
    );
}