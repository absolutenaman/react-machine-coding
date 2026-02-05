import {useEffect, useState} from "react";
import axios from "axios";


const API = "https://fakestoreapi.com/products";
const Landing = () => {
    const [input, setInput] = useState('');
    const [productsList, setProductsList] = useState([]);
    const [err, setErr] = useState(null);
    const apiCallHandler = () => {
        axios.get(API).then((res) => {
            setProductsList(res.data)
        }).catch((err) => {
            setErr(err);
        })
    }

    useEffect(() => {
        apiCallHandler();
    }, [input])

    return <div className="container">
        <input onChange={(e) => {
            setInput(e.target.value)
        }}/>
        <div className="products-container">
            {
                productsList.map((item)=>{
                    return <div key={item.id}>
                        <div>{item.title}</div>
                        <span>price {item.price}</span>
                        <span>{item.category}</span>
                    </div>
                })
            }
        </div>

    </div>

}
export default Landing;