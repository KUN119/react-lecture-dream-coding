import React, { useEffect, useState } from 'react'
import Counter from './Counter'

export default function TotalCounter() {
    const [totalCount, setTotalCount] = useState(0)
    const [emoji, setEmoji] = useState('🤪')

    useEffect(() => {
      if(totalCount > 10) {
        setEmoji('🤬')
      }
    }, [totalCount])
    

    return (
        <div className='counter'>
            <span>TotalCount: </span>
            <span>{totalCount} {emoji}</span>
            <Counter
                totalCount={totalCount}
                setTotalCount={setTotalCount}
            />
            <Counter
                totalCount={totalCount}
                setTotalCount={setTotalCount}
            />
        </div>
    )
}
