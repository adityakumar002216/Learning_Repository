import React from 'react'
import Header from './Header'
import { useLocation } from 'react-router-dom'

export default function Item() {
    const item=useLocation().state;
    console.log(item);
  return (
  <>
    <Header/>
    <div className='itemDC'>
        <div className='itemD'>
        
        
        <img src={item.thumbnail} alt="product images" />
        <h5>Title : {item.title}</h5>
        <h5>Price : ${item.price}</h5>
        </div>
        <div>
        <h2>Product Details</h2>
        <h5>Price : ${item.price}</h5>
        <h5>Brand : {item.brand}</h5>
        <h5> Rating : {item.rating}</h5>
        <h5>Return Policy : {item.returnPolicy}</h5>
        <h5>AvailabilityStatus : {item.availabilityStatus}</h5>
        <h5>WarrantyInformation : {item.warrantyInformation
        }</h5>
        <h5>Dimensions : width: {item.dimensions.width} , height : {item.dimensions.height} , depth : {item.dimensions.depth }</h5>
        <h5>
        Description : {item.description}</h5>
        
        </div>

        </div>
        <div>
            <h2>Reviwes</h2>{
                item.reviews.map((val,key)=>{
                    return (<h5>User {key+1} : {val.comment}</h5>);
                })

            }
        </div>
    </>
  )
}
