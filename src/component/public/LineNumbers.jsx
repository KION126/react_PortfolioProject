import React from 'react';

const LineNumbers = ({ lines }) => {
    return (
        <div className='px-4 text-[#868686]'>
            {Array.from({ length: lines }, (_, index) => (
                <div key={index} className="line-number">
                    {index + 1}
                </div>
            ))}
        </div>
    );
};

export default LineNumbers;