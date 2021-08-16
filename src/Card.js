import React, { Component } from 'react';
import './styles/Card.css'

class Card extends Component {
    constructor(props){
        super(props);

        this.state = {
            count: 1,
            basePrice: 200,
            addToCompare: false,
            selectedColor: '',
            selectedSize: 100,
            possibleColors: ['Желтый', 'Красный', 'Зеленый', 'Синий', 'Фиолетовый'],
            possibleSizes: [100, 200, 300]
        }
    }

    addToCompare = () => {
        this.setState({addToCompare: !this.state.addToCompare})
    }

    selectColor = (color) => {
        this.setState({selectedColor: color})
    }

    changeCount = (type) =>{ 
        let {count} = this.state;
        if(type === 'increment'){
            count++;
        }
        if((type === 'decrement') && (count !== 1)){
            count--;
        }
        this.setState({count: count})
    }

    selectSize(e){      
        let newSize = Number(e.target.value);
        this.setState({selectedSize: newSize});
    }

    render() {
        const {addToCompare, selectedColor, selectedSize, possibleColors, basePrice, count, possibleSizes} = this.state;
        
        let resultPrice = count * (selectedSize/100) * basePrice;

        return (
            <div className="card">
                <div className="new">NEW</div>
                <div className={"scales-base " + (addToCompare?"tick":"scales")} onClick={this.addToCompare}></div>
                <div className="img-container">
                    <img src={this.props.baseImage} alt="shampoo_img" className="base-image" /> 
                    <img src={this.props.largeImage} alt="shampoo_img" className="large-image" /> 
                </div>
                <p className="title">Шампунь</p>
                <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
                <div className="options">
                    <div className="color">
                        <div className="selected-color"><p>{selectedColor?selectedColor:"Цвет"}</p></div>
                        <div className="possible-colors">
                            {possibleColors.map(item => 
                                <div className="color-item" onClick={()=>this.selectColor(item)}><p>{item}</p></div>
                            )}
                        </div>
                    </div>
                    <div className="price"><p>{resultPrice} грн</p></div>
                    <div className="size-block">
                        {possibleSizes.map(item => 
                            <div className="radio-container">                                
                                <label>
                                    <input
                                    type="radio"
                                    value={item}
                                    checked={item === selectedSize}
                                    onChange={(e) => this.selectSize(e)}
                                    />
                                {item} мл
                                <span className="checkmark"></span>
                            </label>
                            </div>                      
                        )}
                    </div>
                </div>    
                <div className="button-block">
                    <div className="counter">
                        <div className="counter-button minus" onClick={() =>this.changeCount('decrement')}/>
                        <p>{count}</p>
                        <div className="counter-button plus" onClick={() => this.changeCount('increment')}/>
                    </div>
                    <button>КУПИТЬ</button>
                </div>
            </div>
        );
    }
}

export default Card;