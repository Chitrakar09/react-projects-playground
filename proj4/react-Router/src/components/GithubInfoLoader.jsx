function GitHubInfo() {
    const getInfo= async()=>{
        const response= await fetch('  https://api.github.com/users/Chitrakar09')
        const result= await response.json() 
        return result
    }
    const data=getInfo()

    return ( data );
}

export default GitHubInfo;