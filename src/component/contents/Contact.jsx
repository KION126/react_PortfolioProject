import React from 'react';
import LineNumbers from '../public/LineNumbers';
import '../../style/contactStyle.css'

const Contact = () => {

    return (
        <div className='flex h-full text-[20px] font-consolas'>
            <LineNumbers lines={5} />
            <div>
                <div className="text-[#569cd6]">const <span className="text-[#2ba3ff]">contact</span> <span className='text-[#d4d4d4]'>=</span> <span className='text-[#b670cb]'>&#123;</span></div>
                <div className="con-key">email: <span className="con-value">"kg20011216@gmail.com"</span><span className='con-syntax'>,</span></div>
                <div className="con-key">github: 
                    <a href="https://github.com/KION126" target='_blank' rel="noreferrer" className="con-value">"</a>
                    <a href="https://github.com/KION126" target='_blank' rel="noreferrer" className="con-value hover:underline hover:underline-offset-4">KION126</a>
                    <a href="https://github.com/KION126" target='_blank' rel="noreferrer" className="con-value">"</a>
                    <span className='con-syntax'>,</span>
                </div>
                <div className="con-key">kakao: 
                <a href="https://github.com/KION126" target='_blank' rel="noreferrer" className="con-value">"</a>
                    <a href="https://open.kakao.com/o/sgkFLnXg" target='_blank' rel="noreferrer" className="con-value hover:underline hover:underline-offset-4">Kakao Open Chat</a>
                    <a href="https://github.com/KION126" target='_blank' rel="noreferrer" className="con-value">"</a>
                    <span className='con-syntax'>,</span>
                </div>
                <div className="text-[#d4d4d4]"><span className='text-[#b670cb]'>&#125;</span>;</div>
            </div>
        </div>
    );
};

export default Contact;