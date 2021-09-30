import {Link} from "react-router-dom";
import {ModalWindow} from "../modal_window/ModalWindow";
import AddProduct from "../add_product/AddProduct";
import {useEffect, useState} from "react";
import './ProductDetails.css'

export default function ProductDetails({location: {state}}) {

    let [thisProduct, setThisProduct] = useState({})

    useEffect(() => {
        setThisProduct({...state})
    }, [state])

    let [activeModalEdit, setActiveModalEdit] = useState(false)

    let editClicked = () => {
        setActiveModalEdit(true)
    }

    return (
        <div className={'product_details_page'}>
            <Link className={'back_link'} to={'/products'}><i className="fas fa-arrow-left"> </i> back to all products</Link><br/>
            <div className="product_details">
                <div className="left_part">
                    <h1>{thisProduct.name}</h1>
                    <img src={thisProduct.imageUrl} alt="product_img"/>
                </div>
                <div className="right_part">
                    <h5>count: {thisProduct.count}</h5>
                    {thisProduct.size && <h5>height: {thisProduct.size.height}</h5>}
                    {thisProduct.size && <h5>width: {thisProduct.size.width}</h5>}
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda itaque
                       laborum libero nam placeat, soluta suscipit. Alias aliquam beatae blanditiis cum debitis deserunt
                       dicta eligendi eos facere inventore nemo nisi odio optio quae, quas repellat voluptas, voluptatibus.
                       Dolorum, facilis, ipsa! Consectetur consequuntur cum nihil pariatur? Ad commodi consequuntur deserunt
                       dolorem ea et laborum, laudantium quis veniam vitae. Dolor, impedit soluta. Dolore doloremque
                       explicabo iste qui quis quod rerum!</p>
                    <button className={'edit_button'} onClick={editClicked}>edit product</button>
                </div>
            </div>

            <ModalWindow active={activeModalEdit} setActive={setActiveModalEdit}>
                <AddProduct setActive={activeModalEdit} activeEdit={activeModalEdit} setActiveEdit={setActiveModalEdit}
                            item={thisProduct} setThisProduct={setThisProduct}/>
            </ModalWindow>
        </div>
    );
}