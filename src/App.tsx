import React from 'react';
import Counter from './components/Counter';

type PropType = {};

function App(props: PropType) {
  return (
    <>
      <Counter leftPositon={20} css={{ margin: { x: 20 }, color: 'green' }} />
    </>
  );
}

export default App;
