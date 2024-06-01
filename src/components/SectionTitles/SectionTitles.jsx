const SectionTitles = ({ title, subtitle }) => {
    return (
        <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4">{title}</h1>
            <p className="font-semibold">{subtitle}</p>
        </div>
    )
}

export default SectionTitles;