import React, { useState } from 'react';
import { styled, StyledProps } from '@glitz/react';

type PropType = {
  startValue?: number;
  leftPositon?: number;
};

function Counter(props: PropType & StyledProps) {
  const [count, setCount] = useState(props.startValue || 0);

  function onButtonClick() {
    setCount(count + 1);
  }

  return (
    <Base css={props.compose()}>
      <Title style={count > 10 && titleWithBigCount}>Counter</Title>
      <CountDisplay css={{ color: count > 5 ? 'red' : 'black' }}>{count}</CountDisplay>
      <Button onClick={onButtonClick}>Increment</Button>
      <SuperButton onClick={onButtonClick}>Increment</SuperButton>
    </Base>
  );
}

const titleWithBigCount = { color: 'red' };

const Base = styled.div({
  color: 'black',
  padding: {
    x: 10,
  },
});

const Title = styled.h1({
  fontSize: 18,
});

const CountDisplay = styled.p({
  fontSize: 16,
});

const Button = styled.button({
  background: 'white',
  color: 'black',
  padding: {
    xy: 10,
  },
  marginTop: 10,
});

const SuperButton = styled(Button, {
  color: 'red',
  marginLeft: 5,
});

export default styled(Counter);
