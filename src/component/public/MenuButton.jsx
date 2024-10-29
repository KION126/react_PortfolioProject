import React from 'react';

const MenuButton = (props) => {
    return (
        <button className='text-[13px] rounded-md px-2 py-[2px] hover:bg-[#2D2E2E]'>
            {props.title}
        </button>
    );
};

export default MenuButton;