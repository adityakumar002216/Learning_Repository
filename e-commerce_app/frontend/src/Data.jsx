import React from 'react'
import axios from 'axios';
import { createContext,useState,useEffect} from 'react';
const Allitems=createContext();

export default function Data() {
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
}