import { useContext } from "react";
import Category from "../../components/Category/Category";
import HeroSection from "../../components/HeroSection/HeroSection";
import HomePageProductCard from "../../components/HomePageProductCard/HomePageProductCard";
import Layout from "../../components/Layout/Layout";
import Testimonial from "../../components/Testimonial/Testimonial";
import Track from "../../components/Track/Track";
import MyContext from "../../context/MyContext";
const Home = () => {
    return (
        <Layout>
            <HeroSection />
            <Category />
            <HomePageProductCard />
            <Track />
            <Testimonial />
        </Layout>
    );
};

export default Home;
