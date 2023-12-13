export const Title = (props) => {
    return (
        <div className="card">
            <h3>Tên nhân viên {props.name}</h3>
            <p>Đây là {props.title}</p>
        </div>
    )
}