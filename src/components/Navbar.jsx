import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa'
import { useNavigate} from 'react-router-dom';
import './style.css';
const Navbar = ({color,click,setColor,setClick}) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token")
  const newToken = JSON.parse(token)
  const handleClick = () => setClick(!click)
    const handleClick2 = (i) =>{
    if(i==='Login') {
      navigate("/signin")
    }
    if(i==='Discussion') {
      navigate("/dis")
    }
    if(i==='Profile') {
      navigate("/testProfile")
    }
    }
    const changeColor = () =>{
        if(window.scrollY>=90){
        setColor(true)
      
        }
        else {
            setColor(false)
        }
    }
    const res = localStorage.getItem('Verify')
    window.addEventListener('scroll', changeColor)
    const links = [
        {
          id: 1,
          link: "home",
        },
        {
          id: 2,
          link: "projects",
        },
        {
          id: 3,
          link: "about",
        },
        {
          id: 4,
          link: "contact",
        },
        {
          id: 5,
          link: newToken?.value? "Profile":"Login"
        },
        newToken?.value &&
        {
          
          id: 6,
          link: "Discussion",
        },
       
      ];

  return (
    <div className={color? 'header header-bg ' : ' header'}>
    <nav className='navbar font-poppins '>
    <div>
    <h1 className={`${!color && 'lg:text-white'}
     font-bold tracking-widest text-xl text-black `}>HELPING HANDS</h1>
  </div>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={25} style={{ color: 'black' }} />)
                : (<FaBars size={25} style={{ color: 'black' }} />)}

        </div>
        <ul className={click ? "nav-menu active"  : " nav-menu"}>
          
            {links?.map((i)=>

            <li
            className={`p-4  ${color? 'text-black ' : 'text-white '}
            ${color? 'hover:text-black ' : 'hover:font-bold'}
              font-semibold  uppercase text-sm duration-200 cursor-pointer`}>
          <button
          className="uppercase"
         onClick={()=> {setClick(!click)
          console.log(i.link)
          handleClick2(i.link)
        }}
          style={{
            color : color ? 'black' :'white'
          }}
          activeClass='active'
          smooth spy to={i?.link}>
            {i?.link}
            </button>
            
            </li>
            )}
   
        </ul>
    </nav>
</div>
  );
};

export default Navbar;