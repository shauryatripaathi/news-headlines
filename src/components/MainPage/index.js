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
    return(
        <div>
            <Header>News Headlines</Header>
            <Navbar />
        </div>
    )
}