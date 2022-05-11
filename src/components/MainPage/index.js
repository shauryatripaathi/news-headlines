import Navbar from "../Navbar";
import './style.css'
import styled from "styled-components";

export default function MainPage() {
    const Header = styled.div`
        background : papayawhip;
        display : flex;
        justify-content : center;
        padding : 20px;
        color : palevioletred;
        font-size:5vw;
        @media (max-width : 62em){
            width : 100vmax;
            display : flex;
            justify-content : start;
        }
    `
    const BreakingNews = styled.div`
        display : flex;
        justify-content : center;
        gap : 30px;
        font-size:1vw;
        padding :10px;
    `
    const date = new Date().toDateString()
    return (
        <div>
            <div>
                <Header>Daily News Headlines</Header>
                <div className="timeAndDate">{date}</div>
                <BreakingNews>
                    <li><a href="https://indianexpress.com/article/technology/science/a-supermassive-black-hole-might-have-spontaneously-flipped-its-magnetic-field-7907449/">Massive black hole might have spontaneously ‘flipped’ its magnetic field</a></li>
                    <li><a href="https://www.thehansindia.com/technology/tech-news/iphone-13-price-drops-by-rs-10000-on-amazon-and-flipkart-get-cashback-and-discounts-741751">iPhone 13 Price Drops by Rs. 10000 on Amazon and Flipkart; Get cashback and discounts</a></li>
                </BreakingNews>
            </div>
            <Navbar />
        </div>
    )
}