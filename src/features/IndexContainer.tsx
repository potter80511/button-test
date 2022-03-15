import React, { useState } from 'react';
import { Button, ButtonGroup } from '@mui/material';

const IndexContainer = () => {
  const [clickNum, setClickNum] = useState(0);
  const [clickDisabled, setClickDisabled] = useState(false);

  const disableText = clickDisabled ? 'Able' : 'Disable';

  return <div>
    <ButtonGroup orientation="vertical">
      <Button variant="outlined" onClick={() => setClickNum(clickNum+1)} disabled={clickDisabled}>Click: {clickNum}</Button>
      <Button variant="outlined" onClick={() => setClickNum(0)}>Clear</Button>
      <Button variant="outlined" onClick={() => setClickDisabled(!clickDisabled)}>{disableText}</Button>
    </ButtonGroup>
  </div>
};

export default IndexContainer;
