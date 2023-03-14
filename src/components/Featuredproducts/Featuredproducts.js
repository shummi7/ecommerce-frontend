import React from 'react';
import './Featuredproducts.css';

class Featuredproducts extends React.Component{

createButton=(i)=>{
var productData2=this.props.featuredProductData;
return( 
    <div>
        <div className='featuredproducts_image'>
        <img src={`${productData2[i].productimg}`} alt='pic'  onClick={()=>this.props.onProductRouteChange(productData2[i].productcode)}></img>
        </div>

        <div className='featuredproducts_button'>
        <p>{productData2[i].productname}</p>
        <button onClick={()=>this.props.onAddToCart(productData2[i].productcode)}>ADD</button>
        {/* <button id={`${productData1[i].productcode}`} onClick={()=>this.buttonClick(productData1[i].productcode)}>ADD</button> */}
        </div>

        <p>$999.00</p>
    </div>)
}
featuredProductList=(product)=>{
    // console.log('func product',product)
    var flist=[];
    for(var i=0;i<4;i++){
    flist.push(
        <div className='featuredproducts_item' key={i}>
            {this.createButton(i)}
        </div>        
        )    
    }   
    return flist; 
}
 
render(){

    var product=this.props.featuredProductData;
    // console.log('ohhhooo',product);

    if(product.length === 0){
        // console.log('ohhhooo1',product.length);
        return(<div><h1>Loading</h1></div>)
    }
    else{
        // console.log('ohhhooo2',product.length);
        return(
        <div className='featuredproducts'>
            <h4>FEATURED PRODUCTS</h4>
            <div className='featuredproducts_list'>
            {this.featuredProductList(product)}
            </div>        
        </div>
        )
    }
}
}

export default Featuredproducts;

// featuredProductList=()=>{
//     var product=this.props.featuredProductData;
//     var flist=[];
//     for(var i=0;i<6;i++){
//     flist.push(
//     <div className='featuredproducts_item' key={i}>
//         <div className='featuredproducts_image'>
//             <img src={`${product[i].productimg}`}
//             alt='pic'></img>
//         </div>
//         <div className='featuredproducts_button'>
//             <p>{product[i].productname}</p>
//             <button>ADD</button>
//         </div>
//         <p>$999.00</p>
//     </div>);
//     }
//     return flist;
// }


// featuredProductList=(product)=>{
//     console.log('func product',product)
//      var flist=[];
//      for(var i=0;i<5;i++){
//      flist.push(
//      <div className='featuredproducts_item' key={i}>
//          <div className='featuredproducts_image'>
//              <img src={`${product[i].productimg}`}
//              alt='pic'></img>
//          </div>
//          <div className='featuredproducts_button'>
//              <p>{product[i].productname}</p>
//              <button>ADD</button>
//          </div>
//          <p>$999.00</p>
//      </div>);
//      }
//      return flist;
//  }