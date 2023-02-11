import React from 'react'

const SubmitButton = ({submit}) => {
  return (
    <svg onClick={submit} className='buttons submitButton' width="80" height="70" viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="80" height="70" rx="20" fill="#E9E9E9"/>
    <path d="M50 13H56C57.0609 13 58.0783 13.4214 58.8284 14.1716C59.5786 14.9217 60 15.9391 60 17V57C60 58.0609 59.5786 59.0783 58.8284 59.8284C58.0783 60.5786 57.0609 61 56 61H24C22.9391 61 21.9217 60.5786 21.1716 59.8284C20.4214 59.0783 20 58.0609 20 57V17C20 15.9391 20.4214 14.9217 21.1716 14.1716C21.9217 13.4214 22.9391 13 24 13H30" stroke="#000001" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M46 9H34C31.7909 9 30 10.7909 30 13V15C30 17.2091 31.7909 19 34 19H46C48.2091 19 50 17.2091 50 15V13C50 10.7909 48.2091 9 46 9Z" stroke="#000001" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M30 41L38 47L48 31" stroke="#000001" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default SubmitButton