import {useEffect, useState} from "react";
import {getProducts} from "../../services/products.api.services";
import Product from "../product/Product";
import {ModalWindow} from "../modal_window/ModalWindow";
import AddProduct from "../add_product/AddProduct";



export default function Products() {

    let [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(value => setProducts([...value]))
    }, [])

    console.log(products);

    let [modalActive, setModalActive] = useState(false)

    return (
        <div>
            {products.map(item => <Product item={item} setProducts={setProducts} key={item.id}/>)}
            <ModalWindow active={modalActive} setActive={setModalActive}>
                <AddProduct setActive={setModalActive} setProducts={setProducts}/>
            </ModalWindow>
            <button onClick={() => setModalActive(true)}>add item</button>
        </div>
    );
}