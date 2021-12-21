import React from 'react';
import ReactDOM from 'react-dom';
function Data(n){
  return(
    <div className="abc">
      <h1>{n.username}</h1>
      <h3>Student</h3>
      </div>
  );
}
ReactDOM.render(<h1>Hello</h1>,document.getElementById('root'));
ReactDOM.render(<Data username="Kanishq"/>,document.getElementById('d1'));
ReactDOM.render(<Data username="Ram"/>,document.getElementById('d2'));
ReactDOM.render(<Data username="Sham"/>,document.getElementById('d3'));
export default Data;
