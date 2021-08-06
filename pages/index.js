import Header from '../components/header';
import Image from 'next/image';
import Head from 'next/head';
import { Fade } from 'react-awesome-reveal';

export default function Home() {
  return (
    <div className='bg-white'>
      <Head>
        <title>Ramsay Romero</title>
        <link rel='shortcut icon' href='/logo-black.png' />
        <meta
          name='description'
          content='Ramsay Romero is a front end web developer based in Los Angeles, CA specializing in React'
        />
        <meta
          property='og:image'
          content='https://ramsayromero.com/images/IMG_0681.JPG'
          key='ogimage'
        />
        <meta
          property='twitter:image'
          content='https://ramsayromero.com/images/IMG_0681.JPG'
          key='ogimage'
        />
      </Head>
      <div className='relative overflow-hidden'>
        <Header />
        <main>
          <div className='py-8 bg-gray-900 sm:py-16'>
            <Fade>
              <div className='mx-auto max-w-screen-lg px-8 md:px-16 lg:grid lg:grid-cols-3'>
                <div className='col-span-2 lg:mt-12'>
                  <span className='text-cyan-500 block'>Hi, my name is</span>
                  <h1 className='mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
                    <span className='block'>Ramsay Romero.</span>
                    <span className='mt-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-500 block'>
                      I build react apps.
                    </span>
                  </h1>
                  <p className='mt-3 md:w-3/4 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                    I'm a front end developer based in Los Angeles, CA
                    specializing in building elegant user interfaces using React
                    and TypeScript.
                  </p>
                  <div className='mt-10 sm:mt-12'>
                    <a
                      href='#projects'
                      className='py-3 px-5 rounded-md shadow bg-gradient-to-r from-amber-400 to-red-500 text-white font-medium hover:from-amber-500 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 focus:ring-offset-gray-900'
                    >
                      View my work
                    </a>
                  </div>
                </div>
                <div className='hidden lg:block aspect-w-5 aspect-h-8 col-span-1'>
                  <Image
                    quality='70'
                    className='rounded-xl w-full object-cover'
                    layout='fill'
                    src='/images/IMG_0681.JPG'
                    alt=''
                  />
                </div>
              </div>
            </Fade>
          </div>

          <section id='projects' className='bg-gray-900 py-16'>
            <div className='mx-auto max-w-7xl px-8 md:px-16 lg:px-24'>
              <div className='py-8'>
                <h2 className='text-white text-center text-5xl'>Projects</h2>
              </div>
              <div className='flex flex-col mt-8 md:flex-row md:space-x-6'>
                <div className='w-full md:w-auto'>
                  <Fade direction='left'>
                    <Image
                      loading='eager'
                      quality='40'
                      src='/images/screenshot-localhost_3000-2021.06.06-13_59_35.png'
                      alt='Crimp Advisor'
                      width={900}
                      height={400}
                      objectFit='cover'
                      objectPosition='top'
                      className='rounded-md'
                    />
                  </Fade>
                </div>
                <div className='w-full md:w-1/2 text-white md:text-right'>
                  <h3 className='text-3xl mt-8 md:mt-0'>Crimp Advisor</h3>
                  <Fade direction='right'>
                    <div className='bg-gray-800 p-6 mt-4 rounded-md'>
                      <p>
                        A fullstack rock climbing journal application built with
                        Next.js, TypeScript, Prisma, Postgres, React Query and
                        TailwindCSS. Features authentication with NextAuth and
                        Auth0, uses the Google Maps and Google Places api and
                        uses Recharts for data visualization. Users can create
                        and update information about rock climbs and climbing
                        areas, and see climbing activity posted by other users.
                      </p>
                    </div>
                  </Fade>
                  <div className='mt-2'>
                    <ul className='flex space-x-4 justify-end'>
                      <li>Next.js</li>
                      <li>TypeScript</li>
                      <li>Postgresql</li>
                    </ul>
                  </div>
                  <div className='mt-5 flex space-x-4 justify-end'>
                    <a
                      className='inline-block border border-white rounded-lg py-2 px-3 hover:bg-gray-800'
                      href='https://github.com/RamsayRomero/crimp-advisor'
                    >
                      GitHub Repo
                    </a>
                    <a
                      className='inline-block border border-white rounded-lg py-2 px-3 hover:bg-gray-800'
                      href='https://crimpadvisor.com'
                    >
                      Live site
                    </a>
                  </div>
                </div>
              </div>
              <div className='mt-12 flex flex-col md:flex-row md:space-x-6'>
                <div className='w-full md:w-1/2 text-white'>
                  <h3 className='text-3xl mt-8 md:mt-0'>Climbing Weather</h3>
                  <Fade direction='left'>
                    <div className='bg-gray-800 p-6 mt-4 rounded-md'>
                      <p>
                        This is an app that uses data from the Weatherbit API to
                        provide weather information for my favorite rock
                        climbing areas. It taught me how to fetch data and
                        update state with the useEffect hook, persist user
                        settings with local storage, and to create a responsive
                        layout where each column has independent scroll
                        behavior.
                      </p>
                    </div>
                  </Fade>
                  <div className='mt-2'>
                    <ul className='flex space-x-4'>
                      <li>React</li>
                      <li>Axios</li>
                      <li>Tailwind</li>
                    </ul>
                  </div>
                  <div className='mt-5 flex space-x-4'>
                    <a
                      className='inline-block border border-white rounded-lg py-2 px-3 hover:bg-gray-800'
                      href='https://github.com/RamsayRomero/condies'
                    >
                      GitHub Repo
                    </a>
                    <a
                      className='inline-block border border-white rounded-lg py-2 px-3 hover:bg-gray-800'
                      href='https://jovial-goldberg-ee1b37.netlify.app/'
                    >
                      Live site
                    </a>
                  </div>
                </div>
                <div className='w-full md:w-3/4'>
                  <div className='rounded-md overflow-hidden aspect-w-11 aspect-h-5'>
                    <Fade direction='right'>
                      <Image
                        loading='eager'
                        quality='40'
                        src='/images/screenshot-jovial-goldberg-ee1b37.netlify.app-2021.04.01-14_18_26.png'
                        alt='Climbing Weather'
                        layout='fill'
                        className='rounded-md object-cover'
                      />
                    </Fade>
                  </div>
                </div>
              </div>
              <div className='flex flex-col mt-20 md:flex-row md:space-x-6 md:mt-12'>
                <div className='w-full md:w-auto'>
                  <Fade direction='left'>
                    <Image
                      loading='eager'
                      quality='40'
                      src='/images/screenshot-mystifying-mcclintock-45a916.netlify.app-2021.03.24-17_34_47.png'
                      alt='Windbnb'
                      width={640}
                      height={400}
                      objectFit='cover'
                      objectPosition='top'
                      className='rounded-md'
                    />
                  </Fade>
                </div>
                <div className='w-full md:w-1/2 text-white md:text-right'>
                  <h3 className='text-3xl mt-8 md:mt-0'>Windbnb</h3>
                  <Fade direction='right'>
                    <div className='bg-gray-800 p-6 mt-4 rounded-md'>
                      <p>
                        This was my solution to a coding challenge from the site
                        devchallenges.io which provided a complete design on
                        figma and no instructions or limitations on how to
                        create the finished app. Solving this problem taught me
                        how to take a design and produce an identical and
                        functional react app. It taught me to use form elements
                        to dynamically filter data in a responsive way.
                      </p>
                    </div>
                  </Fade>
                  <div className='mt-2'>
                    <ul className='flex space-x-4 justify-end'>
                      <li>React</li>
                      <li>Redux</li>
                      <li>Tailwind</li>
                    </ul>
                  </div>
                  <div className='mt-5 flex space-x-4 justify-end'>
                    <a
                      className='inline-block border border-white rounded-lg py-2 px-3 hover:bg-gray-800'
                      href='https://github.com/RamsayRomero/windbnb'
                    >
                      GitHub Repo
                    </a>
                    <a
                      className='inline-block border border-white rounded-lg py-2 px-3 hover:bg-gray-800'
                      href='https://mystifying-mcclintock-45a916.netlify.app/'
                    >
                      Live site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id='about' className='py-16 bg-gray-900'>
            <Fade>
              <h2 className='text-xl mb-6 text-white text-center font-semibold uppercase tracking-wider'>
                About me
              </h2>
              <div className='px-8 md:px-16 lg:grid lg:grid-cols-2 mx-auto max-w-screen-lg gap-12'>
                <div className=''>
                  <div className='text-white'>
                    <p className='mt-3 text-lg'>
                      Hello! I'm Ramsay, a front end web developer based in Los
                      Angeles, CA.
                    </p>
                    <p className='mt-3 text-lg'>
                      I enjoy using React to create beautiful and responsive web
                      applications with elegent and intuitive user experiences.
                    </p>
                    <p className='mt-3 text-lg'>
                      I have a drive for continuous learning and as a self
                      taught developer, I'm highly self-motivated and
                      self-sufficient.
                    </p>
                  </div>
                </div>
                <div className='text-white'>
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
                        <span>TypeScript</span>
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
                        <span>Next.js</span>
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
                    </ul>
                  </div>
                </div>
              </div>
            </Fade>
          </section>

          <section id='contact' className='bg-gray-900 py-16'>
            <Fade>
              <div className='mx-auto px-8 md:px-0 md:w-1/2 text-center py-10'>
                <h2 className='mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl'>
                  Get in touch
                </h2>
                <p className='mt-3 text-lg text-gray-300'>
                  I'm currently looking for front end development opportunities.
                  If you have any questions please reach out and I'll try my
                  best to get back to you quickly.
                </p>
                <div className='mt-8'>
                  <div className='inline-flex rounded-md shadow'>
                    <a
                      href='mailto:Ramsay.Romero@gmail.com'
                      className='py-3 px-5 rounded-md shadow bg-gradient-to-r from-amber-500 to-red-600 text-white font-medium hover:from-amber-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 focus:ring-offset-gray-900'
                    >
                      Say Hello
                    </a>
                  </div>
                </div>
              </div>
            </Fade>
          </section>
        </main>
        <footer className='bg-gray-900 py-8'>
          <div className='px-8 text-center text-xs text-cyan-500'>
            Created by Ramsay Romero 2021 with Next.js
          </div>
        </footer>
      </div>
    </div>
  );
}
