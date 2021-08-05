import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      imageURL: [],
    };
  }
  addImage = () => {
    this.setState(
      (prevState) => ({ ...prevState, counter: prevState.counter + 1 }),
      this.generateImageURL
    );
  };
  delImage = () => {
    if(this.state.counter>0)
    this.setState(
      (prevState) => ({ ...prevState, counter: prevState.counter - 1 }),
      this.generateImageURL
    );
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
      <div className="header-container">
      <header className="title">Flex-Gallery</header>
        <button className="btn btn-primary btn-sm m-2" onClick={this.addImage}>
          ADD Image
        </button>
        <button className="btn btn-danger btn-sm m-2" onClick={this.delImage}>
          Delete Image
        </button>
        <p>Dispalyed Images:{this.state.counter}</p>
        <div className="container">
        <div className="row">
        <div className="col-md-6">
          {this.state.imageURL.map((images) => {
            return <img src={images} style={{margin: 5}}alt="" />;
          })}
          </div>
          </div>
        </div>
        
      </div>
    );
  }
}
export default Header;
