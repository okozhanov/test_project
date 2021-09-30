import {useEffect, useState} from "react";
import {getProducts, postProduct, updateProduct} from "../../services/products.api.services";
import './AddProduct.css'

export default function AddProduct({setActive, setProducts, setThisProduct, activeEdit, setActiveEdit, item}) {

    let [inputValue, setInutValue] = useState({name: '', imageUrl: '', count: '', size: {width: '', height: ''}})

    useEffect(() => {
        if (activeEdit === true) {
            setInutValue(item)
        }
    }, [activeEdit, item])

    let formSubmitted = async (e) => {
        e.preventDefault()
        if (window.confirm('Save all changes?')) {
            if (activeEdit === true) {
                await updateProduct(item.id, inputValue)
                setThisProduct({...inputValue})
                setActiveEdit(false)
            } else {
                await postProduct(inputValue)
                await getProducts().then(value => setProducts([...value]))
                setActive(false)
            }
        }
    }

    let inputChange = (e) => {
        setInutValue({...inputValue, [e.target.name]: e.target.value})
    }

    let inputWidthChange = (e) => {
        setInutValue({...inputValue, size: {width: e.target.value, height: inputValue.size.height}})
    }

    let inputHeightChange = (e) => {
        setInutValue({...inputValue, size: {width: inputValue.size.width, height: e.target.value}})
    }

    let cancelCliked = () => {
        if (activeEdit) {
            setActiveEdit(false)
        } else {
            setActive(false)
        }
    };
    return (
        <form onSubmit={formSubmitted}>
            <label htmlFor={'name'}>enter name of product</label>
            <input
                type={'text'}
                name={'name'}
                id={'name'}
                placeholder={'product name'}
                value={inputValue.name}
                onChange={inputChange}/>
            <label htmlFor={'imageUrl'}>enter url for image</label>
            <input
                type={'text'}
                name={'imageUrl'}
                id={'imageUrl'}
                placeholder={'product image url'}
                value={inputValue.imageUrl}
                onChange={inputChange}/>
            <label htmlFor={'product_image'}>enter count</label>
            <input
                type={'text'}
                name={'count'}
                id={'count'}
                placeholder={'count'}
                value={inputValue.count}
                onChange={inputChange}/>
            <label htmlFor={'width'}>enter width</label>
            <input
                type={'text'}
                name={'width'}
                id={'width'}
                placeholder={'width'}
                value={inputValue.size.width}
                onChange={inputWidthChange}/>
            <label htmlFor={'height'}>enter height</label>
            <input
                type={'text'}
                name={'height'}
                id={'height'}
                placeholder={'height'}
                value={inputValue.size.height}
                onChange={inputHeightChange}/>
            <button className={'save_button'} type={"submit"}>save</button>
            <span className={'cancel_button'} onClick={cancelCliked}>cancel</span>
        </form>
    );
}