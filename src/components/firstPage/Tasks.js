import React from 'react'
import "./task.css"

const Tasks = () => {
  return (
    <div>
      <div className='section'>TODAY'S TASKS</div>
      <div className='task_card_block'>
        <div className='task_card'>
          <div className='task_content'>
            <label className="container">
              <input type="checkbox" className='task_checkbox'/>
              <div className="checkmark"></div>
            </label>
            <p className="task_tasks">Daily meeting with team</p>
          </div>
        </div>

        <div className='task_card'>
          <div className='task_content'>
            <label className="container">
              <input type='checkbox' checked='checked' className='task_checkbox'/>
              <div className="checkmark"></div>
            </label>
            <p className="task_tasks">Pay for rent</p>
          </div>
        </div>

        <div className='task_card'>
          <div className='task_content'>
            <label className="container">
              <input type='checkbox' className='task_checkbox'/>
              <div className="checkmark"></div>
            </label>
            <p className="task_tasks">Check emails</p>
          </div>
        </div>

        <div className='task_card'>
          <div className='task_content'>
            <label className="container">
              <input type='checkbox' className='task_checkbox'/>
              <div className="checkmark"></div>
            </label>
            <p className="task_tasks">Lunch with Emma</p>
          </div>
        </div>

        <div className='task_card'>
          <div className='task_content'>
            <label className="container">
              <input type='checkbox' className='task_checkbox'/>
              <div className="checkmark"></div>
            </label>
            <p className="task_tasks">Meditation</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tasks