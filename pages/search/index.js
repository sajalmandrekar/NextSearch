import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
// import TweetEmbed from "react-tweet-embed";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { v4 } from "uuid";
import GithubCard from "../../components/GithubCard";
import StackOverflowCard from "../../components/StackOverflowCard";
import YoutubeCard from "../../components/YoutubeCard";
import GoogleCard from "../../components/GoogleCard";

function htmlDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
}

export default function Home({ data }) {
    console.log(data);
    let { youtube, stackoverflow, github, twitter, google } = data;
    const router = useRouter();
    const { keyword } = router.query;

    return (
        <div className="max-w-6xl mx-auto">
            <Head>
                <title>nextjs - result</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <nav className="search  p-4 w-full flex items-center space-x-4 border-b ">
                <h1 className="text-3xl font-bold">Google</h1>
                <form action="search" method="get">
                    <input
                        type="text"
                        name="keyword"
                        defaultValue={keyword}
                        className="bg-[#303134] rounded-full px-4 py-2 "
                    />
                </form>
            </nav>

            <section className="searchResults max-w-6xl mx-auto px-8 my-8">
                <div className="youtube mb-12">
                    <h2 className="md:text-3xl text-xl">
                        Results from Youtube for{" "}
                        <strong>&quot;{keyword}&quot;</strong>
                    </h2>

                    <div className="cards flex items-center space-x-4 nowrap py-4 overflow-x-auto w-full scrollbar scrollbar-thumb-gray-500 ">
                        {youtube.items.map((video) => (
                            <YoutubeCard
                                key={v4()}
                                thumbnailImage={
                                    video.snippet.thumbnails.high.url
                                }
                                width={
                                    video.snippet.thumbnails.high.width || 450
                                }
                                height={
                                    video.snippet.thumbnails.high.height || 320
                                }
                                title={video.snippet.title}
                                channelName={video.snippet.channelTitle}
                                description={video.snippet.description}
                                videoId={video.id.videoId}
                            ></YoutubeCard>
                        ))}
                    </div>
                </div>

                <div className="stackoverflow mb-12 ">
                    <h2 className="text-3xl">
                        Results from StackOverflow for{" "}
                        <strong>&quot;{keyword}&quot;</strong>
                    </h2>

                    <div className="cards flex items-center space-x-4 nowrap py-4 overflow-x-auto w-full scrollbar-thin scrollbar-thumb-gray-500 ">
                        {stackoverflow.items.map((question) => (
                            <StackOverflowCard
                                key={v4()}
                                title={question.title}
                                owner={question.owner}
                                view_count={question.view_count}
                                answer_count={question.answer_count}
                                link={question.link}
                                tags={question.tags}
                            ></StackOverflowCard>
                        ))}
                    </div>
                </div>

                <div className="github mb-12 ">
                    <h2 className="text-3xl">
                        Results from Github for{" "}
                        <strong>&quot;{keyword}&quot;</strong>
                    </h2>

                    <div className="cards flex space-x-4 nowrap py-4 overflow-x-auto w-full scrollbar-thin scrollbar-thumb-gray-500 items-stretch ">
                        {github.items.map((repo) => (
                            <GithubCard
                                owner={repo.owner}
                                description={repo.description}
                                stargazers_count={repo.stargazers_count}
                                name={repo.name}
                                key={v4()}
                                repo_url={repo.html_url}
                            />
                        ))}
                    </div>
                </div>

                <div className="google mb-12 ">
                    <h2 className="text-3xl">
                        Results from Google for{" "}
                        <strong>&quot;{keyword}&quot;</strong>
                    </h2>

                    <div className="cards flex items-center space-x-4 nowrap py-4 overflow-x-auto w-full scrollbar-thin scrollbar-thumb-gray-500 ">
                        {google.items.map((question) => (
                            <GoogleCard
                                title={question.title}
                                link={question.link}
                                snippet={question.snippet}
                                key={v4()}
                            ></GoogleCard>
                        ))}
                    </div>
                </div>

                <div className="twitter mb-12 ">
                    <h2 className="text-3xl">
                        Results from Twitter for{" "}
                        <strong>&quot;{keyword}&quot;</strong>
                    </h2>

                    <div className="cards items-stretch flex space-x-4 nowrap py-4 overflow-x-auto w-full scrollbar-thin scrollbar-thumb-gray-500 ">
                        {twitter.statuses.map((tweet) => (
                            <TwitterTweetEmbed
                                key={v4()}
                                tweetId={tweet.id_str}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export async function getServerSideProps(context) {
    const { keyword } = context.query;

    const youtube = await fetch(
        `http://localhost:3000/api/youtube/?keyword=${keyword}`
    );
    const stackoverflow = await fetch(
        `http://localhost:3000/api/stackoverflow/?keyword=${keyword}`
    );
    const twitter = await fetch(
        `http://localhost:3000/api/twitter/?keyword=${keyword}`
    );
    const github = await fetch(
        `http://localhost:3000/api/github/?keyword=${keyword}`
    );
    const google = await fetch(
        `http://localhost:3000/api/google/?keyword=${keyword}`
    );

    // const data = await res.json();
    const data = {
        youtube: await youtube.json(),
        stackoverflow: await stackoverflow.json(),
        github: await github.json(),
        twitter: await twitter.json(),
        google: await google.json(),
    };
    // const data = {};

    return {
        props: { data }, // will be passed to the page component as props
    };
}
