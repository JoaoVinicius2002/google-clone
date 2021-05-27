import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faPen } from '@fortawesome/free-solid-svg-icons'

export default function Footer(){
    return(
        <div className='footer-container'>
            <div className='footer-content'>
                <div className='content-left'>
                    <FontAwesomeIcon icon={faLink} className='link-icon'/>
                    <h1 className='img-text'>Foto de NASA Image Library</h1>
                </div>
                <div className='content-right'>
                    <FontAwesomeIcon icon={faPen} className='pen-icon'/>
                </div>
            </div>
        </div>
    )
}