import React, { Component } from 'react'
import PropTypes from 'prop-types'
import loading from './loading.gif'
const Spinner = ()=> {



    return (
      <div className='text-center'>

        <img src={loading} alt="loading" />
        
      </div>
    )
  
}

export default Spinner
