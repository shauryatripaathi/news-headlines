import FetchNews from "../../fetchNews";

export default function Movies (){
    return(
        <div>
            Movies
            <FetchNews country = 'in' category = '&category=entertainment' />
        </div>
    )
}