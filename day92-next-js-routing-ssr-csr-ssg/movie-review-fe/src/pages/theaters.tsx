import { useEffect, useState } from "react";

interface IGeo {
    type: {
        type: string,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [number, number],
        required: true
    }
}

interface IAddress {
    street1: string,
    city: string,
    state: string,
    zipcode: string,
}

interface ILocation {
    address: IAddress
    geo: IGeo
}


interface ITheater{
    theaterId: number,
    location: ILocation
}



export default function Theater(): JSX.Element  {

    const URL = "http://localhost:8080/theaters/list"

const [ data, setData] = useState<ITheater[]>([])

async function getTheaters(url:string):Promise<void> {
    const FETCHED_DATA = await fetch(url);
    const FETCHED_JSON = await FETCHED_DATA.json();
    // console.log(FETCHED_JSON);
    setData(FETCHED_JSON);
}

useEffect(()=>{
    getTheaters(URL)
},[])


    return(
   <div>
         <h1>THEATER LIST</h1>
         {data.map((el, index)=><li key={index}>{el.location.address.city}</li>
         )}
   </div>
    
    )
}