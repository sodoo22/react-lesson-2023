import React from "react"



export async function getStaticProps() {
    return{
        props: {
            content: 'Text Content'
        },
        revalidate: 600, // time in seconds (10 minutes)
    }
}

export default function About(props: any): JSX.Element  {
    return(
       <div>
         <h1>I’m an about page</h1>
         <div>
            <p>Theater Name: {props.content}</p>
         </div>
       </div>
        
    )
}