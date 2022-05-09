import { useEffect, useState } from "react"
import './style.css'

export default function FetchNews(props) {
    const [input, setInput] = useState([])
    const fetchData = async () => {
        let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}${props.category}&apiKey=2ae0469447754decabfdbc486b000f44`)
        let data = await response.json()
        setInput(data.articles)
    }
    useEffect(() => {
        fetchData()
    },[])
    return (
        <div className="pageStyling">
            {input.map((item, index) => {
                return (
                    <div key={index}>
                        <div className="card">
                            <img src={item.urlToImage} alt="" width='100%' />
                            <div>
                                <h5>{item.title}</h5>
                                <p>{item.content}</p>
                                <a href={item.url}>Read More</a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}