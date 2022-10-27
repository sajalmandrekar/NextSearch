import Image from "next/image";

function YoutubeCard({
    thumbnailImage,
    width,
    height,
    title,
    description,
    channelName,
    videoId,
}) {
    return (
        <div className="youtubeCard w-72 transition-all hover:bg-[#17181a] p-4 rounded-lg shrink-0 overflow-hidden">
            <a href={`https://www.youtube.com/watch?v=${videoId}`}>
                <img
                    src={thumbnailImage}
                    className="w-full h-auto max-w-full rounded-3xl object-fill"
                />
            </a>
            {/* <Image
                src={thumbnailImage}
                layout="responsive"
                width={width}
                height={height}
                className="rounded-lg"
            /> */}
            <div className="channelmeta my-4">
                <h3
                    className="video__title text-lg mb-2"
                    style={{
                        display: "-webkit-box",
                        "-webkit-line-clamp": "2",
                        "-webkit-box-orient": "vertical",
                        overflow: "hidden",
                    }}
                    title={title}
                >
                    {title}
                </h3>
                <span className="text-xs text-slate-500">{channelName}</span>
                <p className="description text-sm text-gray-300">
                    Description: {description}
                </p>
            </div>
            <a
                href={`https://www.youtube.com/watch?v=${videoId}`}
                className="block w-full px-2 py-2 bg-[#ff0000] font-semibold rounded text-center"
            >
                Watch on YouTube
            </a>
        </div>
    );
}

export default YoutubeCard;
