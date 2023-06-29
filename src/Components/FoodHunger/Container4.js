import React from 'react'


export const Container4 = () => {
    const data = [
        { count: '245+', description: 'KG Of Food We Saved' },
        {count: '150+', description: 'Childrens We Fed' },
        {count: '120+', description: 'Families We Served' },
        { count: '50+', description: 'Women’s We Empowered' },
      ];
  return (
    <div className='container4-wrapper' >
        <h3 className='container4-heading'>WHAT WE DID SO FAR?</h3>
        <div className='container4-counter' >
        {data.map((item, index) => (
        <div className='d-5' key={index}>
          <h3>{item.count}</h3>
          <p> {item.description}</p> 
        </div>
        ))}
        </div>
        </div>
 )}
  
