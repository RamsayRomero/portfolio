import { useState } from 'react';
import { Transition } from '@headlessui/react';

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header className='relative'>
      <div className='bg-gray-900 pt-6'>
        <nav
          className='relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6'
          aria-label='Global'
        >
          <div className='flex items-center flex-1'>
            <div className='flex items-center justify-between w-full md:w-auto'>
              <div className='-mr-2 flex items-center md:hidden'>
                <button
                  onClick={() => setMobileMenuIsOpen(true)}
                  type='button'
                  className='bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white'
                  aria-expanded='false'
                >
                  <span className='sr-only'>Open main menu</span>
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className='hidden space-x-8 md:flex md:ml-10'>
              <a
                href='#about'
                className='text-base font-medium text-white hover:text-gray-300'
              >
                About
              </a>
              <a
                href='#projects'
                className='text-base font-medium text-white hover:text-gray-300'
              >
                Projects
              </a>
              <a
                href='#contact'
                className='text-base font-medium text-white hover:text-gray-300'
              >
                Contact
              </a>
            </div>
          </div>
          <div className='hidden md:flex md:items-center md:space-x-6'>
            <a
              href='/Ramsay_Romero_Resume.pdf'
              target='_blank'
              className='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700'
            >
              Resume
            </a>
          </div>
        </nav>
      </div>
      <Transition
        show={mobileMenuIsOpen}
        enter='duration-150 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
        className='absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden z-10'
      >
        <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
          <div className='px-5 pt-4 flex items-center justify-between'>
            <div className='-mr-2'>
              <button
                onClick={() => setMobileMenuIsOpen(false)}
                type='button'
                className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600'
              >
                <span className='sr-only'>Close menu</span>
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className='pt-5 pb-6'>
            <div className='px-2 space-y-1'>
              <a
                href='#about'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50'
              >
                About
              </a>

              <a
                href='#projects'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50'
              >
                Projects
              </a>

              <a
                href='#contact'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50'
              >
                Contact
              </a>
            </div>
            <div className='mt-6 px-5'>
              <a
                href='/Ramsay_Romero_Resume.pdf'
                target='_blank'
                className='block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-amber-400 to-red-500 text-white font-medium hover:from-amber-500 hover:to-red-600'
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </header>
  );
}
