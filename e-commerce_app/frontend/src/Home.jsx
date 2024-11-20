import { Link,BrowserRouter,Routes,Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import './App.css';

import Category from './Category';

import axios from 'axios';
import ProductItems from './ProductItems';
import img from './loading.gif';

import Header from "./Header";
// import { BrowserRouter } from 'react-router-dom';
function App() {
  
  let [products,setproducts]=useState([]);
  let [categorys,setcategorys]=useState([]);
  let [category_name,setcategory_name]=useState('');
  let [search,setsearch]=useState('')
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
let producti;
// console.log(`${search}`)
let x=0;
if(`${search}`!==''){
  
 producti=products.map((v,i)=>{
   if((v.title.toLocaleLowerCase()).includes(`${search}`)){
      x=1;
  return (
    <>
    <ProductItems search={search} key={i} pri={v}/>
    </> 
  )
}
 }
)
  
if(x===0)
  <div> No Product</div>  


  
}

else{
   producti=products.map((v,i)=>{
    
   return (
     <>
     <ProductItems search={search} key={i} pri={v}/>
     </> 
   )

   
   
 })
}
return (
  <div className="App">
      
  
    
      <Header/>
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
            products.map((v,i)=>{
    
                return (
                  <>
                  <Link to="/item" state={v} className="link"><ProductItems search={search} key={i} prd={v}/></Link>
                  </> 
                )
             
                
                
              })
        
          : <>
          <img src={img}/>
          </>
                   }
          
          
          </div>
        </div> 
        </div>
      
    </div>
  );
}

export default App;
