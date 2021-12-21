var list=['peter','macs','scam','fake','lovely'];
const listitems=list.map((list)=>{
    return <li>{list}</li>
});
ReactDOM.render(<ol type="a">{listitems}</ol>,Document.getElementById("root"));



class App extends React.Component{
    render(){
        return(
            <div>
                <h1 style={{color:"red"}}>Hello User!</h1>
                <p style={{backgroundColor:"cyan"}}>Lets work with Css</p>
            </div>
        );
    }
}
ReactDOM.render(<app/>,document.getElementById('root'));



class Mystyle extends React.Component{
    render(){
        const customstyele={
            color:"Green",
            backgroundColor:"red",
            padding:"2px"
        };
        return(
            <div style={customstyele}>
                <p>Helli</p>
                <br/>
            </div>
        )
    }
}