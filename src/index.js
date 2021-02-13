// import React from 'react';
// import ReactDOM from 'react-dom';

// const nav = ({link}) => (
// <nav>
//     <ul>
//         <li> {"Google"}</li>
//         <li> {"Yahoo"}</li>
//         <li>{"Link"}</li>
//     </ul>
// </nav>
// );

// ReactDOM.render (document.getElementById("root"));

import React from 'react';
import ReactDOM from 'react-dom';

const Menu = ({}) => (
  <menu>
    <ul>
      <li>
          {"Google"}</li>
      <li>
          {"Yahoo"}</li>
      <li>
        {"Facebook"}
      </li>
    </ul>
  </menu>
);

ReactDOM.render (
<Menu/>,document.getElementById("root")
);