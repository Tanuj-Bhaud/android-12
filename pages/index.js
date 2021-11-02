import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
           <img className="w-10 h-10" src="https://i.pinimg.com/564x/bf/21/3c/bf213c055e91878b3ce99fbcef7d8c36.jpg" alt="" />
            <span className="ml-3 text-xl">Android</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">What is android</a>
            <a className="mr-5 hover:text-gray-900">Android 12</a>
            <a className="mr-5 hover:text-gray-900">Phones & Tablets</a>
            <a className="mr-5 hover:text-gray-900">Entreprise</a>
          </nav>
          <a href="https://icons8.com/icon/82712/search">
          <img src="https://img.icons8.com/material-outlined/50/000000/search.png" />
          </a>
        </div>
      </header>
{/* Hero Section */}
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <p className="font-bold">Android 12</p>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      More Personal, safe and effortless than ever before
       
      </h1>
      <p className="mb-8 leading-relaxed">
      Android 12 delivers even more personal, safe and effortless experiences on your device. Featuring a totally reimagined UI just for you, new privacy features that are designed for your safety and put you in control, and more seamless ways to get right to your gameplay or even switch to a new device.


      </p>
      
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src="https://www.dignited.com/wp-content/uploads/2021/05/Android-12-colors-768x512.jpg"
      />
    </div>
  </div>
</section>

{/* personal */}

<section className=" bg-android-green text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <p className="object-cover font-bold object-center">Personal</p>
    <h1 className=" object-cover object-center title-font sm:text-8xl text-8xl mb-4 font-medium text-gray-900">
      Our most
        <br className="hidden lg:inline-block" />
        personal
        <br className="hidden lg:inline-block" />
        OS yet.
      </h1>
     
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
     
      <p className="mb-8 leading-relaxed">
      Android 12 is our most personal OS ever, featuring dynamic color capabilities that can transform your experience based on your wallpaper and responsive motion that responds to your touch. Even the widgets have been given a facelift, with your favorite people always available right there on your home screen. And with a more spacious redesign, color contrast optimizations and new features to help those with low vision, Android 12 is designed to be accessible for even more users.


      </p>
     
    </div>
  </div>
</section>

{/*  */}

<section className="  text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <p className="object-cover font-bold object-center">Material you</p>
    <h1 className=" object-cover object-center title-font sm:text-7xl text-7xl mb-4 font-medium text-gray-900">
      A boundary-
        <br className="hidden lg:inline-block" />
        pushing
        <br className="hidden lg:inline-block" />
        redesign
      </h1>
     
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
     
      <p className="mb-8 leading-relaxed">
      Android 12 rethinks the entire user interface, from shapes, light and motion, to customizable system colors that can be adapted to match you. Redesigned to be more spacious and comfortable, it’s our most expressive, dynamic and personal OS ever.


      </p>
     
    </div>
  </div>
</section>

<section className="flex items-center justify-center w-full">
<img src="https://lh3.googleusercontent.com/E2YgGv46IOcI6LqY7s_pGSsez9XiGoPmXLOf531ryRKC1AbKr9jdwImNR2YSIy8qLyy4Ir1Lzvv1reyS8DKnDZXF93KMXN6ZfboRixpJ5SavMCa82A=w1063-rw-e365-v1" alt=""/>
</section>

{/* Footer */}

<footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          FOR DEVELOPERS
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          FOR ENTERPRISE
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          FOR THE PRESS
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          THE ECOSYSTEM
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          SUPPORT
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
     
    </div>
  </div>
 
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">
        © 2021 Google
        <a
          href="https://twitter.com/knyttneve"
          className="text-gray-600 ml-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </p>
      <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
      <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
        <a className="text-gray-500">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            />
            <circle cx={4} cy={4} r={2} stroke="none" />
          </svg>
        </a>
      </span>
      </span>
    </div>
  </div>
</footer>



    </div>

    



  )
}
