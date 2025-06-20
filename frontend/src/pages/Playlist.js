import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Playlist = () => {
    return (
        <main className="bg-gradient-to-b grid from-neutral-500 via-neutral-800 to-neutral-900">
            <Header />
            <section className="grid order-2 md:order-1 py-10">
                <div className="container px-10 pb-10 place-self-center bg-neutral-100 bg-opacity-10 rounded-xl">
                    <div className="flex flex-col items-center md:flex md:flex-row md:justify-between py-5">
                        <h1 className="text-neutral-100 text-left text-xl font-bold">PLAYLIST</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                        <div className="bg-neutral-100 bg-opacity-10 grid pb-5 rounded-3xl">
                            <div className="w-full h-[400px] md:h-[500px] lg:h-[320px] bg-gray-300 mb-5"></div>
                            <span className="text-neutral-100">Artist Name</span>
                            <span className="text-neutral-400 font-xs">Artist</span>
                        </div>
                        <div className="bg-neutral-100 bg-opacity-10 grid pb-5 rounded-3xl">
                            <div className="w-full h-[400px] md:h-[500px] lg:h-[320px] bg-gray-300 mb-5"></div>
                            <span className="text-neutral-100">Artist Name</span>
                            <span className="text-neutral-400 font-xs">Artist</span>
                        </div>
                        <div className="bg-neutral-100 bg-opacity-10 grid pb-5 rounded-3xl">
                            <div className="w-full h-[400px] md:h-[500px] lg:h-[320px] bg-gray-300 mb-5"></div>
                            <span className="text-neutral-100">Artist Name</span>
                            <span className="text-neutral-400 font-xs">Artist</span>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default Playlist