import FetchNews from '../../fetchNews'

export default function Home (){
    return(
        <div>
            <h1>Top Stories</h1>
            <FetchNews country = 'in' category = '' />
        </div>
    )
}