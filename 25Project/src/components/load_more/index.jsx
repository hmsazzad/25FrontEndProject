import { useEffect, useState } from "react"




export default function LoadMore(){


    const [loading, setLoading]=useState(false);
    const [products, setProducts]=useState([]);
    const [count, setCount]= useState(0);
    const [disableButton, setDisableButton]=useState(false);


    async function fetchProducts(){
        try {
            setLoading(true);
            const response = await fetch
            (
                `https://dummyjson.com/products?limit=20&skip=${
                count === 0 ? 0 : count * 20 }`

            );
            const result=await response.json();
            console.log(result);
            if(result && result.products && result.products.length){
                setProducts((prevData)=> [...prevData, ...result.products]);
                setLoading(false);
            }

        } catch (e) {
            console.log(e);
            setLoading(false)
        }
    }



    useEffect(()=>{
        fetchProducts()
    },[count]);


    useEffect(()=>{
        if(products&&products.length===100)
            setDisableButton(true);
    },[products])

    if(loading){
        return <div>
            loading data!
        </div>
    }

    return <div className="flex flex-col items-center gap-10">
        <div className="grid grid-cols-4 gap-3 ">
            {
                products && products.length?
                products.map((item)=>(
                <div className="bg-gray-100 text-center font-serif" key={item.id}>
                    <img src={item.thumbnail}
                    alt={item.title}
                    className="bg-gray-200"/>
                    <p>{item.title}</p>


                </div>
                ))
                :null

            }
        </div>
        <div>
            <button 
            onClick={
                ()=>setCount(count+1)
            }
            disabled={disableButton}
            className={disableButton?"px-5 py-2 border-[4px] border-gray-600 bg-gray-500":"px-5 py-2 border-[4px] border-gray-600 bg-pink-500"}>
                Load More
            </button>
        </div>
    </div>
}