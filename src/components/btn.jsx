function Btn({ texto, children, onClick ,mostrarCartas}) {
  return (
    <button className="btn" onClick={onClick}>
      <div className="btn-content">               
        <span className="btn-text">{texto}</span>
        {children} {mostrarCartas && (
          (children === 0 || children === 1) ? " clic" : " clics"
        )}
      </div>
    </button>
  );
}

export default Btn;
