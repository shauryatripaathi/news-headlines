import FetchNews from "../../fetchNews";

export default function Health (){
    return(
        <div>
            Health
            <FetchNews country = 'in' category = '&category=health' />
        </div>
    )
}