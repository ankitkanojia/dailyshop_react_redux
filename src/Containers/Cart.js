
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cart extends Component {
    static propTypes = {
        product: PropTypes.object.isRequired,
        removeFromCart: PropTypes.func.isRequired
      };

    render() {
        const {product} = this.props;
        return (<li key={product.id}>
            <a className="aa-cartbox-img" href="javascript:void(0)"><img src={"Content/img/" + product.imgurl} alt="img" /></a>
            <div className="aa-cartbox-info">
                <h4><a href="javascript:void(0)">{product.title}</a></h4>
                <p>{product.count} x {product.discountedprice}{product.price}</p>
            </div>
            <a onClick={() => this.props.removeFromCart(product)} className="aa-remove-product" href="javascript:void(0)"><span className="fa fa-times"></span></a>
        </li>)
    }
}

export default Cart;
