import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

import { Route, Routes, Link } from 'react-router-dom';

import Intro from './components/Intro';
import Home from './components/Home';
import First from './components/first';
import Then from './components/then';
import Images from './components/Images';
import Hidden from './components/Hidden';
import Secret from './components/Secret';

export default function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="main">
      <div className='app'>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <MenuIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <Link to={'/'}>
            <MenuItem onClick={handleClose}>rien</MenuItem>
          </Link>
          <Link to={'/home'}>
            <MenuItem onClick={handleClose}>Step 1</MenuItem>
          </Link>
          <Link to={'/first'}>
            <MenuItem onClick={handleClose}>First</MenuItem>
          </Link>
          <Link to={'/then'}>
            <MenuItem onClick={handleClose}>Then</MenuItem>
          </Link>
          <Link to={'/images'}>
            <MenuItem onClick={handleClose}>Images</MenuItem>
          </Link>
          <Link to={'/hidden'}>
            <MenuItem onClick={handleClose}>Hidden</MenuItem>
          </Link>
          <Link to={'/secret'}>
            <MenuItem onClick={handleClose}>Secret</MenuItem>
          </Link>
        </Menu>

        <Routes>
          <Route
            exact path='/'
            element={
              <Intro />
            }
          >
          </Route>
          <Route
            exact path='/home'
            element={
              <Home />
            }
          >
          </Route>
          <Route
            exact path='/first'
            element={
              <First />
            }
          >
          </Route>
          <Route
            exact path='/then'
            element={
              <Then />
            }
          >
          </Route>
          <Route
            exact path='/images'
            element={
              <Images />
            }
          >
          </Route>
          <Route
            exact path='/hidden'
            element={
              <Hidden />
            }
          >
          </Route>
          <Route
            exact path='/secret'
            element={
              <Secret />
            }
          >
          </Route>
        </Routes>
      </div>
    </div>
  );
}
