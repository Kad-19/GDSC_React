import React from 'react'
import './Status.css'

const Status = ({statusName, index, changeStatus}) => {
    
  return (
    <button className='status_btn' onClick={() => changeStatus(index, statusName)} >
        {statusName}
    </button>
  )
}

export default Status