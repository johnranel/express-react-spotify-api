import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Main = ({ children }) => {
    const path = window.location.pathname;
    const [displayNameInitial, setDisplayNameInitial] = useState('');

    useEffect(() => {
        const getDisplayNameInitial = window.localStorage.getItem('display_name') ? window.localStorage.getItem('display_name')[0].toLocaleUpperCase() : "";
        setDisplayNameInitial(getDisplayNameInitial);
    }, [])

    return (
        <main className="bg-gradient-to-b grid from-neutral-500 via-neutral-800 to-neutral-900">
            <Header displayNameInitial={displayNameInitial} />
            <Link to="/" className="place-self-center mt-10 w-[50px] h-[50px] block md:hidden bg-teal-300 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">{displayNameInitial}</span>
            </Link>
            <section className="grid order-2 md:order-1 py-10">
                <div className={`container px-10 ${path === "/" ? "flex flex-col gap-5 items-center justify-center py-20" : "pb-10" } place-self-center bg-neutral-100 bg-opacity-10 rounded-xl min-h-screen`}>
                    {children}
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default Main