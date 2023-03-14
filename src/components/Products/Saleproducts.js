import React from 'react';
import './Saleproducts.css';

class Saleproducts extends React.Component{
saleProductList=()=>{
    var list=[];
    for(var i=0;i<4;i++){
    list.push(
    <div className='saleproducts_item' key={i}>
        <div className='saleproducts_image'>
           <img src='https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='pic'></img>
        </div>
        <div className='saleproducts_button'>
            <p>Product {i}</p>
            <button>ADD</button>
        </div>
        <p>$999.00</p>
    </div>);
    }
    return list;
}

render(){
return(
<div className='saleproducts'>
    <h4>SALE PRODUCTS</h4>
    <div className='saleproducts_list'>
    {this.saleProductList()}
    </div>        
</div>
)
}
}

export default Saleproducts;