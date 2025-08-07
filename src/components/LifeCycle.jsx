import React, { useState } from 'react'

const LifeCycle = () => {
    const [count, setCount]=useState(0)

    useInsertionEffect(()=>{
        console.log('마운트 됨')
        return ()=>{
            // console.log('언마운트 됨')
        }
    },[])


  return (
    <div>
        <p>클릭된 수 : {count}</p>

        <button onClick={()=>setCount(prev=>prev+1)}>클릭</button>
    </div>
  )
}

export default LifeCycle