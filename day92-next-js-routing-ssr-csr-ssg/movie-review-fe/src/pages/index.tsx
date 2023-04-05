import Link from "next/link";
import React from "react"

export async function getServerSideProps() {
  const userRequest = await fetch('http://localhost:8080/theaters/list?page=2&perPage=1')
  const theaterData = await userRequest.json()
  console.log( theaterData );
  return{
    props:{
      theater: theaterData
    }
  }
}

export default function Home(props: any): JSX.Element  {
  console.log( props );

  const side = typeof window ? 'client' : 'server'
  return(
    <div>
      <div>Welcome! </div>
      <div>You're on currently on the {side}-side</div><br />
      <Link href="/about">About Page</Link>
      <Link href="/contac">Contac Page</Link>
      <Link href="/greeting/Sodoo?age=38">Greeting Page</Link>
      {/* <Link href="/post/05-04-2023/my-first-post">Post Page</Link> */}
      <Link href={{
        pathname: '/post/[date]/[slug]',
        query: {date: "05-04-2023", slug: "first-Post"}
      }}>Post Page</Link>
    </div>
  )
}
