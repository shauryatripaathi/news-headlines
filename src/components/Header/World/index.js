import FetchNews from "../../fetchNews";

export default function World(){
    return(
        <div>World news
            <FetchNews country = 'us' category ='' />
        </div>
    )
}