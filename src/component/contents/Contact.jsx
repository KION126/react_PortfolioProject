import React, { useState } from 'react';
import LineNumbers from '../public/LineNumbers';
import '../../style/ContactStyle.css'

const Contact = () => {

    return (
        <div className='flex h-full text-[20px] font-consolas'>
            <LineNumbers lines={5} />
            <div>
                <div className="text-[#569cd6]">const <span className="text-[#2ba3ff]">contact</span> <span className='text-[#d4d4d4]'>=</span> <span className='text-[#b670cb]'>&#123;</span></div>
                <div className="key">email: <span className="value">"kg20011216@gmail.com"</span><span className='syntax'>,</span></div>
                <div className="key">github: <a href="https://github.com/KION126" className="value hover:underline">"KION126"</a><span className='syntax'>,</span></div>
                <div className="key">kakao: <a href="https://open.kakao.com/o/sgkFLnXg" className="value hover:underline">"kakao open chat"</a><span className='syntax'>,</span></div>
                <div className="text-[#d4d4d4]"><span className='text-[#b670cb]'>&#125;</span>;</div>
            </div>
        </div>
    );
};

export default Contact;