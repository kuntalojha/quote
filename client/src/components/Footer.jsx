import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className=' bg-slate-300 dark:bg-slate-900 text-azure p-4 h-20 w-full flex justify-center items-center'>
      <p className='text-center'>
        Copyright &copy; 2024 by{' '}
        <Link
          to='https://www.linkedin.com/in/mrkuntalojha/'
          className='text-azure no-underline px-2'
          target='_blank'
        >
          Kuntal Ojha
        </Link>
      </p>
    </div>
  );
};

export default Footer;
