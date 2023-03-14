import React from 'react';
import './Newproducts.css';

class Newproducts extends React.Component{

createnewButton=(i)=>{
var productData2=this.props.featuredProductData;
return( 
    <div>
        <div className='newproducts_image'>
        <img src={`${productData2[i].productimg}`} alt='pic'  onClick={()=>this.props.onProductRouteChange(productData2[i].productcode)}></img>
        </div>

        <div className='newproducts_button'>
        <p>{productData2[i].productname}</p>
        <button onClick={()=>this.props.onAddToCart(productData2[i].productcode)}>ADD</button>
        {/* <button id={`${productData1[i].productcode}`} onClick={()=>this.buttonClick(productData1[i].productcode)}>ADD</button> */}
        </div>

        <p>$999.00</p>
    </div>)
}
newProductList=(product)=>{
    // console.log('func product',product)
    var nlist=[];
    for(var i=0;i<4;i++){
    nlist.push(
        <div className='newproducts_item' key={i}>
            {this.createnewButton(i)}
        </div>        
        )    
    }   
    return nlist; 
}

// newProductList=()=>{
//     var list=[];
//     for(var i=0;i<4;i++){
//     list.push(
//     <div className='newproducts_item' key={i}>
//         <div className='newproducts_image'>
//             <img src='https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80' alt='pic'></img>
//         </div>
//         <div className='newproducts_button'>
//             <p>Product {i}</p>
//             <button>ADD</button>
//         </div>
//         <p>$999.00</p>
//     </div>);
//     }
//     return list;
// }

render(){
    var product=this.props.newProductData;
    // console.log('producy',product);

    if(product.length === 0){
        // console.log('ohhhooo1',product.length);
        return(<div><h1>Loading</h1></div>)
    }
    else{
        // console.log('ohhhooo2',product.length);
        return(
        <div className='newproducts'>
            <h4>NEW PRODUCTS</h4>
            <div className='newproducts_list'>
            {this.newProductList(product)}
            </div>        
        </div>
        )
    }

}
}

export default Newproducts;