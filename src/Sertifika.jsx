import React from 'react'

function Sertifika({certificate}) {
    const{id,title,description,image} = certificate
    
  return (
    <div className='serti'>
        <div>
            <img className="serti-img"src={image} width={350} height={300} />
            <h1 className='serti-title'>{title}</h1>
            <h3 className='serti-desc'>{description}</h3>
        </div>
        
    </div>
  )
}

export default Sertifika

