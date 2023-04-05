import { useEffect, useState } from "react";

interface IComment {
    _id: string;
    name: string;
    email: string;
    movie_id: string;
    text: string;
    date: Date;
  }


export default function Comments(): JSX.Element  {

    const URL = "http://localhost:8080/comments/list?page=2&perPage=10"
    

const [ data, setData] = useState<IComment[]>([])

async function getData(url:string):Promise<void> {
    const FETCHED_DATA = await fetch(url);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setData(FETCHED_JSON);
}

useEffect(()=>{
    getData(URL)
},[])


    return(
   <div>
         <h1>THEATER LIST</h1>
         {data.map((el, index)=><li key={index}>{el.name}</li>
         )}
   </div>
    
    )
}