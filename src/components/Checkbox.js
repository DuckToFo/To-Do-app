import react from 'react';
import {useState} from 'react';

const Checkbox = () => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <input type='checkbox'></input>
    )
}

export default Checkbox