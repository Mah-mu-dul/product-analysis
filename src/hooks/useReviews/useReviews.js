import { useEffect, useState } from "react"

const useReviews = () => {
    const [Reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return [Reviews, setReviews]
}

export default useReviews;