import "./message.css";

export interface MessageProps {
  /**
   * What type of Message is this?
   */
  type: "info" | "error" | "warning";
  /**
   * title of the  Message
   */
  title: string;
  /**
   * Description of the  Message
   */
  content: string;
}
export const Message = ({ type, title, content }:MessageProps) => {
  return (
    <div className={`message ${type}`}>
      <div className="icon">{getIcon(type)}</div>
      <div className="content">
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
};

const getIcon = (type: "info" | "error" | "warning") => {
  switch (type) {
    case "info":
      return "ℹ️";
    case "error":
      return "❌";
    case "warning":
      return "⚠️";
    default:
      return "";
  }
};

export default Message;
