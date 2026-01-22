// Implement a custom React hook called useSearch(query) that performs a debounced API search, 
// and: Cancels the previous request when a new query starts (using AbortController). 
// Returns { data, loading, error }. Debounces API calls by 500ms to avoid flooding the backend.

import { useEffect, useState } from "react"
import { debounce } from "../utils";
import axios from "axios";
const apiUrl="https://cataas.com/cat/orange,cute";
const useSearch=(query)=>{
    const [data,setData]=useState('');
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    const tags=["orange","cute","fat"];

    const apiSearchMethod=()=>{
        axios.get(apiUrl).then((res)=>{
            
        })
    }

    const debouncedFunction=debounce(apiSearchMethod,500);
    useEffect(()=>{

    },[])

}

