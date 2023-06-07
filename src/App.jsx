import { useState } from 'react'
import logo from './images/1.avif'
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function App() {

  return (
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
  )
}

export default App
