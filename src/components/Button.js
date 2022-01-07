import "../styles/Button.scss";

export default function Button({ handleSubmit, label }) {
  return (
    <button className="button" onClick={handleSubmit}>{label}</button>
  );
}