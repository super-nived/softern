import React from 'react'
import './Header.css'
import PIC from '../../asset/Head.png'
import { Link} from 'react-router-dom';
function Header() {
    return (
        <header>
            <div className="container header-container">
                <div className="header-left">
                <h1 className='animate' >
                    <span>S</span>
                    <span>o</span>
                    <span>F</span>
                    <span>t</span>
                    <span>E</span>
                    <span>n</span>
                    <br></br>
                    <span>T</span>
                    <span>e</span>
                    <span>C</span>
                    <span>h</span>
                    <span>N</span>
                    <span>o</span>
                    <span>L</span>
                    <span>o</span>
                    <span>i</span>
                    <span>E</span>
                    <span>s</span>
                    
                    </h1>
                    <p className='large-p'>
                        The top-notch solutions and services we offer are information technology, infrastructure
                        services.Our clients are invariably delighted with the kind of service we provide to them.
                        The team would provide best support for your staff at the course of product

                        implementation.

                    </p>
                    <p className='small-p' >
                        The top-notch solutions and services we offer are information technology, infrastructure
                        services.
                    </p>
                    <a href='#' className='btn btn-primary'><Link to='/course'>get</Link></a>
                </div>
                <div className="header-right">
                    <div className="header-image">
                        <img src={PIC} alt="" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header