import React from 'react'
import CreateIcon from '@material-ui/icons/Create';
import { IconButton } from '@material-ui/core';
import './AppBadge.css'

function AppBadge() {
  return (
    <header className='App-header'>
           <IconButton 
                className='icon__header'
                edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
               
                </IconButton>
                <div className='text__ribbon'>
          <h3 className='text__embossed'>Firebase | React</h3>
          </div>
      </header>
  )
}

export default AppBadge