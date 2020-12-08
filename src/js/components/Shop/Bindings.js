import React, { Component }  from 'react';
import ShopHeader from "./ShopHeader";
import Filters from "./Filters";
import OneProduct from "./OneProduct";
import Footer from "./Footer";


class Bindings extends Component {
    state={
      bindingsArray:[],
      filteredArray:[]
    }
    loadFreestyle = () => {
      let freestyle = this.state.bindingsArray.filter((x) => {
        return x.ridingStyle === "freestyle";
      });
      this.setState({
        filteredArray: freestyle,
      });
    };
    
    loadFreeride = () => {
      let freeride = this.state.bindingsArray.filter((x) => {
        return x.ridingStyle === "freeride";
      });
      this.setState({
        filteredArray: freeride,
      });
    };
    
    loadAll = () => {
          this.setState({
        filteredArray: this.state.bindingsArray,
      });
    };
      componentDidMount() {
        fetch("https://api.npoint.io/50e69c6bc6f917a95f1b/products")
          .then((resp) => {
            if (resp.ok) return resp.json();
            throw new Error("Problem with loading data");
          })
          .then((obj) => {
            const arr = obj.filter((x) => {
              return x.category === "bindings";
            });
            this.setState({
              bindingsArray: arr,
              filteredArray:arr,
            });
          });
      }
      render() {
        return (
          <>
            <div className="main_product_area">
            <ShopHeader items={this.props.items} />
            <div className="products_area">
              <Filters
                loadFreestyle={this.loadFreestyle}
                loadFreeride={this.loadFreeride}
                loadAll={this.loadAll}
              />
              <BindingsProducts
                filteredArray={this.state.filteredArray}
                bindingsArray={this.state.bindingsArray}
                changeCounter={this.props.changeCounter}
               addItems={this.props.addItems}
              />
            </div>
            <Footer />
            </div>
          </>
        );
      }
    }
  
  class BindingsProducts extends Component{
    render(){
      const{bindingsArray}=this.props;
      const{filteredArray}=this.props;
      return(
        <div className="container_products">
          <h2>BINDINGS</h2>
          <div className="products_area">
            {filteredArray.map((product) => (
              <OneProduct
                product={product}
                brand={product.brand}
                name={product.name}
                img={product.imgSrc}
                price={product.price}
                key={product.id}
                changeCounter={this.props.changeCounter}
                addItems={this.props.addItems}
              />
            ))}
          </div>
        </div>
      )
    }
  }
export default Bindings;