import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Profile = () => {
    return (
        <main class="bg-gradient-to-b grid from-neutral-500 via-neutral-800 to-neutral-900">
            <Header />
            {/* h-[calc(100vh-66px)] sm:h-[calc(100vh-106px)] md:h-[calc(100vh-195px)] lg:h-[calc(100vh-170px)] */}
            <section class="grid order-2 md:order-1 py-10">
                <div class="py-20 container flex flex-col gap-5 items-center justify-center px-10 place-self-center bg-neutral-100 bg-opacity-10 rounded-xl">
                    <div class="w-[200px] h-[200px] bg-gray-300 rounded-full"></div>
                    <div class="mt-5">
                        <h2 class="text-7xl font-bold text-neutral-100">USERNAME</h2>
                    </div>
                    <div class="grid grid-flow-col auto-cols-fr gap-12 justify-center">
                        <div>
                            <span class="text-2xl text-lime-500 font-bold">0</span>
                            <p class="text-neutral-100">FOLLOWERS</p>
                        </div>
                        <div>
                            <span class="text-2xl text-lime-500 font-bold">0</span>
                            <p class="text-neutral-100">FOLLOWING</p>
                        </div>
                        <div>
                            <span class="text-2xl text-lime-500 font-bold">0</span>
                            <p class="text-neutral-100">PLAYLIST</p>
                        </div>
                    </div>
                    <a href="#" class="text-neutral-100 px-20 border-2 py-2 mt-5 border-neutral-100 rounded-full">Logout</a>
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default Profile