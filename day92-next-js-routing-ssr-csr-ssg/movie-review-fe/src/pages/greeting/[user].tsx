import React from "react";
import { useRouter } from "next/router";

export async function getServerSideProps(req:any) {
    console.log( req.params );
    const {user} = req.params
   
    return{
        props: {
            user,
        }
    }
}

export default function Greeting(props:any) {
    const {query} = useRouter()
    console.log( query );
    return(
        <div>
            <h1>Hello {props.user}</h1>
            <h2>He is {query.age}</h2>
        </div>
    )
}
