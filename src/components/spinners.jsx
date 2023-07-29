import React from 'react'

export const Spinners = ({position}) => {
  return (
    <div className={`spinners position-absolute ${position}`}>
        <img src="/fj1.png" alt="spinner" className='' />
    </div>
  )
}

export const FloatBtn = () => {
  return (
    <a href='#' className="fl-btn position-fixed d-flex p-3 rounded-circle bottom-0 end-0 mx-4 my-4 shadow">
        <img src="claw.png" alt="claw" className='img-fluid'/>
    </a>
  )
}
