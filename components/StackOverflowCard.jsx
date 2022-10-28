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
        <div className="stackoverflowcard border border-gray-400 rounded-lg px-4 py-4 flex items-center space-x-4 shrink-0 max-w-md">
            <div className="right text-xs flex flex-col justify-items-center whitespace-nowrap">
                <span className="votes">{view_count} views</span>
                <span className="votes">{answer_count} answers</span>
            </div>
            <div className="left">
                <a
                    className="text-lg font-semibold inline-block mb-3"
                    href={link}
                >
                    {title}
                </a>
                <div className="userData flex mb-2">
                    <img
                        src={owner.profile_image}
                        alt="dp"
                        width="20px"
                        height="20px"
                        className="rounded-full object-cover"
                    />
                    <span className="inline-block ml-1">
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
                <div className="text-xs text-secondary text-right">
                    <span className="mr-1 votes">{view_count} views</span>
                    <span className="mr-1 votes">{answer_count} answers</span>
                </div>
            </div>
        </div>
    );
}

export default StackOverflowCard;
