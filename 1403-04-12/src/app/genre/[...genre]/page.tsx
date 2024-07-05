'use client'
import { useParams } from "next/navigation";
export default function Genre(){
    const {genre}=useParams()
    console.log(genre);
    
    return(
       <h1>{genre[0]} is a {genre[1]} music artist!</h1>
    )
}