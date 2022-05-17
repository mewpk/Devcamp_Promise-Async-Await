import React, { useEffect,useState } from 'react'
import axios from "axios"

export default function User() {

    const [users,setUsers] = useState(null)



    const get = async () => {
        const response = await axios.get("http://localhost:3000/api/users")
        setUsers(response.data) 
        console.log(users)
    };

    useEffect(() => {

        if(!users){
            get()
        }
        
    }, [])
   

    return ( 
        <div>
        
            <table>
                <tbody id='output'>
                {
                   
                   users &&  users.map((x) => {
                        return (
                            <tr>
                            <td>id : {x.id}</td>
                            <td>firstname : {x.firstname}</td>
                            <td>lastname : {x.lastname}</td>
                            <td>salary : {x.salary}</td>
                            </tr>
                        )
                        
                    })
                
                   
                   
                }
                </tbody>

            </table>


        </div>
    )
}
