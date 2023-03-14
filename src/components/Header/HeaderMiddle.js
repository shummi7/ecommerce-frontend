import React from 'react';
import './HeaderMiddle.css';

class HeaderMiddle extends React.Component{
render(){
return(
<div className='header_middle'>
    <div className='logo'>LOGO</div>
    <div className='header_middle_panel'>
        <div className='header_middle_search'>
            <input type='text' placeholder='Enter your search key'></input>
            <button>GO</button>
        </div>
        <p className='header_middle_call'><span>CALL US</span> <span>xxxx-xxx-xxx</span></p>
    </div>
</div>
)
}
}

export default HeaderMiddle;