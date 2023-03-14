import React from 'react';
import './Todaydeal.css';

class Todaydeal extends React.Component{
render(){
return(
<div className='todaydeal'>
    <div className='todaydeal_product'>
        <div><img src='https://cdn.pixabay.com/photo/2017/01/18/17/14/girl-1990347_1280.jpg' alt='pic'></img></div>
        <div>
        <p>BEST THEME</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et urna mi. Aenean mattis, est eget mattis ultricies, erat nisl iaculis sem, non hendrerit felis nulla quis enim.</p>
        <p><span className='todaydealButton' onClick={()=>this.props.onCollectionRouteChange('smartphones')}>View More </span></p>
        </div>
    </div>
</div>
)
}
}

export default Todaydeal;