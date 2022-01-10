import "../styles/MainMessage.scss";

export default function MainMessage({ message }) {
  return (
    <div className="main-message">
      <span className="main-message">{message}</span>
    </div>
  )
}