import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center relative">
            <Head>
                <title>NextSearch</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* <img
                src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
                alt="logo"
                className="absolute w-20 h-20 object-contain"
            ></img>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
                alt="logo"
                className="absolute w-20 h-20 object-contain"
            ></img>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFFfFfWc1kVRvfJWuttlp1ZgF3BsYZEjUhag&usqp=CAU"
                alt="logo"
                className="absolute w-20 h-20 object-contain"
            ></img>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
                alt="logo"
                className="absolute w-20 h-20 object-contain -bottom-16 right-10"
            ></img> */}

            <section className="max-w-5xl mx-auto flex flex-col justify-center items-center relative">
                <h1 className="lg:text-9xl md:text-7xl text-4xl text-white mb-4 leading-normal font-bold">
                    NextSearch
                </h1>
                <form action="search" method="get" className="w-full">
                    <input
                        type="text"
                        name="keyword"
                        placeholder="Start typing to search"
                        className="bg-[#303134] rounded-full p-4 px-6  w-full"
                    />
                </form>
            </section>

            <span className="flex items-center absolute bottom-0 text-center p-4">
                <span>Powered by</span>
                <img
                    src="https://cci-codecrunch.github.io/codecrunch22/assets/logo.svg"
                    alt="cc logo"
                    className="w-32 object-contain mx-4"
                />
                <span>
                    and the{" "}
                    <span className="text-green-400 text-lg">Triads</span>
                </span>
            </span>
        </div>
    );
}
