import "./Cell.css"

export default function Cell({ value, owned, onClick }) {
    return (
        <div
            className={`cell ${
                value && owned ? "black" : value && !owned ? "white" : "empty"
            }`}
            onClick={onClick}
        ></div>
    )
}
