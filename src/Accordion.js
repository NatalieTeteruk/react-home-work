import React, { useState } from 'react';

const Accordion = ({ children, multipleOpen = false }) => {
  const [openPanels, setOpenPanels] = useState([]);

  const togglePanel = (index) => {
    setOpenPanels(prev => 
      multipleOpen
        ? prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index]
        : prev.includes(index) 
          ? [] 
          : [index]
    );
  };

  return (
    <div className="accordion">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isOpen: openPanels.includes(index),
          onToggle: () => togglePanel(index),
        })
      )}
    </div>
  );
};

const Panel = ({ title, children, isOpen, onToggle }) => (
  <div className={`panel ${isOpen ? 'open' : ''}`}>
    <button className="panel-header" onClick={onToggle}>
      {title}
      <span>{isOpen ? '▲' : '▼'}</span>
    </button>
    {isOpen && <div className="panel-content">{children}</div>}
  </div>
);

export { Accordion, Panel };

