import React, { useId } from "react";

function Select({
    option,
    label,
    className = "",
    ...props
}, ref) {
    const id = useId();
    return (
        <div className="w-full">
            {
                label && (
                    <label htmlFor={id} className='inline-block mb-1 pl-1'>
                        {label}
                    </label>
                )
            }
            <select
                {...props}
                ref={ref}
                id={id}>
                {
                    option.map((option) => (
                        <option
                            value={option} 
                        >{option}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default React.forwardRef(Select);