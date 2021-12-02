import React, {useEffect, useState} from 'react';
import s from './Header.module.scss';
import { BiMenuAltRight, BiUnderline } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from './../../image/logo-werdevs.svg';




const Header = () => {
    
    const [menuOpen, setMenuOpen] = useState(true);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,

    }); 

    useEffect(()=>{
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,

            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(()=> {
        if (size.width > 768 && menuOpen){
            setMenuOpen(false);
           
        }
    },[size.width, menuOpen])

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);

    };


    

    return (
        
        <header className={s.header}>
            <div className={s.header__content}>
                
                <Link to="/" className={s.header__content__logo} >
                 <img src={logo}></img>
                    </Link>
           
            <nav className={`${s.header__content__nav} ${menuOpen && size.width < 768 ? s.isMenu : ""}`}>
                <ul>
                    <li>
                        <Link to="/" exact onClick={menuToggleHandler}>HOME</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={menuToggleHandler} >ABOUT US</Link>
                    </li>
                </ul>
            </nav>
            <div className={s.header__content__toggle} >
            {!menuOpen ? <BiMenuAltRight onClick={menuToggleHandler}/> : <AiOutlineClose onClick={menuToggleHandler}/>}
                 </div>
            </div>
        </header>
       
    );
    
}


export default Header;
