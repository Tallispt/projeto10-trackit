import axios from "axios"
import { useEffect, useContext } from "react"
import { useParams } from "react-router-dom";
import UserContext from '../context/UserContext';


export default function Plan() {
    const { clientInfo } = useContext(UserContext);
    const { planId } = useParams()

    useEffect(() => {
        const config = {
            headers: {
                'Authorization': `Bearer ${clientInfo.token}`
            }
        }

        axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${planId}`, config)
            .then(r => console.log(r))
    }, [])


    return (
        <></>
    )
}