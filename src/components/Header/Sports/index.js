import FetchNews from "../../fetchNews";

export default function Sports (){
    return(
        <div>
            Sports
            <FetchNews country = '' category = '&category=sports' />
        </div>
    )
}