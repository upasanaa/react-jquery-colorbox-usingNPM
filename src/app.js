import React, {Component}  from 'react';
import jQuery from 'jquery';
import colorbox from 'jquery-colorbox';


export default class App extends Component {
    componentDidMount() {

    jQuery(document).ready(function () {
        jQuery('a.gallery').colorbox({ opacity:0.5 , rel:'group1' });
      });

  }

render() {
    return (
        <div>

            <a className='gallery' href='../styles/image1.jpg'>Photo_1</a>
            <a className='gallery' href='../styles/image2.jpg'>Photo_2</a>
            <a className='gallery' href='../styles/image3.jpg'>Photo_3</a>

        </div>

        );

    }
}


