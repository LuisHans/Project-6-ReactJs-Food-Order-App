import React, {Fragment} from 'react';
import Cart from './Components/Cart/Cart';

import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';


function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <Meals />
    </Fragment>
  );
}

export default App;
