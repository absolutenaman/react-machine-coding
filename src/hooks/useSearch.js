// Implement a custom React hook called useSearch(query) that performs a debounced API search, 
// and: Cancels the previous request when a new query starts (using AbortController). 
// Returns { data, loading, error }. Debounces API calls by 500ms to avoid flooding the backend.

import {useEffect, useState} from "react"
import {debounce} from "../utils";
import axios from "axios";

const apiUrl = "https://api.api-ninjas.com/v1/animals?name=";
const apiKey = "hoQgoC3levKG6ZtJzbrlFXPgR4Ro8CrWgesxEwjN";
const useSearch = (tag) => {
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const controller = new AbortController;
    const apiSearchMethod = () => {
         axios.get(apiUrl + tag, {
            headers: {
                'X-API-Key': apiKey,
                'Accept': 'application/json'
            },
            signal: controller.signal
        }).then((res) => {
            setImageUrl(res.data);
        }).catch((err) => {
            setError(err);
            console.log("Error", err)
        }).finally(() => {
            setLoading(false);
        });
    }

    const debouncedFunction = debounce(apiSearchMethod);
    useEffect(() => {
         debouncedFunction();
        return (() => {
            controller.abort();
        })
    }, [tag])

    return {imageUrl, loading, error}
}

export default useSearch;

