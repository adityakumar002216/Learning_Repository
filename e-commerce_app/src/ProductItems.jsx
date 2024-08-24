import React from 'react'

export default function ProductItems({pri}) {
  console.log(pri);
  return (
    <div className='Productitem'>
        <img className="img" src={pri.thumbnail}/>
        <p className='itemname'>{pri.title}</p>
        <p className='prices'>Price: ${pri.price}</p>
    </div>
  )
}
