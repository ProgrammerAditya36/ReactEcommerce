/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
    return (
        <div>
            <section className="body-font mb-10 text-gray-600">
                {/* main  */}
                <div className="container mx-auto px-5 py-10">
                    {/* Heading  */}
                    <h1 className="text-center text-3xl font-bold text-black">
                        Testimonial
                    </h1>
                    {/* para  */}
                    <h2 className="mb-10 text-center text-2xl font-semibold">
                        What our{" "}
                        <span className="text-pink-500">customers</span> are
                        saying
                    </h2>

                    <div className="-m-4 flex flex-wrap">
                        {/* Testimonial 1 */}
                        <div className="mb-6 p-4 lg:mb-0 lg:w-1/3">
                            <div className="h-full text-center">
                                <img
                                    alt="testimonial"
                                    className="mb-8 inline-block h-20 w-20 rounded-full border-2 border-gray-200 bg-gray-100 object-cover object-center"
                                    src="https://ecommerce-sk.vercel.app/img/kamal.png"
                                />
                                <p className="leading-relaxed">
                                    Edison bulb retro cloud bread echo park,
                                    helvetica stumptown taiyaki taxidermy 90's
                                    cronut +1 kinfolk. Single-origin coffee
                                    ennui shaman taiyaki vape DIY tote bag
                                    drinking vinegar cronut adaptogen squid
                                    fanny pack vaporware.
                                </p>
                                <span className="mb-4 mt-6 inline-block h-1 w-10 rounded bg-pink-500" />
                                <h2 className="title-font text-sm font-medium uppercase tracking-wider text-gray-900">
                                    Kamal Nayan Upadhyay
                                </h2>
                                <p className="text-gray-500">
                                    Senior Product Designer
                                </p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="mb-6 p-4 lg:mb-0 lg:w-1/3">
                            <div className="h-full text-center">
                                <img
                                    alt="testimonial"
                                    className="mb-8 inline-block h-20 w-20 rounded-full border-2 border-gray-200 bg-gray-100 object-cover object-center"
                                    src="https://www.devknus.com/img/gawri.png"
                                />
                                <p className="leading-relaxed">
                                    Edison bulb retro cloud bread echo park,
                                    helvetica stumptown taiyaki taxidermy 90's
                                    cronut +1 kinfolk. Single-origin coffee
                                    ennui shaman taiyaki vape DIY tote bag
                                    drinking vinegar cronut adaptogen squid
                                    fanny pack vaporware.
                                </p>
                                <span className="mb-4 mt-6 inline-block h-1 w-10 rounded bg-pink-500" />
                                <h2 className="title-font text-sm font-medium uppercase tracking-wider text-gray-900">
                                    S Mishra
                                </h2>
                                <p className="text-gray-500">UI Develeoper</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="p-4 lg:mb-0 lg:w-1/3">
                            <div className="h-full text-center">
                                <img
                                    alt="testimonial"
                                    className="mb-8 inline-block h-20 w-20 rounded-full border-2 border-gray-200 bg-gray-100 object-cover object-center"
                                    src="https://firebasestorage.googleapis.com/v0/b/devknus-official-database.appspot.com/o/images%2FScreenshot%202023-07-07%20at%202.20.32%20PM-modified.png?alt=media&token=324ddd80-2b40-422c-9f1c-1c1fa34943fa"
                                />
                                <p className="leading-relaxed">
                                    Edison bulb retro cloud bread echo park,
                                    helvetica stumptown taiyaki taxidermy 90's
                                    cronut +1 kinfolk. Single-origin coffee
                                    ennui shaman taiyaki vape DIY tote bag
                                    drinking vinegar cronut adaptogen squid
                                    fanny pack vaporware.
                                </p>
                                <span className="mb-4 mt-6 inline-block h-1 w-10 rounded bg-pink-500" />
                                <h2 className="title-font text-sm font-medium uppercase tracking-wider text-gray-900">
                                    XYZ{" "}
                                </h2>
                                <p className="text-gray-500">CTO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonial;
