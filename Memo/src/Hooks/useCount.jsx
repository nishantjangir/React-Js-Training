import React, { useState } from 'react'

const useCount = () => {

    const [count, setCount] = useState(0);

    const increaseOne = () => {
        setCount(count + 1)
    }
    const increaseTwo = () => {
        setCount(count + 2)
    }
    const decreaseOne = () => {
        setCount(count - 1)
    }
    const decreaseTwo = () => {
        setCount(count - 2)
    }

    return [count , increaseOne , increaseTwo , decreaseOne , decreaseTwo]
}

export default useCount