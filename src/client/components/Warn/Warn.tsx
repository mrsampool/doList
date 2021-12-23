
// Stylesheet
import './Warn.css';

const Warn = ({ message, setMessage}:WarnProps) => (
    <p className={`warn ${!!message}`}>
        {message}
        <button type="button" onClick={()=>{setMessage('')}}>OK</button>
    </p>
);
export default Warn;

interface WarnProps {
    message: string,
    setMessage: Function
}