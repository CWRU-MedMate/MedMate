import React from 'react';

const Container = (props) => {
  return (  
    <div className={props.cont}>
        {props.children}
    </div> 
  )    
};

export default Container;