import React from 'react';

import Loading from '../img/spinner.gif';

const Spinner = () => {
  return (
    <img
      src={Loading}
      style={{width: '200px', margin: 'auto', display: 'block'}}
      alt='Loading'
    />
  )
};

export default Spinner;
