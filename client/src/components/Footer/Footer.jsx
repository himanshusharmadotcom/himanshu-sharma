import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <div className="bg-gradient-to-b from-primary to-white border-t border-gray-300">
            <div className="container">
                <div className='flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 py-4'>
                    <div>
                        Copyright © {currentYear}. All Rights Reserved.
                    </div>
                    <div>
                        Designed with a cup of ☕
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer