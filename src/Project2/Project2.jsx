import { useState } from 'react'
import Input from '../Components/Input'
import Board from '../Components/Board'
import { useEffect } from 'react'


function Project2() {
    const [taskList, setTaskList] = useState([]);
    const [loaded, setLoaded] = useState(false);
    //console.log(taskList)
    useEffect(() => {
        const storedTaskList = JSON.parse(localStorage.getItem('taskList'));
        if (storedTaskList) {
            setTaskList(storedTaskList);
        }
        setLoaded(true);
    }, []);
    useEffect(() => {
        if (loaded) {
            localStorage.setItem('taskList', JSON.stringify(taskList));
        }
    }, [taskList, loaded]);
    return (
        <>
            <div className='flex flex-col items-center justify-center py-8'>
                <h1>TO DO LIST</h1>
                <Input taskList={taskList} setTaskList={setTaskList} />
            </div>
            <div className='flex flex-col gap-4 sm:grid sm:grid grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12'>
                {taskList.map((taskItem, index) => (
                    <Board
                        key={index}
                        task={taskItem} />
                ))}
            </div>
        </>
    )
}
export default Project2;
