import React from 'react';
import './Category.css';

class Category extends React.Component{

constructor(){
    super();
    this.state={
        categoryRoute:''
    }
}
// bestSellersList=()=>{
//     var bslist=[];
//     for(var i=0;i<5;i++){
//         if(i%2 === 0){
//     bslist.push(
//     <div className='bestseller_item' key={i}>
//         <div className='bestseller_image'>
//             <img src='https://images.unsplash.com/photo-1549206464-82c129240d11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'  alt='pic'></img>
//         </div>
//         <div className='bestseller_button'>
//             <p>Product {i}</p>
//             <p>$999.00</p>
//             <button>ADD</button>
//         </div>
        
//     </div>);
//         }
//         else{
//             bslist.push(
//                 <div className='bestseller_item' key={i}>
//                     <div className='bestseller_image'>
//                         <img src='https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80' alt='pic'></img>
//                     </div>
//                     <div className='bestseller_button'>
//                         <p>Product {i}</p>
//                         <p>$999.00</p>
//                         <button>ADD</button>
//                     </div>
                    
//                 </div>);
//         }
//     }
//     return bslist;
// }

render(){
return(
<div className='category'>
    <div className='category_collections'>
        <h3>Collections</h3>
        <div>
            <p onClick={()=>this.props.onCollectionRouteChange('mens-shirts')}>Dress</p>
            <p onClick={()=>this.props.onCollectionRouteChange('smartphones')}>Mobiles</p>
            <p onClick={()=>this.props.onCollectionRouteChange('laptops')}>Laptops</p>
            <p onClick={()=>this.props.onCollectionRouteChange('home-decoration')}>Home Decor</p>
            <p onClick={()=>this.props.onCollectionRouteChange('lighting')}>Lights</p>
            <p onClick={()=>this.props.onCollectionRouteChange('mens-watches')}>Watches</p>
        </div>
    </div>
    {/* <div className='category_bestsellers'>
        <h3>Best Sellers</h3>
        <div className='bestsellers_list'>
        {this.bestSellersList()}
        </div>  
    </div> */}


</div>
)
}
}

export default Category;