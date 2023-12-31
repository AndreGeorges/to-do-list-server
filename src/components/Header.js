import React from 'react'
import Button from './Button'

const Header = ({ onAdd, showAdd }) => {


  return (

    <header className='header'>
      <h1>To Do List</h1>
      <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'close' : 'add'}
        onClick={onAdd} />

    </header>
  )
}

export default Header