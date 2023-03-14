import React from 'react';
import './Productdisp.css';

class Productdisp extends React.Component{

render(){
    var productDetail=this.props.productData[0];
return(
<div className='productdisp'>
    <div className='productdisp_img'>
    <img src={`${productDetail.productimg}`}alt='pic'></img>
    </div>
    
    <div className='productdisp_text'>
        <p>{productDetail.productname}</p>
        <p>{productDetail.productdesc}</p>
        <button onClick={()=>this.props.onAddToCart(productDetail.productcode)}>Add To Cart</button> 
    </div>

</div>
)
}
}

export default Productdisp;

