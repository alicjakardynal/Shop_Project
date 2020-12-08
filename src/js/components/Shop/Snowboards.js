import React, { Component }  from 'react';
import ShopHeader from "./ShopHeader";
import Filters from "./Filters";
import OneProduct from "./OneProduct";
import Footer from "./Footer"
class Snowboards extends Component {
    state = {
      snowboardsArray: [],
      filteredArray:[],
    };
  
    loadFreestyle = () => {
      let freestyle = this.state.snowboardsArray.filter((x) => {
        return x.ridingStyle === "freestyle";
      });
      this.setState({
        filteredArray: freestyle,
      });
    };
  
    loadFreeride = () => {
      let freeride = this.state.snowboardsArray.filter((x) => {
        return x.ridingStyle === "freeride";
      });
      this.setState({
        filteredArray: freeride,
      });
    };
  
    loadAll = () => {
      
      this.setState({
        filteredArray: this.state.snowboardsArray,
      });
    };
  
  
    componentDidMount() {
        fetch("https://api.npoint.io/50e69c6bc6f917a95f1b/products")
        //if from server local need to be change src  to src/sass  sthbecause githubpages change source...
        .then((resp) => {
          if (resp.ok) return resp.json();
          throw new Error("Problem with loading data");
        })
        .then((obj) => {
          const arr = obj.filter((x) => {
            return x.category === "snowboard";
          });
          this.setState({
            snowboardsArray: arr,
            filteredArray:arr,
          });
        });
    }
    render() {
      return (
        <div className="main_product_area">
          <ShopHeader items={this.props.items} />
          <div className="products_area">
            <Filters
              loadFreestyle={this.loadFreestyle}
              loadFreeride={this.loadFreeride}
              loadAll={this.loadAll}
            />
            <SnowboardsProducts
              changeCounter={this.props.changeCounter}
              snowboardsArray={this.state.snowboardsArray}
              filteredArray={this.state.filteredArray}
              addItems={this.props.addItems}
            />
          </div>
          <Footer />
        </div>
      );
    }
  }

  class SnowboardsProducts extends Component {

    render() {
      const { snowboardsArray } = this.props;
      const {filteredArray} = this.props;
      
      return (
        <div className="container_products">
          <h2>SNOWBOARDS</h2>
          <div className="products_area">
            {filteredArray.map((product) => (
              <OneProduct
                product={product}
                brand={product.brand}
                name={product.name}
                img={product.imgSrc}
                price={product.price}
                key={product.id}
                addItems={this.props.addItems}
                changeCounter={this.props.changeCounter}
              />
            ))}
          </div>
        </div>
      );
    }
  }

  export default Snowboards;