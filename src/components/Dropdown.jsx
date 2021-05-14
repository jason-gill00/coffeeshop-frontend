import React, {useState} from 'react'

export default function Dropdown({coffeeTypes, value, onChange}) {

    const [open, setOpen] = useState(false);

    return (
        <div className="dropdown">
            <div className="control" onClick={() => setOpen((prev) => !prev)}>
                <div className="selected-value">{value ? value.type : "Select Coffee..."}</div>      
                <div className={`arrow ${open ? "open" : null}`}></div>     
            </div>
            <div className={`options ${open ? "open" : null}`}>
                {
                    coffeeTypes.map(coffee => <div key={coffee.id} className={`option ${value === coffee ? "selected" : null}`} onClick={() => {
                        onChange(coffee)
                        setOpen(false);
                    }}>{coffee.type}</div> )
                }
            </div>
        </div>
    )
}
