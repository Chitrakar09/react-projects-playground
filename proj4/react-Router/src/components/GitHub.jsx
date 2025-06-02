import { useLoaderData } from "react-router";


function GitHub() {
    const data= useLoaderData()
    return ( 
        <div className="main bg-gray-400 p-10 h-full w-full text-4xl text-amber-100 flex justify-evenly">
           <div className="pfp h-full w-1/2 flex justify-center">
            <img src={data.avatar_url} className="h-3/4 w-3/4 object-cover object-center"></img>
           </div>
           <div className="info w-1/2 h-full flex flex-col justify-start">
            <p>UserName: {data.login}</p>
            <p>Followers: {data.followers}</p>
           </div>
        </div>
     );
}

export default GitHub;