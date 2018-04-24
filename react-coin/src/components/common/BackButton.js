import React from 'react';

import { withRouter } from 'react-router-dom';

const BackButton = ({history}) => {
  return(
    //.goBack is a property given to by BrowserRouter
    <div>
      <button
        onClick={ history.goBack } className='Back-button'>
        &larr; Back
      </button>
    </div>
  );
};

export default withRouter(BackButton);
