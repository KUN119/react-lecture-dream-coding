import React, { useState } from 'react'
import Products from './Products'

export default function AppProducts() {
    const [showProdutcs, setShowProdutcs] = useState(true)

    return (
        <div>
            {showProdutcs && <Products />}
            <button onClick={() => setShowProdutcs((show) => !show)}>Toggle</button>
        </div>
    )
}
