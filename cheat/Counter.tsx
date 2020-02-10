import React, { useState } from 'react';
import { styled } from '@glitz/react';

type PropType = {
  startValue?: number;
};

function Counter(props: PropType) {
  const [count, setCount] = useState(props.startValue || 0);

  function onButtonClick() {
    setCount(count + 1);
  }

  function onSuperButtonClick() {
    setCount(count + 10);
  }

  return (
    <>
      <Title>Counter</Title>
      <MyButton onClick={onButtonClick} css={count >= 10 && { backgroundColor: 'yellow' }}>
        {count}
      </MyButton>

      <MySuperButton onClick={onSuperButtonClick} css={count >= 10 && { backgroundColor: 'yellow' }}>
        {count}
      </MySuperButton>
    </>
  );
}

const Title = styled.h1({
  color: 'black',
  fontSize: 28,
});

const MyButton = styled.button({
  color: 'black',
  backgroundColor: 'lightgray',
  padding: {
    x: 10,
    y: 3,
  },
  margin: {
    xy: 20,
  },
});

const MySuperButton = styled(MyButton, {
  backgroundColor: 'blue',
  color: 'red',
});

export default Counter;
