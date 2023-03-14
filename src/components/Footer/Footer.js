import React from 'react';
import './Footer.css';

class Footer extends React.Component{
render(){
return(
<div className='footer'>
    <div className='footer_1'>
        <div className='footer_about'>
        <h3>About Us</h3>
        Praesent fringilla dolor eget congue imperdiet. Aliquam erat justo, vehicula eu metus in, sollicitudin interdum leo. Sed auctor non tortor in dictum. Proin scelerisque metus tempor sodales eleifend. Sed cursus odio a fringilla bibendum. Proin facilisis, tellus et elementum cursus, libero sem volutpat dui, nec posuere enim lacus a dui. Quisque imperdiet ultricies molestie. Sed bibendum lorem magna. Donec imperdiet dui in nunc ullamcorper scelerisque. Fusce egestas ullamcorper pellentesque. Fusce tincidunt porta posuere. Praesent vehicula lacus eu tellus dignissim blandit quis non justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vel vestibulum ipsum. 
        </div>
        <div className='footer_info'>
            <h3>Information</h3>
            <ul>
            <li>Phasellus id fermentum est, ut bibendum sapien.</li>
            <li>Orci varius natoque penatibus et magnis.</li>
            <li>Vivamus vehicula semper nunc, vel aliquam.</li>
            </ul>
        </div>
    </div>
    <div className='footer_2'>
        <div className='footer_information'>
        <h3>Information</h3>
            <ul>
                <li onClick={()=>{this.props.onPageRouteChange('mainPage')}}>Home</li>
                <li onClick={()=>{this.props.onPageRouteChange('aboutPage')}}>About Us</li>
                <li onClick={()=>{this.props.onPageRouteChange('contactPage')}}>Contact Us</li>
            </ul>
        </div>
        <div className='footer_collection'>
        <h3>Collection</h3>
            <ul>
            <li onClick={()=>this.props.onCollectionRouteChange('mens-shirts')}>Dress</li>
            <li onClick={()=>this.props.onCollectionRouteChange('smartphones')}>Mobiles</li>
            <li onClick={()=>this.props.onCollectionRouteChange('laptops')}>Laptops</li>
            <li onClick={()=>this.props.onCollectionRouteChange('home-decoration')}>Home Decor</li>
            <li onClick={()=>this.props.onCollectionRouteChange('lighting')}>Lights</li>
            <li onClick={()=>this.props.onCollectionRouteChange('mens-watches')}>Watches</li>
            </ul>
        </div>
        <div className='footer_myaccount'>
        <h3>My Account</h3>
            <ul>
                <li>My Account</li>
                <li>My Addresses</li>
                <li  onClick={()=>{this.props.onPageRouteChange('cartPage')}}>My Cart</li>
            </ul>
        </div>
        <div className='footer_followus'>
        <h3>Follow Us</h3>
            <ul>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Youtube</li>
                <li>Pinterest</li>
                <li>Google+</li>
            </ul>
        </div>
    </div>
</div>
)
}
}

export default Footer;