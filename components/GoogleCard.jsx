function GoogleCard({
    title,
    link,
    snippet,
}) {
    return (
        <div className="google shrink-0 bg-white text-black border-gray-400 border px-4 py-4 w-[400px] max-w-sm rounded-lg shadow shadow-white flex flex-col">
            <div className="repo flex items-center space-x-4 mb-2">

                <div className="title_desc">

                    <h3 className="text-blue-900 color:#8ab4f8 hover:underline text-xl font-bold">
                        <a href={link}>{title}</a>
                    </h3>
                </div>
            </div>
            <p className="text-secondary mb-2 text-sm grow">{snippet}</p>
            
        </div>
    );
}

export default GoogleCard;
