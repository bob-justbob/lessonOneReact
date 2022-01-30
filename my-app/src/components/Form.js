import { useState} from 'react';


export default function Form() {
    
    const [state, setstate] = useState("room");
    function changeValue(e) {
        setstate(e.target.value);
    }

    return (
        <form  action=".submit_forn">
            <laber>
                <p>{state}</p>
                <input className='text' value={state} onChange={changeValue}  />
            </laber>
        </form>
    )
}