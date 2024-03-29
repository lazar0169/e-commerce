import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = (props) => (
    <div className="collection-item">
        <div
            className="image"
            style={{
                backgroundImage: `url(${props.imageUrl})`
            }}
        > </div>
        <div className="collection-footer">
            <span className="name">{props.name}</span>
            <span className="price">{props.price}</span>
        </div>
    </div>
)

export default CollectionItem;