import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './preview-collection.style.scss';

const PreviewCollection = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                // //NOTE: performance concern
                // items.filter((item, idx) => idx < 4)
                //     .map(({ id, ...otherItemProps }) => (
                //         <CollectionItem key={id} {...otherItemProps} />
                //     ))

                items.filter((item, idx) => idx < 4)
                    .map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
            }
        </div>
    </div>
)

export default PreviewCollection;