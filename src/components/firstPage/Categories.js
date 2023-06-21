import React from 'react'
import "./myInput.css"

const Categories = () => {
  return (
    <div>
      <div className='section'>CATEGORIES</div>
      <div className='categ_card_flex'>
        <div className='categ_card'>
          <div className='categ_content'>
            <p className="categ_tasks">40 tasks</p>
            <h2 className="categ_categ">Business</h2>
            <div class="categ_progressbar">
              <div className=""></div>
            </div>
            <p className='categ_comp'>You have completed 24 tasks</p>
          </div>
        </div>

        <div className='categ_card'>
          <div className='categ_content'>
            <p className="categ_tasks">16 tasks</p>
            <h2 className="categ_categ">Personal</h2>
            <div class="categ_progressbar2">
              <div className=""></div>
            </div>
            <p className='categ_comp'>You have completed 7 tasks</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories