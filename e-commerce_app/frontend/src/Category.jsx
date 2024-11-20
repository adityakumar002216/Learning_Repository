import React from 'react'

export default function Category({categorys,setcategory_name}) {
 
  let ct=categorys.map((v,i)=>{
    return (
      <li onClick={()=>setcategory_name(v)} className="li" key={i}>{v}</li>
    )
  })
  return (
    <div className='ht'>
    
    <div className='ul'>
    <ul type='none'>
        {ct}
        
    </ul>

    </div>
    </div>


  )
}
