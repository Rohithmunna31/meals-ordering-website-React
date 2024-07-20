import "./input.css";
const input=(props)=>{
    return <div className="input">
        <label htmlFor={props.input.id} > 
            {props.label}
        </label>
        <input {...props.id} />
    </div>
}

export default input;