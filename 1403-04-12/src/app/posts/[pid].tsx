
import { useRouter } from "next/router";
export default function Posts(){
    const router=useRouter();
    const {pid}=router.query
    return(
       <h1>Post: {pid}</h1>
    )
}