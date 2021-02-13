
import React from 'react';
import ReactDOM from 'react-dom';

const Menu = ({Google, Yahoo, Facebook}) => (
  <menu>
    <ul>
      <li>
          {Google}</li>
      <li>
          {Yahoo}</li>
      <li>
        {Facebook}
      </li>
    </ul>
  </menu>
);

ReactDOM.render (
<Menu
Google = "Google"
Yahoo = "Yahoo"
Facebook = "Facebook"
/>,document.getElementById("root")
);