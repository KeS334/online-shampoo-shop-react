import React, { Component } from 'react';
import Card from './Card';
import shampoo1 from './images/shampoo1.png';
import shampoo1_ZoomIn from './images/shampoo1_zoomIn.png';
import shampoo2 from './images/shampoo2.png';
import shampoo2_ZoomIn from './images/shampoo2_zoomIn.png';
import shampoo3 from './images/shampoo3.png';
import shampoo3_ZoomIn from './images/shampoo3_zoomIn.png';
import './styles/App.css'



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      products: [
        {
          baseImage: shampoo1,
          largeImage: shampoo1_ZoomIn
        },
        {
          baseImage: shampoo2,
          largeImage: shampoo2_ZoomIn
        },
        {
          baseImage: shampoo3,
          largeImage: shampoo3_ZoomIn
        },
      ]
    }
  }


  render() {
    return (
      <div className="App">
          {
            this.state.products.map(item => 
              <Card 
                baseImage  = {item.baseImage}
                largeImage = {item.largeImage}
              />
            )
          }
      </div>
    );
  }
}

export default App;
