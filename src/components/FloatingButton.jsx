import React from 'react'
import { LayoutDashboard } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import {Tooltip as ReactTooltip} from 'react-tooltip'

function FloatingButton() {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/dashboard')
    }
  return (
    <div className='floating-button'>
        <button className='floating-button__icon' data-tip="Go to Dashboard" onClick={handleClick}>
            <LayoutDashboard className='icon' />
        </button>
        <ReactTooltip place="top" type="dark" effect="solid" />
    </div>
  )
}

export default FloatingButton
