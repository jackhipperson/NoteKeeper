

function Card(props) {
    return (
        <div className="box-border mx-auto self-auto m-4 rounded-lg shadow-2xl fit-content w-96 p-4 bg-red-300">
            {props.children}
        </div>
    )
}

export default Card;