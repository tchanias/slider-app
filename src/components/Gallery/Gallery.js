import React from 'react';


function MasonryGallery(props) {
    let masonryImages = '';
    let masonryImagesFirst = '';
    if (props.images) {
        masonryImages = props.images.map((image, index) => {
            if (index > 0) {
                return (
                    <div className="item" key={index}>
                        <img
                            src={image.img}
                            alt={image.title}
                            className="img-responsive"
                        />
                        <p className="title">{image.title}</p>
                    </div>
                )
            }
            return false;
        })
        masonryImagesFirst = props.images[0]
    }


    console.log(props.images)

    return (
        <div className="masonry">
            <div className="masonry-item-1">                    
                <div className="item">
                    <img
                        className="img-responsive"
                        src={masonryImagesFirst.img}
                        alt={masonryImagesFirst.title}
                    />
                    <p className="title">{masonryImagesFirst.title}</p>
                </div>
            </div>
            <div className="masonry-item-2">{masonryImages}</div>
        </div>
    )
}

export default MasonryGallery
