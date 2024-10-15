import logo from "../Image/logo192.png";

export default function Header() {
  return (
    <div className="pt-3" style={{ borderBottom: "1px solid #777 " }}>
      <img
        src={logo}
        alt="React"
        style={{ height: "35px", verticalAlign: "top" }}
      ></img>
      <span className="h2 pt-4 text-white-50">
        React Course - ContactOPedia
      </span>
    </div>
  );
}
