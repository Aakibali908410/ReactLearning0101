import React from 'react';
import fun from './components/cardless.jsx';
import Love from './components/love.jsx';

const App=()=>{
  return(
    <div>
      <div className="card1">
        <h1>Hello Baccho How are You</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad beatae pariatur eum facere eius omnis, iste quasi illum! Ducimus, delectus.</p>
      </div>
      {Love()}
      {fun()}
      {Love()}
      {fun()}

    </div>
  )
}
export default App