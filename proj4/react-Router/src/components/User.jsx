import { useParams } from "react-router";

function User() {
    const {id}=useParams()
    return ( 
        <div className="bg-gray-400 text-8xl p-10 text-white text-center">User:{id}</div>
     );
}

export default User;