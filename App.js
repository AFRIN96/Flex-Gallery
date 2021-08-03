import './App.css';
import { Component} from 'react';
class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            counter: 0,
            imageURL: []
        }

    }
  generateURL = () =>
    {
        this.setState((prevState) =>{
            return {...prevState,  counter: prevState.counter+1};
        },()=>{
            let imageURLArray = [];
            for(let i = 1; i<=this.state.counter; i++)
                imageURLArray.push(`https://picsum.photos/id/${i}/200/300`);
                console.log( "Image URL:" , imageURLArray.length);
               
                this.setState({ imageURL : imageURLArray});
        })
        }
    
    render(){
return(
    <div className = "App">
    <button onClick={this.generateURL}>ADD Image{this.state.counter}</button>
    <li></li>
    <img src ={this.state.imageURL} alt =""/>
    </div>
);
} }
export default App;
