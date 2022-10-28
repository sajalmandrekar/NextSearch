import { v4 } from "uuid";

function StackOverflowCard({
    title,
    owner,
    view_count,
    answer_count,
    link,
    tags,
}) {
    return (
        <div className="stackoverflowcard github shrink-0 bg-white text-black border-gray-400 border px-4 py-4 w-[400px] max-w-sm rounded-lg shadow shadow-white flex justify-between flex-col gap-2">
            <div className="top">
                <a
                    className="font-semibold inline-block mb-3 hover:underline"
                    href={link}
                >
                    {title.replaceAll("&#39;", "'")}
                </a>
                <div className="userData flex mb-2 text-sm">
                    <img
                        src={owner.profile_image}
                        alt="dp"
                        className="rounded-full object-cover block w-6 h-6"
                    />
                    <span className="inline-block ml-2">
                        {owner.display_name}
                    </span>
                </div>
                <div className="tags">
                    Tags:
                    {tags.map((tag) => (
                        <span
                            className="p-1 bg-blue-300 text-black text-xs ml-2 rounded text-center min-w-[150px]"
                            key={v4()}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="text-xs text-secondary text-right mt-2">
                <span className="mr-1 votes">{view_count} views</span>
                <span className="mr-1 votes">{answer_count} answers</span>
            </div>
        </div>
    );
}

export default StackOverflowCard;
