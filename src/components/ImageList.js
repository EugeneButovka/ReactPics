import React from 'react';

const ImageList = (props) => {
    /*straightforward*/
    /*
    const images = props.images.map((image) => {
        return <img
            key={image.id}
            src={image.urls.regular}
            alt={image.description}
        />
    });
    */

    /*with destructive syntax*/
    const images = props.images.map(({ description, id, urls }) => {
        return <img
            key={id}
            src={urls.regular}
            alt={description}
        />
    });

    return (
        <div className={"ui segment"}>
            {images}
        </div>
    );
};

export default ImageList;