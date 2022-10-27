import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Khoj</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="max-w-5xl mx-auto flex flex-col justify-center items-center">
                <h1 className="text-9xl text-white mb-4 font-bold">Google</h1>
                <input type="text" className="w-full" />
            </section>
        </div>
    );
}
