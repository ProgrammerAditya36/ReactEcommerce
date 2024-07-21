import { useNavigate } from "react-router";
import Layout from "../../components/Layout/Layout";
import { useContext } from "react";
import MyContext from "../../context/MyContext";
import Loader from "../../components/Loader/Loader";

// productData
const productData = [
    {
        id: 1,
        image: "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
        title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
        desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
        price: 150,
        trendingProductName: "Featured",
        quantity: 1,
    },
    {
        id: 2,
        image: "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg",
        title: "Kaushalam kalash Copper Pot",
        desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
        price: 120,
        trendingProductName: "Featured",
        quantity: 1,
    },
    {
        id: 3,
        image: "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg",
        title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
        desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
        price: 130,
        trendingProductName: "Featured",
        quantity: 1,
    },
    {
        id: 4,
        image: "https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg",
        title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
        desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
        price: 120,
        trendingProductName: "Featured",
        quantity: 1,
    },
    {
        id: 1,
        image: "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
        title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
        desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
        price: 150,
        trendingProductName: "Featured",
        quantity: 1,
    },
    {
        id: 2,
        image: "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg",
        title: "Kaushalam kalash Copper Pot",
        desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
        price: 120,
        trendingProductName: "Featured",
        quantity: 1,
    },
    {
        id: 3,
        image: "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg",
        title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
        desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
        price: 130,
        trendingProductName: "Featured",
        quantity: 1,
    },
    {
        id: 4,
        image: "https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg",
        title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
        desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
        price: 120,
        trendingProductName: "Featured",
        quantity: 1,
    },
];

const AllProduct = () => {
    const navigate = useNavigate();
    const context = useContext(MyContext);
    const { getAllProduct, loading } = context;
    return (
        <Layout>
            <div className="py-8">
                {/* Heading  */}
                <div className="">
                    <h1 className="mb-5 text-center text-2xl font-semibold">
                        All Products
                    </h1>
                </div>
                <div className="flex justify-center">
                    {loading && <Loader />}
                </div>
                {/* main  */}
                <section className="body-font text-gray-600">
                    <div className="container mx-auto px-5 py-5 lg:px-0">
                        <div className="-m-4 flex flex-wrap">
                            {getAllProduct.map((item, index) => {
                                const { productImageUrl, title, price, id } =
                                    item;
                                return (
                                    <div
                                        key={index}
                                        className="w-full p-4 lg:w-1/4"
                                    >
                                        <div className="h-full cursor-pointer overflow-hidden rounded-xl border border-gray-300 shadow-md">
                                            <img
                                                onClick={() =>
                                                    navigate(
                                                        `/productInfo/${id}`,
                                                    )
                                                }
                                                className="h-96 w-full object-contain lg:h-80"
                                                src={productImageUrl}
                                                alt="blog"
                                            />
                                            <div className="p-6">
                                                <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
                                                    E-bharat
                                                </h2>
                                                <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                                                    {title.substring(0, 25)}
                                                </h1>
                                                <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                                                    ₹{price}
                                                </h1>

                                                <div className="flex justify-center">
                                                    <button className="w-full rounded-lg bg-blue-500 py-[4px] font-bold text-white hover:bg-blue-600">
                                                        Add To Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default AllProduct;
