import React from "react";
import Footer from "../components/Footer";
import { FaSpotify } from "react-icons/fa";

const Login = () => {
    return (
        <main className="bg-gradient-to-b grid from-neutral-500 via-neutral-800 to-neutral-900">
            <section className="grid order-2 md:order-1 py-10 h-screen md:h-[calc(100vh-60px)]">
                <div className="w-[300px] sm:w-[500px] px-10 py-10 place-self-center bg-neutral-100 bg-opacity-10 rounded-xl">
                    <div className="flex flex-col items-center jusitfy-center">
                        <FaSpotify className="text-[10rem] text-green-600" />
                        <h1 className="text-neutral-100 text-left text-xl font-bold my-5">LOGIN</h1>
                        <a className="border-green-600 border-2 text-base sm:text-xl py-3 px-10 rounded-full text-neutral-100 hover:bg-green-600 transition-all" href={process.env.REACT_APP_BACKEND_URI + `/login`}>Spotify Authentication</a>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default Login