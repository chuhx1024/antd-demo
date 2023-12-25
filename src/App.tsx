import { useState } from 'react'
import './App.css'
import { Button } from 'antd'
import { Divider } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, addToNum } from '@/store/modules/counterStore'
function App() {
    const [count0, setCount0] = useState(0)

    const counterState = useSelector((state: any) => state.counter)

    const Dispath = useDispatch()
    const addCounter = () => {
        Dispath(increment())
    }
    const delCounter = () => {
        Dispath(decrement())
    }
    const addToNumCounter = (num: number) => {
        Dispath(addToNum(num))
    }

    return (
        <div className="app">
            <div>{count0}</div>
            <button onClick={() => setCount0((count0) => count0 + 1)}>count is {count0}</button>
            <Divider plain>Text</Divider>
            <div>{counterState.count}</div>
            <Button type="primary" onClick={addCounter}>
                Button+
            </Button>
            <Button type="primary" onClick={delCounter}>
                Button-
            </Button>
            <Button
                type="primary"
                onClick={() => {
                    addToNumCounter(10)
                }}
            >
                button+10
            </Button>
            <Button
                type="primary"
                onClick={() => {
                    addToNumCounter(20)
                }}
            >
                button+20
            </Button>
        </div>
    )
}

export default App
