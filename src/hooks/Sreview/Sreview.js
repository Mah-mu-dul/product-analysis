import React from 'react';

const Sreview = (props) => {
    const { name, rating, coment } = props.review
    return (
        <div>
            <div className="single-review">
                <div className="up ">
                    <h1>{name}</h1>
                    <h2 className=''>rating : {rating}</h2>
                </div>
                <p>{coment}</p>
            </div>
        </div>
    );
};

export default Sreview;