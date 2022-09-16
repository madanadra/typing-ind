import React from 'react'

import Typed from 'typing-ind'
import 'typing-ind/dist/index.css'

const App = () => {
  return (
    <h1>
      <Typed 
      type={['Web Developer for ', 'Frontend', 'Backend', 'FullstacK']}
      backspace={[1, 2]}
      delay={1000}
      duration={50}
      cursor={'blinking-text-cursor'}
      />
    </h1>
  );
}

export default App
