import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh } from '@fortawesome/free-solid-svg-icons'

export default function Header(props){
    return(
        <div className='header-container'>
            <div className='header-items'>
                <h1 className='header-item'>Gmail</h1>
                <h1 className='header-item'>Imagens</h1>
                <FontAwesomeIcon icon={faTh} className='icon'/>
                <div className='account-circle'>
                    <h1 className='account-txt'>A</h1>
                </div>
            </div>
        </div>
    )
}