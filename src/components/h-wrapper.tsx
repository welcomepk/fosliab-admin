import React from 'react'

const HWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='container mx-auto px-4'>
            {children}
        </div>
    )
}

export default HWrapper