import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {debounce} from '../utils'

const Search = () => {
    const [result, setResult] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
        axios.get(`https://images-api.nasa.gov/search?q=${query}`).then((res) => {
            setResult(res?.data?.collection?.items);
            console.log(result)
        }).catch((err) => {
            console.log(err)
        })
        if(query.length===0)
            setResult([])
    }, [query]);

    const apiCall=debounce((data)=>{
      setQuery(data)
    })

    return (
        <div>
            <input title={"search"} onChange={(event)=>{
                apiCall(event.target.value);
            }}/>
            {
                result?.length >0 ? <div>
                    {
                        result.map((item)=>{
                          return  <div>{item?.data?.[0]?.title}</div>
                        })
                    }
                </div> :<div></div>
            }
        </div>
    );
}
export default Search;