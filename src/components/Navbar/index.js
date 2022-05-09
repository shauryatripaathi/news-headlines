import { BrowserRouter, Routes, Route } from "react-router-dom"
import Business from "../Header/Business"
import Health from "../Header/Health"
import Home from "../Header/Home"
import Movies from "../Header/Movies"
import Science from "../Header/Science"
import Sports from "../Header/Sports"
import World from "../Header/World"
import Layout from "../Layout"

export default function Navbar() {
    return (
        <div>
            <BrowserRouter>
                <Layout></Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/world' element={<World />} />
                    <Route path='/business' element={<Business />} />
                    <Route path='/sports' element = {<Sports />}/>
                    <Route path='/science' element={<Science />} />
                    <Route path='/health' element={<Health />} />
                    <Route path='/movies' element={<Movies />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}