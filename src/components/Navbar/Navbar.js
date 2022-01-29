import React, { Component } from 'react';
import { MenuItems, MenuItems2 } from "./MenuItems"
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => (
        this.setState({ clicked: !this.state.clicked })
    )

    render() {
        return (
            <nav className="NavbarItems">
                <h3 className='navbar-logo' ><img className='NavbarImg' src="/images/fan logo.png" alt="" /></h3>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' :
                    'nav-menu'}>
                    <div className='nav-menu1'>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </div>
                    <div className='nav-menu2'>
                        {MenuItems2.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </div>

                </ul>
            </nav>
        )
    }
}

export default Navbar