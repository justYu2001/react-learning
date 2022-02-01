import React from 'react';

const SplitPane = (props) => {
    return (
        <div className='split-pane'>
            <div className='pane'>
                {props.left}
            </div>
            <div className='pane'>
                {props.right}
            </div>
        </div>
    );
};

export default SplitPane;