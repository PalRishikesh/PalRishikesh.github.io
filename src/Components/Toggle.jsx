import "./Toggle.css"

const Toggle = ({handlerChange, isChecked}) => {
  return (
    <div className="toggle-container">
      <input 
      type="checkbox"
      id="check"
      className="toggle"
      onChange={handlerChange}
      checked={isChecked}
      />
      <label htmlFor="check"></label>
    </div>
  )
}

export default Toggle