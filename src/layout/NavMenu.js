import React, { useEffect, useRef, useState } from 'react';
import '../css/nav.css';
import { Link } from 'react-router-dom';
import logo from '../img/logonav.png';
import logoMenu from '../img/menu_logo.png';
import AOS from 'aos';

const NavMenu = () => {
  useEffect(() => {
    AOS.init();
  });
  const menuBtn = useRef(null);
  const bar1 = useRef(null);
  const bar2 = useRef(null);
  const bar3 = useRef(null);

  const [sh2, setSh2] = useState('');

  const closeMenu = () => {
    setOpen(false);
    menuBtn.current.checked = false;
    bar3.current.classList.remove('hidden');
    bar2.current.classList.remove('rotate2');
    bar1.current.classList.remove('rotate1');

    setSh2('');
  };

  const openMenu = () => {
    if (!isOpen) {
      bar3.current.classList.add('hidden');
      bar2.current.classList.add('rotate2');
      bar1.current.classList.add('rotate1');
      setOpen(true);
      menuBtn.current.checked = true;
    } else {
      bar3.current.classList.remove('hidden');
      bar2.current.classList.remove('rotate2');
      bar1.current.classList.remove('rotate1');
      setOpen(false);
      menuBtn.current.checked = false;
    }
  };

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <nav className='navbar-frd'>
        <Link className='nav-logo' to='/'>
          <img src={logo} alt='CramaFerdi' className='nav-logo-img' />
          <span>Crama Ferdi</span>
        </Link>
        <input
          ref={menuBtn}
          type='checkbox'
          name='Hamburger'
          className='hamburger-checkbox'
          onClick={() => {
            console.log();
          }}
        />
        <div className='nav-menu'>
          <img src={logoMenu} alt='Crama Ferdi' className='menu-logo' />
          <Link onClick={closeMenu} to='/'>
            Acasă
          </Link>
          <Link onClick={closeMenu} to='/vinuri' id={sh2}>
            Vinuri
          </Link>
          <Link onClick={closeMenu} to='/vizite-si-degustari'>
            Vizite şi degustări
          </Link>
          <Link onClick={closeMenu} to='/club'>
            Club
          </Link>
          <Link onClick={closeMenu} to='/galerie'>
            Galerie
          </Link>
          <Link onClick={closeMenu} to='/cazare'>
            Cazare
          </Link>
          <Link onClick={closeMenu} to='/contact'>
            Contact
          </Link>
        </div>
      </nav>
      <div className='hamburger-btn' onClick={openMenu}>
        <div className='bar1 bar' ref={bar1}></div>
        <div className='bar2 bar ' ref={bar2}></div>
        <div className='bar3 bar' ref={bar3}></div>
      </div>
    </>
  );
};

export default NavMenu;
