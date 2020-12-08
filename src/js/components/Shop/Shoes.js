import React, { Component }  from 'react';
import ShopHeader from "./ShopHeader";
import Filters from "./Filters";
import OneProduct from "./OneProduct";
import Footer from "./Footer";


class Shoes extends Component {
    state={
      shoesArray:[],
      filteredArray:[]
    }
    loadFreestyle = () => {
      let freestyle = this.state.shoesArray.filter((x) => {
        return x.ridingStyle === "freestyle";
      });
      this.setState({
        filteredArray: freestyle,
      });
    };
    
    loadFreeride = () => {
      let freeride = this.state.shoesArray.filter((x) => {
        return x.ridingStyle === "freeride";
      });
      this.setState({
        filteredArray: freeride,
      });
    };
    
    loadAll = () => {
       this.setState({
        filteredArray: this.state.shoesArray,
      });
    };
      componentDidMount() {
        fetch("https://api.npoint.io/61f59afc88313e1da81f/products")
          .then((resp) => {
            if (resp.ok) return resp.json();
            throw new Error("Problem with loading data");
          })
          .then((obj) => {
            const arr = obj.filter((x) => {
              return x.category === "shoes";
            });
            this.setState({
              shoesArray: arr,
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
              <ShoesProducts
                filteredArray={this.state.filteredArray}
                shoesArray={this.state.shoesArray}
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
    
    class ShoesProducts extends Component{
      render(){
        const{shoesArray}=this.props;
        const{filteredArray}=this.props;
        return(
          <div className="container_products">
            <h2>SHOES</h2>
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
    export default Shoes;