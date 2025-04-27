import React from 'react'
import './App.css';
import HighlightText from './HighlightText';
import { Accordion, Panel } from './Accordion';

function App() {
  return (
    <div className="wrap">
     <HighlightText color="green">
      <h2>Это будет зеленый текст</h2>
      </HighlightText>
      <Accordion>
        <Panel title="Панель 1"> <p className="text">Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolor beatae, soluta reiciendis nulla distinctio dolore fugit doloremque ullam rem nemo magnam architecto?</p></Panel>
        <Panel title="Панель 2"><p className="text">Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolor beatae, soluta reiciendis nulla distinctio dolore fugit doloremque ullam rem nemo magnam architecto?Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat itaque esse provident hic reiciendis! Illo odio nisi repellendus veniam enim.</p></Panel>
        <Panel title="Панель 3">СLorem ipsum dolor sit amet.</Panel>
      </Accordion>
    </div>
  );
}

export default App;
