import { Navbar, Footer } from "../components";
import { Hero, About, Explore, FeedBack, GetStarted, Insights, WhatNews, World } from "../sections";

const Page = () => (
    <div className="bg-primary-black overflow-hidden">
        <Navbar />
        <Hero />
        <div className="relative">
            <About />
            <div className="gradient-03 z-0" />
            <Explore />
        </div>
        <div className="relative">
            <GetStarted />
            <div className="gradient-04 z-0" />
            <WhatNews />
        </div>
        <World />
        <div className="relative">
            <Insights />
            <div className="gradient-04 z-0" />
            <FeedBack />
        </div>
        <Footer />
    </div>

)
export default Page;