import React from 'react';

const Col = (props) => {
   return ( 
    <div className={props.colSize}>
       {props.children} 
    </div>
   )    
};

export default Col;