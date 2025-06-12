import { useEffect, useState } from 'react'
import axios from 'axios'
import { BACKEND_URL } from '../config'

export function useContent() {
    const [contents, setContents] = useState([])

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/content/get`, { withCredentials: true })
            .then((res) => {
                setContents(res.data.content)
                console.log(res.data.content);

            })
            .catch((err) => console.error("Failed to fetch content:", err));

    }, [])

    return contents
}
