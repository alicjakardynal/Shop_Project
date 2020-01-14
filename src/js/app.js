import React, { Component } from "react";
import ReactDOM from "react-dom";

import { HashRouter, Route, Switch, NavLink } from "react-router-dom";
import "./../sass/style.scss";

import IntroText from "./components/IntroText";
import Background from "./components/Background";
import SkipIntro from "./components/SkipIntro";
import BeginnerPage from "./components/BeginnerPage";
import IntermediatePage from "./components/IntermediatePage";
import FreeridePage from "./components/FreeridePage";
import FreestylePage from "./components/FreestylePage";
import { Hash } from "crypto";


class StartingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objectArray: [],
    };
  }
 
  addObject = (product) => {
   
        let newObjectArray = [...this.state.objectArray, product];
        this.setState({
            objectArray: newObjectArray
        })
    
}
deleteObject = (id) =>{
  
  const newBasket = this.state.objectArray.filter(product => {
      return product.id  !== id 
      
  });
  this.setState({
      objectArray: newBasket
  });
  console.log("coś się usunęło")
}


  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/beginner" component={BeginnerPage} />
          <Route exact path="/intermediate" component={IntermediatePage} />
          <Route exact path="/shop" render={props => <Shop {...props} addItems={this.addObject} items={this.state.objectArray}/>} />
          <Route exact path="/freeride" component={FreeridePage} />
          <Route exact path="/freestyle" component={FreestylePage} />
          <Route exact path ="/basket" render={props => <BasketInside {...props} items={this.state.objectArray} delete={this.deleteObject}/>}/>
        </Switch>
      </HashRouter>
    );
  }
}

class Welcome extends Component {
  render() {
    return (
      <section className="welcoming-page">
        <Background />
        <SkipIntro />
        <IntroText text="Hi ! Choose if You are:" />
        <ChooseOptions />
      </section>
    );
  }
}

class ChooseOptions extends Component {
  render() {
    return (
      <>
        <div className="intro_btn_position">
          <BeginnerButton />
          <IntermediateButton />
        </div>
      </>
    );
  }
}

class BeginnerButton extends Component {
  render() {
    return (
      <HashRouter>
        <div className="shape_for_text">
          <button className="beginner_btn">
            <NavLink className="link" exact to="/beginner">
              Beginner
            </NavLink>
          </button>
        </div>
        <Switch>
          <Route exact path="/beginner" component={BeginnerPage} />
        </Switch>
      </HashRouter>
    );
  }
}

class IntermediateButton extends Component {
  render() {
    return (
      <HashRouter>
        <div className="shape_for_text">
          <button className="intermediate_btn">
            <NavLink className="link" exact to="/intermediate">
              More than Beginner
            </NavLink>
          </button>
        </div>
        <Switch>
          <Route
            exact
            path="/intermediate"
            component={IntermediatePage}
          ></Route>
        </Switch>
      </HashRouter>
    );
  }
}

class Shop extends Component {
  render() {
    return (
      <section className="shopView">
        <Basket items={this.props.items}/>
        <div className="shop_position">
          <Navigation />
          <ShopBackground addItems={this.props.addItems} />
         
        </div>
      </section>
      /* <HashRouter>
  <Switch>
     <Route exact path="/basket" component={Welcome} />
       <Route exact path="/snowboards" component={BeginnerPage} />
     <Route exact path="/shoes" component={IntermediatePage} />
     <Route exact path="/blindings" component={Shop} />
    
        
     </Switch>
 </HashRouter>  */
    );
  }
}
class ShopBackground extends Component {
  render() {
    return (
      <div className="shop_background">
        <Item1 addItems={this.props.addItems}/>
        <Item2 addItems={this.props.addItems}/>
        <Item3 addItems={this.props.addItems}/>
      </div>
    );
  }
}

class Item1 extends Component {
  state={
    object:{name:"Snowboard Burton Flex:4",
    price: "1500$",
    imageSourse: "../images/5dde49c4d887b.png",
    id:1}

  }
  handleBuyButton = () => {
    const {addItems} = this.props;
    addItems(this.state.object);
    
  };
  render() {
    return (
      <section className="product">
        <h2>{this.state.object.name}</h2>
        <img src={this.state.object.imageSourse} className="product_image"></img>
        <p className="price">{this.state.object.price}</p>
        <a onClick={this.handleBuyButton} className="btn_shop">Buy</a>
        <NavLink exact to="/product"></NavLink>
      </section>
    );
  }
}
class Item2 extends Component {
  state={
    object:{name:"Snowboard Roxy Flex:7",
    price: "1000$",
    imageSourse: "../images/5dde49c4d887b.png",
    id:2}

  }
  handleBuyButton = () => {
    const {addItems} = this.props;
    addItems(this.state.object);
    
  };
  
  render() {
    return (
      <section className="product">
        <h2>{this.state.object.name}</h2>
        <img src={this.state.object.imageSourse} className="product_image"></img>
        <p className="price">{this.state.object.price}</p>
        <a onClick={this.handleBuyButton} className="btn_shop">Buy</a>
        <NavLink exact to="/product"></NavLink>
      </section>
    );
  }
}
class Item3 extends Component {
  state={
    object:{name:"Snowboard Nitro N Flex:5",
    price: "700$",
    imageSourse: "../images/5dde49c4d887b.png",
    id:3}

  }
  handleBuyButton = () => {
    const {addItems} = this.props;
    addItems(this.state.object);
    
  };
  
  render() {
    return (
      <section className="product">
        <h2>{this.state.object.name}</h2>
        <img src={this.state.object.imageSourse} className="product_image"></img>
        <p className="price">{this.state.object.price}</p>
        <a  onClick={this.handleBuyButton} className="btn_shop">Buy</a>
        <NavLink exact to="/product"></NavLink>
      </section>
    );
  }
}



class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <ul>
          <li>
            <NavLink className="navigation_options" exact to="/snowboards">
              Snowboards
            </NavLink>
          </li>
          <li>
            <NavLink className="navigation_options" exact to="/shoes">
              Shoes
            </NavLink>
          </li>
          <li>
            <NavLink className="navigation_options" exact to="/blindings">
              Bindings
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

class Basket extends Component {
  
  render() {
    const {items}=this.props;
    return (
      <section className="entering_stripe">
        <NavLink exact to="/basket"><i className="fas fa-shopping-basket"><span>({items.length})</span></i></NavLink>
      </section>
    );
  }
}
 class BasketInside extends Component{
 
   render() {
     const {items}=this.props;
     return (
        <section className="firsView">
          <div>PIĘKNIE WYSTYLIZOWANY BASKET
         <ol>
           {items.map((product,index) =>(  <ImportedProduct 
           key={index} id={product.id} name={product.name} imageSourse={product.imageSourse} price={product.price} delete={this.props.delete} />))}
         </ol>
          </div>
        </section>
     );
   }
 }

 class ImportedProduct extends Component{
handleDeleteBtn = (id)=>{
this.props.delete(id);

}

   render() {
     return (<>
       <div className="item_in_basket">
        <img className="item_img_in_basket" src={this.props.imageSourse}></img>
        <h2 className="item_name_in_basket">{this.props.name}</h2>
        <p className="item_price_in_basket">Price: {this.props.price}</p>
        <button onClick={()=>this.handleDeleteBtn(this.props.id)} className="btn_delete">Delete Product</button>
        </div>
        </>
     );
   }
 }
class App extends Component {
  render() {
    return (
      <>
        <StartingPage />
      </>
    );
  }
}

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<App />, document.getElementById("app"));
});
