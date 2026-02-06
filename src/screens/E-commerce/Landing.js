import {useEffect, useState} from "react";
import axios from "axios";
import "./style.css";


const API = "https://fakestoreapi.com/products";
const Landing = () => {
    const [input, setInput] = useState('');
    const [apiResponse, setApiResponse] = useState([]);
    const [productsList, setProductList] = useState([]);
    const [err, setErr] = useState(null);
    const apiCallHandler = () => {
        axios.get(API).then((res) => {
            setApiResponse(res.data)
            setProductList(res.data);
        }).catch((err) => {
            setErr(err);
        })
    }
    const sortByPrice = (value) => {
        let result;
        let products=[...apiResponse]
        console.log(value)
        if (value === 'H') {
            result=products.sort((a, b) => {
                if(a.price <b.price){
                    return 1;
                } else {
                    return -1;
                }
            });
        } else {
            result=products.sort((a, b) => {
                if(a.price >b.price){
                    return 1;
                } else {
                    return -1;
                }
            });
        }
        setProductList(result)
    }

    useEffect(() => {
        apiCallHandler();
    }, [])

    useEffect(() => {
        if (input.length > 0) {
            const ans = apiResponse.filter((item) => item.title.toLowerCase().trim().includes(input.toLowerCase()));
            setProductList(ans)
        } else {
            setProductList(apiResponse)
        }
    }, [input])

    return <div className="container">
        <input placeholder={"search"} value={input} onChange={(e) => {
            setInput(e.target.value)
        }}/>
        <div>
            <select onChange={(e)=>{sortByPrice(e.target.value)}}>
                <option value={"H"} >Price high to low</option>
                <option value={"L"}>Price low to high</option>
                <option>Sort by Category</option>
            </select>
        </div>
        <div className="products-container">
            {
                productsList.map((item) => {
                    return <div className="product" key={item.id}>
                        <div>{item.title}</div>
                        <div>price {item.price}</div>
                        <div>{item.category}</div>
                        <img className="image" src={item.image}/>
                    </div>
                })
            }
        </div>
    </div>

}
export default Landing;