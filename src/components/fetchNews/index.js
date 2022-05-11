import './style.css'
import data from './data.json'

export default function FetchNews(props) {
    return (
        <div className="pageStyling">
            {data.filter((item => item.url.includes(props.content))).map((item, index) => {
                return (
                    <div key={index}>
                        <div className="card">
                            <img src={item.urlToImage} alt="" width='100%' />
                            <div>
                                <h5>{item.title}</h5>
                                <p>{item.content ? item.content.slice(0, 90) : ""}...</p>
                                <a href={item.url}>Read More</a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}