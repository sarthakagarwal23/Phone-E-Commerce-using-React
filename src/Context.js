import React , {Component} from 'react';
import {storeProducts , detailProduct} from './data';
const ProductContext = React.createContext();
//provider
//consumer


class ProductProvider extends Component{

    render(){
        return(
        <ProductContext.Provider value="hello ">
        
        {this.props.children}
        
        </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider , ProductConsumer }; 