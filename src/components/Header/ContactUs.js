import React from 'react';
import './AboutContact.css';

class ContactUs extends React.Component{
render(){
return(
<div className='contact_us'>
    <div className='contact_us_left'>
    <h3>FREQUENTLY ASKED QUESTIONS</h3>
    <p>1.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Aliquam sagittis tellus purus, at eleifend metus pharetra id. Maecenas vel velit sit amet nisl malesuada maximus. Mauris lacus lacus, vestibulum nec auctor non, laoreet vel quam. Nunc molestie, ligula in euismod sollicitudin, dolor ipsum rhoncus mi, ut placerat mauris urna non ante. Cras neque nulla, scelerisque a mauris sit amet, semper congue diam. Nam eleifend sem et hendrerit vestibulum. Cras ante erat, sodales nec nisl quis, maximus lobortis magna. Nulla id metus sodales, congue tellus ut, sodales sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam non cursus augue, a elementum elit. Aenean tempor sapien a nisi lobortis, vel malesuada dolor dictum.</p>
    {/* <br/> */}
    <p>2.Praesent nisl leo, interdum in dolor in, tincidunt volutpat augue.</p><p> Aliquam ultrices, augue sed vestibulum vehicula, metus lacus viverra arcu, sed accumsan mi libero a ante. Mauris dignissim accumsan convallis. Fusce fermentum lorem ac lectus lacinia, vel ultricies orci congue. Morbi at eros egestas massa rhoncus pulvinar vitae maximus mauris. Donec nec scelerisque mauris. Praesent vulputate neque ac turpis pretium, ac congue odio dignissim.</p>
    {/* <br/> */}
    <p>3.Aliquam vel sapien sed purus scelerisque eleifend.</p><p> Aliquam tincidunt aliquam viverra. Nulla aliquet eget tellus lacinia luctus. Mauris commodo nisl nec efficitur ultrices. Mauris egestas risus et metus egestas sollicitudin. Ut id metus ante. Proin vitae nisi tincidunt arcu efficitur ullamcorper. Maecenas tempor orci ac diam scelerisque, vitae posuere sem tempus. Donec id tellus ut lectus rhoncus commodo. Aenean at dignissim orci.</p>
    {/* <br/> */}
    <p>4.Praesent eu sem efficitur odio cursus rhoncus.</p><p> Etiam viverra mi et velit posuere blandit. Donec ac ligula laoreet, blandit metus at, facilisis ex. Pellentesque ac lorem enim. Suspendisse eget nisl ligula. Aliquam cursus ipsum sit amet nunc efficitur, in auctor nibh dignissim. Donec vitae leo turpis. Integer eget sapien eget erat tincidunt ornare. Etiam condimentum sit amet diam quis pretium. Integer in auctor ante, et congue magna. Nam quis neque auctor, tincidunt felis in, molestie justo. Ut vulputate et eros dictum rutrum.</p>
    {/* <br/> */}
    <p>5.Maecenas non lorem pretium, finibus ipsum at, tempus eros.</p><p> Fusce consequat orci ut felis pharetra interdum. Fusce sed neque a risus lobortis interdum. Donec nec tortor et neque rhoncus lacinia in eu arcu. Fusce ac aliquet enim. Sed tempor ornare ipsum, ac convallis urna tempus et. Donec dignissim rhoncus molestie. Praesent vitae malesuada libero. Nam semper ex quis lectus ultricies porttitor. Mauris id placerat orci. Mauris accumsan nisi purus, et scelerisque nulla tincidunt eu. Ut quis tellus sed neque iaculis auctor vitae et neque.</p>
    </div>
    <div className='contact_us_right'>
        <h4>CONTACT US</h4>
        <p>Maecenas non lorem pretium</p>
        <p>Finibus ipsum at, tempus eros</p>
        <p>Donec nec tortor et</p>

        <h4>CUSTOMER SERVICE HOURS</h4>
        <p>Sed tempor ornare ipsum</p>
        <p>Mauris id placerat orci</p>
        <p>Integer in auctor ante</p>

        <h4>MAILING ADDRESS</h4>
        <p>Aliquam cursus ipsum sit</p>
        <p>Mauris commodo nisl nec</p>
        <p>Fusce fermentum lorem ac</p>

    </div>
</div>
)
}
}

export default ContactUs;