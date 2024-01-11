const Board = ({ task }) => {
    return (
        <div>
            <div className='max-w-lg flex flex-row items-center justify-center border p-10'>
                <p>{task}</p>
                <button className="ml-8 bg-red-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">Delete</button>
            </div>
        </div>
    )
}
export default Board;
