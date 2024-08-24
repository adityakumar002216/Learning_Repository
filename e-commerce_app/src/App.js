
import { useEffect, useState } from 'react';
import './App.css';
import Category from './Category';
import Product from './Product';
import axios from 'axios';
import ProductItems from './ProductItems';

function App() {
  let [products,setproducts]=useState([]);
  let [categorys,setcategorys]=useState([]);
  let [category_name,setcategory_name]=useState('');
  let getdata=()=>{
  axios.get('https://dummyjson.com/products')
.then((res) => res.data)
.then((finalproduct)=>{
setproducts(finalproduct.products)
})
  }
  let getdata1=()=>{
    axios.get('https://dummyjson.com/products/category-list')
  .then((res) => res.data)
  .then((finalproduct)=>{
  setcategorys(finalproduct)
  })
    }
    
    

useEffect(()=>{
  getdata();
  getdata1();
  
},[])
useEffect(()=>{
 if(category_name!==""){
  axios.get(`https://dummyjson.com/products/category/${category_name}`)
.then((res) => res.data)
.then((finalproduct)=>{
setproducts(finalproduct.products)

 })
 }

},[category_name])
let producti=products.map((v,i)=>{
  return (
    <ProductItems key={i} pri={v}/>
  )
})
return (
    <div className="App">
      <div className='header'><h1>Online Shoping.com</h1></div>
      <div className='PC'>
      <div className='Category'>
        <h2 className='s'>Product Category</h2>
      <Category  categorys={categorys} setcategory_name={setcategory_name}/>
      
      </div>
         <div className='Product'>
          <h2 >Product</h2>
          <div className='ProI'>
          {
            products.length>0 ?
          producti
          : " No Product "
          }
          
          
          </div>
        </div> 
        </div>
      
    </div>
  );
}

export default App;
