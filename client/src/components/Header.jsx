import React from 'react';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { RiDoubleQuotesR } from 'react-icons/ri';
import { ModeToggle } from '@/themes/mode-toggle';

const Header = () => {
  return (
    <div className='sticky top-0 z-50  bg-slate-300 dark:bg-slate-900'>
      <div className='flex p-4 ml-24 mr-24 justify-between items-center'>
        <div className='flex text-3xl uppercase'>
          <RiDoubleQuotesL />
          <h1>Quotes</h1>
          <RiDoubleQuotesR />
        </div>
        <div>
          <ModeToggle className='ml-auto ' />
        </div>
      </div>
    </div>
  );
};

export default Header;
