import {useState} from "react";
import {getProducts, postProduct} from "../../services/products.api.services";

export default function AddProduct({setActive, setProducts}) {

    let [inputValue, setInutValue] = useState({name: '', imageUrl: '', count: '', size: {width: '', height: ''}})

    let formSubmitted = async (e) => {
        e.preventDefault()
        await postProduct(inputValue).then(value => console.log(value))
        await getProducts().then(value => setProducts([...value]))
        setActive(false)
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

    return (
      <form onSubmit={formSubmitted}>
          <label htmlFor={'name'}>enter name of product</label>
          <input type={'text'} name={'name'} id={'name'} placeholder={'product name'} value={inputValue.name} onChange={inputChange}/>
          <label htmlFor={'imageUrl'}>enter url for image</label>
          <input type={'text'} name={'imageUrl'} id={'imageUrl'} placeholder={'product image url'} value={inputValue.imageUrl} onChange={inputChange}/>
          <label htmlFor={'product_image'}>enter count</label>
          <input type={'text'} name={'count'} id={'count'} placeholder={'count'} value={inputValue.count} onChange={inputChange}/>
          <label htmlFor={'width'}>enter width</label>
          <input type={'text'} name={'width'} id={'width'} placeholder={'width'} value={inputValue.size.width} onChange={inputWidthChange}/>
          <label htmlFor={'height'}>enter height</label>
          <input type={'text'} name={'height'} id={'height'} placeholder={'height'} value={inputValue.size.height} onChange={inputHeightChange}/>
          <button type={"submit"}>add</button>
          <span onClick={() => setActive(false)}>cancel</span>
      </form>
  );
}