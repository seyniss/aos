import React,{useRef, useState} from 'react'

const InputTracker = () => {
    const renderCount = useRef(0)
    const [text,setText] = useState('')

    renderCount.current+=1

    const handleChange=(e)=>{
        setText(e.target.value)
    }
  return (
    <div>
        <input type="text" value={text} onChange={handleChange} />
        <p>렌더링 횟수 :{renderCount.current} </p>
    </div>
  )
}

export default InputTracker