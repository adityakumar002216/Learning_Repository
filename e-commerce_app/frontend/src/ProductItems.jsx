import React from 'react'

export default function ProductItems({prd,search}) {
  
 
    
    return(
      <>
   <div className='Productitem'>
        <img className="img" src={prd.thumbnail}/>
        <p className='itemname'>{prd.title}</p>
        <p className='prices'>Price: ${prd.price}</p>
    </div>
    
    </>
    )
    
  }
  
    
  

  

