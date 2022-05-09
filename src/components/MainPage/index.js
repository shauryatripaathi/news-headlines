import Navbar from "../Navbar";
import styled from "styled-components";

export default function MainPage(){
    const Header = styled.div`
        background : papayawhip;
        display : flex;
        justify-content : center;
        padding : 20px;
        color : palevioletred;
        font-size : 2.5em;
    `
    const date = new Date().toDateString()
    return(
        <div>
            <div>
            <Header>News Headlines</Header>
            {date}
            </div>
            <Navbar />
        </div>
    )
}