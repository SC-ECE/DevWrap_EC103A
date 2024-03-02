import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Header = () => {

    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false);

    return (
        <div className="header">
            <img src={Logo} alt="" className='logo' />

            {(menuOpened === false && mobile === true) ? (
                < div
                    style={{
                        backgroundColor: 'var(--appColor',
                        padding: '0.5rem',
                        borderRadius: '5px'
                    }}

                    onClick={() => setMenuOpened(true)}
                >
                    <img src={Bars} alt="" style={{ width: '1.5rem', height: '1.5rem' }} />
                </div>
            ) :
                (<ul className='header-menu'>
                    <li >
                        <Link
                            onClick={() => setMenuOpened(false)}
                            activeClass='active'
                            to='home'
                            span={true}
                            smoth={true}
                        >information
                        </Link>
                    </li>
                    <li onClick={() => setMenuOpened(false)}>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to='programs'
                            span={true}
                            smoth={true}
                        >Programs</Link>
                    </li>
                    <li onClick={() => setMenuOpened(false)}>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to='reasons'
                            span={true}
                            smoth={true}
                        >Prices</Link>
                    </li>
                    <li onClick={() => setMenuOpened(false)}>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to='plans'
                            span={true}
                            smoth={true}
                        >Plans</Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to='testimonials'
                            span={true}
                            smoth={true}
                        >contact us</Link>
                    </li>
                </ul>
                )}

        </div >
    );
}

export default Header;