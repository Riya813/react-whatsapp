import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import logo from ''
import logo from 'images/1.avif'
import "./style.css"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex'>
    <aside className='aside-box'>
      <div className='aside-header margin flex-center'>
        <img src={logo} alt="profile-pic"/>
      </div>
      <div className='aside-content'>
        <div className='aside-search-bar flex-center'>
          <input type="text" />
        </div>
        <div className='aside-content-div margin flex-center'>
          <img src={logo} alt="profile-pic"/>
          <p>Hey</p>
        </div>
      </div>
    </aside>
    <main className='main-box'>
      <div className='main-header margin flex-center'>
        <img src={logo} alt="profile-pic"/>
        <h1>Website Name</h1>
      </div>
      <div className='main-content margin'>
        <h1>Bye</h1>
        {/* <FontAwesomeIcon icon={icon({name: 'user-secret'})} /> */}
        {/* <FontAwesomeIcon icon={icon({name: 'coffee', style: 'regular'})} /> 
        <FontAwesomeIcon icon={icon({name: 'coffee', family: 'sharp', style: 'solid'})} /> 
        <FontAwesomeIcon icon={icon({name: 'twitter', style: 'brands'})} />  */}
      </div>
    </main>
    </div>
    </>
  )
}