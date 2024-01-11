import { useState } from 'react'

const Input = ({ taskList, setTaskList }) => {
    const [input, setInput] = useState('')

    const handleAddTask = (e) => {
        e.preventDefault()
        setTaskList([...taskList, input]);
        setInput("");
    }
    return (
        <>
            <form className='flex flex-row items-center gap-3'>
                <input
                    type='text'
                    placeholder='Add a new task'
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    className='ml-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    onClick={handleAddTask}
                >
                    Add
                </button>
            </form>
        </>
    )
}

export default Input
