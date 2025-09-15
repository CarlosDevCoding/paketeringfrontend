import "./Cell.css";

export default function Cell({ value, onClick }) {
  return <div className={`cell ${value || "empty"}`} onClick={onClick}></div>;
}
