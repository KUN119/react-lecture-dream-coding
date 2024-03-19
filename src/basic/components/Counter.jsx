import React, { useState } from 'react'

export default function Counter({ totalCount, setTotalCount}) {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setTotalCount((prev) => prev + 1)
        setCount((prev) => prev + 1)
    }

    return (
        <>
            <div>
                <span onClick={handleClick} className='button'>🤪</span>
                <span>{`${count}/${totalCount}`}</span>
            </div>
        </>
        
    )
}