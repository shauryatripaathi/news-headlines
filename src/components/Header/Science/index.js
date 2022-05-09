import FetchNews from "../../fetchNews";

export default function Science (){
    return(
        <div>
            Science
            <FetchNews country = 'in' category = '&category=science' />
        </div>
    )
}