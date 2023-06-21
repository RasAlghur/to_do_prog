import React from 'react'
import { IoMdAddCircle } from 'react-icons/io'
import "./addtask.css"

const Addtasks = () => {
  return (
    <div>
      <div className='addTask_btn'>
        <IoMdAddCircle size={70}/>
      </div>
    </div>
  )
}

export default Addtasks