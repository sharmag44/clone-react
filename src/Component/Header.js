import React from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
        alt="logo"
      />
      <TextField
        id="outlined-basic"
        label={<SearchIcon />}
        variant="outlined"
        size="small"
      />
      <nav className="header__nav">
        <ul>
          <li>
            <HomeIcon style={{fontSize:"30px"}}/>
          </li> 
          <li>
            <MoveToInboxIcon style={{fontSize:"30px"}} />
          </li>
          <li>
            <ExploreIcon style={{fontSize:"30px"}} />
          </li>
          <li>
            <FavoriteBorderIcon/>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
