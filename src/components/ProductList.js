import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {storeProducts} from '../data';
import {ProductConsumer} from '../Context';

class ProductList extends Component {
 
     constructor(props){
         super(props);
         this.state = {
             products : storeProducts
         }
     }

    render() 
    {return (

            <React.Fragment>
            <div className="container">
            <Title name="our" title="products "></Title>
              <div className="row">
                 <ProductConsumer>
                 {
                     value => {
                         return value.products.map( product => {
                             return <Product key ={product.id} product={product}></Product>;
                         })
                     }
                }
                 </ProductConsumer>
              </div>
            </div>
            </React.Fragment>
        );
    }
}

export default ProductList;