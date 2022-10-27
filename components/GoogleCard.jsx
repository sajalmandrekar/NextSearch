function GoogleCard({
    title,
    link,
    snippet,
}) {
    return (
        <div className="googlecard border border-gray-400 rounded-lg px-4 py-4 flex items-center space-x-4 shrink-0 max-w-md">
            
            <div className="left">
                <a
                    className="text-lg font-semibold inline-block mb-3"
                    href={link}
                >
                    {title}
                </a>
            </div>
        </div>
    );
}

export default GoogleCard;
