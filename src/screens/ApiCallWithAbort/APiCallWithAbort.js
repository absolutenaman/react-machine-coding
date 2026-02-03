import {useEffect, useState} from "react";
import useSearch from "../../hooks/useSearch";

const APiCallWithAbort = () => {
    const [input, setInput] = useState('cheetah');
    let {imageUrl, loading, error} = useSearch(input);
    console.log("!!! imageUrl, loading, error", imageUrl, loading, error)
    return <>
        <input onChange={(e) => {
            setInput(e.target.value);
        }}/>
        <button >Submit</button>

    </>
};



export default APiCallWithAbort;