var fname="Kanishq";
var lnmame="Sharma";
var age=18;
export default function App(){
  return(
    <div className="App">
      <h1>Hello</h1>
      <h2>My first react app</h2>
      <h2>My name is {fname+" "+lnmame}!</h2>
      <h2>My Age is {age}</h2>
      <h3>my favorite food</h3>
      <ul>
        <li>rajma</li>
        <li>chawl</li>
        <li>bhat</li>
        <li>chole</li>
        <li>bhature</li>
      </ul>
      <table border="2px" width="500px">
        <tr>
          <th>column 1</th>
          <th colspan="3">column 2</th>
        </tr>
        <tr>
        <td>hello</td>
        <td>how</td>
        <td>are</td>
        <td>you</td>
        </tr>
        <tr>
          <td>don't</td>
          <td>do</td>
          <td>that</td>
          <td>go</td>
        </tr>
      </table>
    </div>
  );
}