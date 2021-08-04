import React, { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          counter: 0,
          imageURL: [],
        };
      }
      addImage = () => {
        this.setState((prevState) => (
           { ...prevState, counter: prevState.counter + 1 }
        ), this.generateImageURL);
      };
    
      generateImageURL() {
        var myarray = [];
        for (let i = 1; i <= this.state.counter; i++) {
          myarray.push(`https://picsum.photos/id/${i}/200/300`);
        }
        this.setState({ imageURL: myarray });
      }
    
      render() {
        return (
          <div className="App">
            <button onClick={this.addImage}>ADD Image</button>
            <p>Value:{this.state.counter}</p>
            <div className="flex-container">
              {this.state.imageURL.map((images) => {
                return <img src={images} alt="" />;
              })}
            </div>
          </div>
        );
      }
}
export default Header;