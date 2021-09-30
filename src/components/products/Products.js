import {useEffect, useState} from "react";
import {getProducts} from "../../services/products.api.services";
import Product from "../product/Product";
import {ModalWindow} from "../modal_window/ModalWindow";
import AddProduct from "../add_product/AddProduct";
import './Products.css'

export default function Products() {

    let [products, setProducts] = useState([])

    let [modalActive, setModalActive] = useState(false)

    useEffect( () => {
        getProducts().then(value => setProducts(value))
    }, [])

    return (
        <div className={'products_page'}>
            <button onClick={() => setModalActive(true)}>new product</button>
            <div className={'products'}>
                {products.map(item => <Product item={item} setProducts={setProducts} key={item.id}/>)}
            </div>
            <ModalWindow active={modalActive} setActive={setModalActive}>
                <AddProduct setActive={setModalActive} setProducts={setProducts}/>
            </ModalWindow>
        </div>
    );
}