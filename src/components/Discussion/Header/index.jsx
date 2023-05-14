import React, {useEffect} from 'react'
import "./css/index.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import styles from '../../../style';
import { Link } from "react-router-dom";
import { logo } from '../../../assets';
import { useAuth } from '../../../contexts/AuthContext';
import { useState } from 'react';
function Header() {
  const {searchedQuestion, setSearchQuestion} = useAuth()
  return (
    <header>
      <div className="header-container w-full">
        <div className="header-left">
          <Link to="/">
            <img
              src={logo}
              className="w-10 h-10"
              alt="logo"
            />
          </Link>
          {/* <a href="/">
            
          </a> */}
        </div>
        <div className="header-middle">
          <div className="header-search-container">
            <div  class="w-full px-3">
              <div class="relative">
              
                <label htmlFor="search" className="sr-only">
                Search
                </label>
                <input
                  id="search"
                  name="search"
                  required
                  value={searchedQuestion}
                  className={`${styles.inputauth}`}
                  placeholder="Search"
                  onChange={(event)=>setSearchQuestion(event.target.value)}
                />
                
              <span class="absolute inset-y-0 right-0 flex items-center pr-2">
        <div 
        type='none'
        class="p-1 focus:outline-none focus:shadow-outline"
        >
     <SearchIcon  />
        </div>
      </span>
   
              </div>
              </div>
          </div>
        </div>
        <div className="header-right">
          <div className="header-right-container">
          
            <div className='p-5 sm:hidden  flex flex-1 justify-end items-center" '>

            <SearchIcon  />
            </div>

            <Avatar
              style={{
                cursor: "pointer",
              }}
             
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
