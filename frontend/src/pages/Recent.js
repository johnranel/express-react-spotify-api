import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Recent = () => {
    return (
        <main className="bg-gradient-to-b grid from-neutral-500 via-neutral-800 to-neutral-900">
            <Header />
            <section className="grid order-2 md:order-1 py-10">
                <div className="container px-10 pb-10 place-self-center bg-neutral-100 bg-opacity-10 rounded-xl">
                    <div className="flex flex-col items-center md:flex md:flex-row md:justify-between py-5">
                        <h1 className="text-neutral-100 text-left text-xl font-bold">RECENT</h1>
                        <div className="flex gap-5 mt-5 md:mt-0">
                            <button className="text-neutral-100 text-base font-medium">All Time</button>
                            <button className="text-neutral-100 text-base font-medium">Last 6 Months</button>
                            <button className="text-neutral-100 text-base font-medium">Last 4 Weeks</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-10">
                        <div className="flex justify-between items-center">
                            <div className="grid grid-cols-2 grid-rows-2 text-left items-center">
                                <div className="w-[60px] h-[60px] bg-gray-300 row-span-2"></div>
                                <span className="text-neutral-100">Artist Name</span>
                                <span className="text-neutral-400 font-xs">Artist</span>
                            </div>
                            <span className="text-neutral-400">3:00</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="grid grid-cols-2 grid-rows-2 text-left items-center">
                                <div className="w-[60px] h-[60px] bg-gray-300 row-span-2"></div>
                                <span className="text-neutral-100">Artist Name</span>
                                <span className="text-neutral-400 font-xs">Artist</span>
                            </div>
                            <span className="text-neutral-400">3:00</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="grid grid-cols-2 grid-rows-2 text-left items-center">
                                <div className="w-[60px] h-[60px] bg-gray-300 row-span-2"></div>
                                <span className="text-neutral-100">Artist Name</span>
                                <span className="text-neutral-400 font-xs">Artist</span>
                            </div>
                            <span className="text-neutral-400">3:00</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="grid grid-cols-2 grid-rows-2 text-left items-center">
                                <div className="w-[60px] h-[60px] bg-gray-300 row-span-2"></div>
                                <span className="text-neutral-100">Artist Name</span>
                                <span className="text-neutral-400 font-xs">Artist</span>
                            </div>
                            <span className="text-neutral-400">3:00</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="grid grid-cols-2 grid-rows-2 text-left items-center">
                                <div className="w-[60px] h-[60px] bg-gray-300 row-span-2"></div>
                                <span className="text-neutral-100">Artist Name</span>
                                <span className="text-neutral-400 font-xs">Artist</span>
                            </div>
                            <span className="text-neutral-400">3:00</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="grid grid-cols-2 grid-rows-2 text-left items-center">
                                <div className="w-[60px] h-[60px] bg-gray-300 row-span-2"></div>
                                <span className="text-neutral-100">Artist Name</span>
                                <span className="text-neutral-400 font-xs">Artist</span>
                            </div>
                            <span className="text-neutral-400">3:00</span>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default Recent