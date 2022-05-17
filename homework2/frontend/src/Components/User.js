import React, { useEffect } from 'react'
import axios from "axios"

export default function User() {
    useEffect(() => {
        const get = async () => {
            const response = await axios.get("http://localhost:3000/api/users")
            const data = await response.data
            data.map((x) => {
                const output = document.getElementById('output')
                output.innerHTML +=  `<tr>
                <td>id : ${x.id}</td>
                <td>firstname : ${x.firstname}</td>
                <td>lastname : ${x.lastname}</td>
                <td>salary : ${x.salary}</td>
                </tr>`
            })
        }
        get()




    }, [])

    return (
        <div>
            <table>
                <tbody id='output'>
                
                </tbody>

            </table>


        </div>
    )
}
