import Header from '../components/header';
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  return (
    <div className='bg-white'>
      <Head>
        <title>Ramsay Romero</title>
        <link rel='shortcut icon' href='/logo-black.png' />
      </Head>
      <div className='relative overflow-hidden'>
        <Header />
        <main>
          <div className='pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14'>
            <div className='mx-auto max-w-7xl px-8 md:px-16 lg:px-60'>
              <div className='lg:py-16'>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 block'>
                  Hi, my name is
                </span>
                <h1 className='mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
                  <span className='block'>Ramsay Romero.</span>
                  <span className='mt-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 block'>
                    I'm a front end developer.
                  </span>
                </h1>
                <p className='mt-3 md:w-3/4 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                  I'm a front end developer based in Los Angeles, CA
                  specializing in building elegant user interfaces using React.
                </p>
                <div className='mt-10 sm:mt-12'>
                  <a
                    href='mailto:Ramsay.Romero@gmail.com'
                    className='py-3 px-5 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900'
                  >
                    Get in touch
                  </a>
                </div>
              </div>
            </div>
          </div>

          <section id='about' className='py-20 bg-gray-900'>
            <div className='px-8 md:px-16 md:grid md:grid-cols-3 md:gap-8 lg:mx-auto lg:max-w-5xl'>
              <div className='hidden md:block md:col-span-1'>
                <div className='aspect-w-5 aspect-h-8'>
                  <Image
                    className='rounded-xl w-full object-cover'
                    layout='fill'
                    src='/images/IMG_0316.jpg'
                    alt=''
                  />
                </div>
              </div>

              <div className='lg:m-0 md:col-span-2 lg:pl-8'>
                <div className='mx-auto max-w-md sm:max-w-2xl lg:max-w-none text-white'>
                  <h2 className='text-base font-semibold uppercase tracking-wider'>
                    About me
                  </h2>
                  <p className='mt-3 text-lg'>
                    Hello! I'm Ramsay, a front end web developer based in Los
                    Angeles, CA.
                  </p>
                  <p className='mt-3 text-lg'>
                    I enjoy using React to create beautiful and responsive web
                    applications with elegent and intuitive user experiences.
                  </p>
                  <p className='mt-3 text-lg'>
                    I'm passionate about writing clean and reusible code and
                    always strive to optimize performance on my applications.
                  </p>
                  <p className='mt-3 text-lg'>
                    Here are some of the technologies I love using:
                  </p>
                  <div className='sm:w-3/4'>
                    <ul className='gap-4 grid grid-cols-2 mt-4'>
                      <li>
                        <svg
                          className='w-5 h-5 inline'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <span>HTML + CSS</span>
                      </li>
                      <li>
                        <svg
                          className='w-5 h-5 inline'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <span>JavaScript</span>
                      </li>
                      <li>
                        <svg
                          className='w-5 h-5 inline'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <span>React</span>
                      </li>
                      <li>
                        <svg
                          className='w-5 h-5 inline'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <span>Redux</span>
                      </li>
                      <li>
                        <svg
                          className='w-5 h-5 inline'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <span>Tailwind</span>
                      </li>
                      <li>
                        <svg
                          className='w-5 h-5 inline'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <span>Node.js</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id='projects' className='bg-gray-900 lg:py-10'>
            <div className='mx-auto max-w-7xl px-8 md:px-16 lg:px-24'>
              <div className='py-8'>
                <h2 className='text-white text-4xl'>Projects</h2>
              </div>
              <div className='flex flex-col flex-col-reverse md:flex-row md:space-x-6'>
                <div className='w-full md:w-1/2 text-white'>
                  <h3 className='text-3xl mt-8 md:mt-0'>Climbing Weather</h3>
                  <div className='bg-gray-800 p-6 mt-4 rounded-md'>
                    <p>
                      This is an app that uses data from the Weatherbit API to
                      provide weather information for my favorite rock climbing
                      areas. It taught me how to fetch data and update state
                      with the useEffect hook and to create a responsive layout
                      where each column has independent scroll behavior
                    </p>
                  </div>
                  <div className='mt-2'>
                    <ul className='flex space-x-4'>
                      <li>React</li>
                      <li>Axios</li>
                      <li>Tailwind</li>
                    </ul>
                  </div>
                  <div className='mt-5 flex space-x-4'>
                    <a
                      className='inline-block border border-white rounded-lg py-2 px-3'
                      href='https://github.com/RamsayRomero/condies'
                    >
                      Github Repo
                    </a>
                    <a
                      className='inline-block border border-white rounded-lg py-2 px-3'
                      href='https://jovial-goldberg-ee1b37.netlify.app/'
                    >
                      Live demo
                    </a>
                  </div>
                </div>
                <div className='w-full md:w-3/4'>
                  <div className='rounded-md overflow-hidden aspect-w-11 aspect-h-5'>
                    <Image
                      src='/images/screenshot-jovial-goldberg-ee1b37.netlify.app-2021.04.01-14_18_26.png'
                      alt='Climbing Weather'
                      layout='fill'
                      className='rounded-md object-cover'
                    />
                  </div>
                </div>
              </div>
              <div className='flex flex-col mt-20 md:flex-row md:space-x-6 md:mt-12'>
                <div className='w-full md:w-auto'>
                  <Image
                    src='/images/screenshot-mystifying-mcclintock-45a916.netlify.app-2021.03.24-17_34_47.png'
                    alt='Windbnb'
                    width={640}
                    height={400}
                    objectFit='cover'
                    objectPosition='top'
                    className='rounded-md'
                  />
                </div>
                <div className='w-full md:w-1/2 text-white md:text-right'>
                  <h3 className='text-3xl mt-8 md:mt-0'>Windbnb</h3>
                  <div className='bg-gray-800 p-6 mt-4 rounded-md'>
                    <p>
                      This was my solution to a coding challenge from the site
                      devchallenges.io which provided a complete design on figma
                      and no instructions or limitations on how to create the
                      finished app. Solving this problem taught me how to take a
                      design and produce an identical and functional react app.
                      It taught me to use form elements to dynamically filter
                      data in a responsive way.
                    </p>
                  </div>
                  <div className='mt-2'>
                    <ul className='flex space-x-4 justify-end'>
                      <li>React</li>
                      <li>Redux</li>
                      <li>Tailwind</li>
                    </ul>
                  </div>
                  <div className='mt-5 flex space-x-4 justify-end'>
                    <a
                      className='inline-block border border-white rounded-lg py-2 px-3'
                      href='https://github.com/RamsayRomero/windbnb'
                    >
                      Github Repo
                    </a>
                    <a
                      className='inline-block border border-white rounded-lg py-2 px-3'
                      href='https://mystifying-mcclintock-45a916.netlify.app/'
                    >
                      Live demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id='contact' className='bg-gray-900 py-16'>
            <div className='mx-auto px-8 md:px-0 md:w-1/2 text-center py-10'>
              <h2 className='mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl'>
                Get in touch
              </h2>
              <p className='mt-3 text-lg text-gray-300'>
                I'm currently looking for front end development opportunities.
                If you have any questions please reach out and I'll try my best
                to get back to you quickly.
              </p>
              <div className='mt-8'>
                <div className='inline-flex rounded-md shadow'>
                  <a
                    href='mailto:Ramsay.Romero@gmail.com'
                    className='py-3 px-5 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900'
                  >
                    Say Hello
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className='bg-gray-900 py-8'>
          <div className='px-8 text-center text-xs text-white'>
            Created by Ramsay Romero 2021 with Next.js
          </div>
        </footer>
      </div>
    </div>
  );
}
