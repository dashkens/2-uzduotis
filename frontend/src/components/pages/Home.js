import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import allBG from '../../img/allBG.png'

const Home = () => {
    return (
    <div className='content-wrapper'>
        <Header title='This is a Home Page'/>  
        <Link to='/boardgames' className="boardgames-link-wrapper">
            <div className='bg-list-wrapper'>
                <div className="bg-list-text"><h2>All Board Games</h2>
                <p>Here you can find the list of all board games</p>
                </div>
                <div className='bg-list-img'>
                <img src={allBG} alt="All boardgames picture" />
                </div>
            </div>
        </Link>
        {/* <Link to='/ddd' className='boargames-link-wrapper'>
        <div className='bg-list-wrapper'>
                <div className="bg-list-text"><h2>All boardgames</h2>
                <p>Here you can find the list of all boardgames</p>
                </div>
                <div className='bg-list-img'>
                <img src={allBG} alt="All boardgames picture" />
                </div>
            </div>
        </Link>
        <Link to='/ddd' className='boargames-link-wrapper'>
        <div className='bg-list-wrapper'>
                <div className="bg-list-text"><h2>All boardgames</h2>
                <p>Here you can find the list of all boardgames</p>
                </div>
                <div className='bg-list-img'>
                <img src={allBG} alt="All boardgames picture" />
                </div>
            </div>
        </Link> */}

    </div>
    )
}

export default Home
