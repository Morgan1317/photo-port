import React from 'react';
import { capitalizeFirstLetter} from '../../utils/helpers'
import photo from "../../assets/small/commercial/0.jpg"

function Gallery(props) {
    const currentCategory = {
        name: 'Commercial',
        description: 'Photos of grocery stores, food trucks, and other commercial projects',
    };
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.name}</p>
            <div>
                <img alt='Commercial Example'
                    className='img-thumbnail mx-1'
            src={photo}
          />
                
            </div>
        </section>
    );
}

export default Gallery; 