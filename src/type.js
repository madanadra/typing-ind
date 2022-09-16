import React from "react";
import { useEffect, useState } from "react";

const Typed = ({
    type, 
    backspace, 
    delay, 
    duration, 
    cursor
}) => {
    const typeProp = typeof(type) === 'string' ? [type] : Array.isArray(type) ? type : [] 
    const backspaceProp = typeof(backspace) === 'number' ? [backspace] : Array.isArray(backspace) ? backspace : []
    const durationProp = typeof(duration) === 'number' ? duration : 100
    const delayProp = typeof(delay) === 'number' ? delay : durationProp

    const [result, setResult] = useState(new Array(typeProp.length).fill(''))
    const [num, setNum] = useState(0)
    const [back, setBack] = useState(false)
    const [line, setLine] = useState(true)

    useEffect(() => {
        const typing = setInterval(() => {
            if (num < typeProp.length && !back) {
                if (result[num] !== typeProp[num]) {
                    const newResult = [...result]
                    newResult[num] = typeProp[num].substring(0, result[num].length+1)
                    setResult(newResult);
                    setLine(true);
                } else if (result[num] === typeProp[num]) {
                    if (backspaceProp.includes(num)) {
                        clearInterval(typing); 
                        const backspacing = setTimeout(() => {
                            setBack(true);
                        }, delayProp);

                        return () => { 
                            clearTimeout(backspacing); 
                        };
                    } else {
                        setNum(num+1);
                    }
                }
            } else if (num < typeProp.length && back) {
                if (result[num].length) {
                    const newResult = [...result]
                    newResult[num] = typeProp[num].substring(0, result[num].length-1)
                    setResult(newResult);
                    setLine(true);
                } else {
                    setBack(false);
                    setNum(num+1);
                }
            }
        }, durationProp);

        return () => { 
          clearInterval(typing); 
        };
    }, [result, num, back]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        setTimeout(() => {
            setLine(!line);
        }, 500);

        return () => {};
    }, [line]);

    return (
        <React.Fragment>
            {result}
            {
                typeof(cursor) === 'object' && cursor.length === undefined && line ? 
                <span style={cursor} /> : 
                typeof(cursor) === 'string' && line ? 
                <span className={cursor} /> : 
                []
            }
        </React.Fragment>
    );
}

export default Typed;