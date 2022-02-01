import React from 'react';

const CustomComponent = (props) => {
    return (
        <div>
            <p>hello</p>
            {props.children}
        </div>
    );
};

export default CustomComponent;