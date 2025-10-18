function Btn({ texto, children, onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      <div className="btn-content">
        
        <span className="btn-text">{texto}</span>
        {children} {(children===0 || children===1) ? " clic" : " clics"} {/* imagen */} {/* texto debajo */}
      </div>
    </button>
  );
}

export default Btn;
