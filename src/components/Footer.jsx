import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants/constants";

const Footer = () => {
  const menu = [
    {
      id: 1,
      title: "Client Services",
      subMenu: [
        {
          id: 1,
          title: "Project Request",
        },
        {
          id: 2,
          title: "Client Login",
        },
        {
          id: 3,
          title: "Print Services",
        },
      ],
    },
    {
      id: 2,
      title: "Follow Us",
      subMenu: [
        {
          id: 1,
          title: "Facebook",
         
        },
        {
          id: 2,
          title: "Instagram",
        },
        {
          id: 3,
          title: "Twitter",
        },
      ],
    },
    {
      id: 3,
      title: "Contact us",
      subMenu: [
        {
          id: 1,
          title: "Toll Free: (877)833-4635",
        },
        {
          id: 2,
          title: "West Coast:(424)253-5282",
        },
        {
          id: 3,
          title: "Email: hellow@gmail.com",
        },
      ],
    },
   
  ];
  return ( 
  <div className="bg-gray-100 border-white">
  <div className=" max-w-screen-xl pt-10 ">
    <div className="grid grid-cols-2 lg:grid-cols-4 text-center
    gap-12"
    >
<img src={logo} className="w-28 h-28 m-3" />
      {menu.map(({ id, title, subMenu }) => (
        <div key={id} className="">
          <h1 className="text-lg font-bold text-black font-poppins">{title}</h1>
          <ul className="mt-1">
            {subMenu.map(({ id, title, link }) => (
              <li key={id}>
                <a href={link} className="text-gray-600 font-poppins
                hover:text-secondary
                ">{title}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    
  </div>
  <div className="flex flex-col justify-center items-center text-center  font-poppins
  bg-gray-100
  p-10 mt-20 bg-background 
  "
  style={{
    borderBottom:'2px',
  
    borderWidth:'1px'
  }}
  >
      <h1 className=" text-gray-500 font-sm font-poppins">
        © 2021-2022 All rights reserved | Build with<span className="text-secondary"> ❤ </span>by{" "}
        <span className="">
          abc{" "}
        </span>
      </h1>
    </div>
</div>)
}


export default Footer;