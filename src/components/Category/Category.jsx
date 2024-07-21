// category
const category = [
    {
        image: "https://cdn-icons-png.flaticon.com/256/4359/4359963.png",
        name: "fashion",
    },
    {
        image: "https://cdn-icons-png.flaticon.com/256/11833/11833323.png",
        name: "shirt",
    },
    {
        image: "https://cdn-icons-png.flaticon.com/256/8174/8174424.png",
        name: "jacket",
    },
    {
        image: "https://cdn-icons-png.flaticon.com/256/7648/7648246.png",
        name: "mobile",
    },
    {
        image: "https://cdn-icons-png.flaticon.com/256/12142/12142416.png",
        name: "laptop",
    },
    {
        image: "https://cdn-icons-png.flaticon.com/256/10686/10686553.png",
        name: "shoes",
    },
    {
        image: "https://cdn-icons-png.flaticon.com/256/12114/12114279.png",
        name: "home",
    },
    {
        image: "https://cdn-icons-png.flaticon.com/256/11946/11946316.png",
        name: "books",
    },
];

const Category = () => {
    return (
        <div>
            <div className="mt-5 flex flex-col">
                {/* main 1 */}
                <div className="hide-scroll-bar flex overflow-x-scroll lg:justify-center">
                    {/* main 2  */}
                    <div className="flex">
                        {/* category  */}
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-3 lg:px-10">
                                    {/* Image  */}
                                    <div className="mb-1 h-16 w-16 max-w-xs cursor-pointer rounded-full bg-blue-500 transition-all hover:bg-blue-400 lg:h-24 lg:w-24">
                                        <div className="mb-12 flex justify-center">
                                            {/* Image tag  */}
                                            <img src={item.image} alt="img" />
                                        </div>
                                    </div>

                                    {/* Name Text  */}
                                    <h1 className="title-font text-center text-sm font-medium first-letter:uppercase lg:text-lg">
                                        {item.name}
                                    </h1>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* style  */}
            <style
                dangerouslySetInnerHTML={{
                    __html: ".hide-scroll-bar {  -ms-overflow-style: none;  scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar {  display: none;}",
                }}
            />
        </div>
    );
};

export default Category;
