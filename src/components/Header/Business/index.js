import FetchNews from "../../fetchNews";

export default function Business (){
    return(
        <div>
            Business
            <FetchNews country = 'in' category = '&category=business' />
        </div>
    )
}