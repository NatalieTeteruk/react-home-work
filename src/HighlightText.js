import React from 'react'

const HighlightText = ({color, children}) => {
    return React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { 
          style: {...child.props.style, color} 
        });
      }
      return <span style={{color}}>{child}</span>;
    });
  };
  
export default HighlightText;