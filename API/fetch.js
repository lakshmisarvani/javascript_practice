/*
User Data Fetcher (Profile Feature)
Requirements:
Fetch user data from:
https://jsonplaceholder.typicode.com/users/1


Display:
Name
Email
Company Name
Show:
"Loading..." while fetching
Error message if API fails*/

async function fetchUser(){
    try{
        const res=await fetch("https://jsonplaceholder.typicode.com/users");
        if(!res.ok){
            throw new Error("Failed to fetch user data");
        }
        // const user=await res.json();
        // return{
        //     name:user.name,
        //     email:user.email,
        //     company:user.company.name,
        //     status:"Success"
        // };
        const users=await res.json();
        const r=users.map(i=>({
            name:i.name,
            email:i.email,
            company:i.company.name
        }));
        console.log(r);
    }
    catch(error){
        return {
            error:error.message,
            status:"Failed"
        }
    }
}

fetchUser().then(console.log);