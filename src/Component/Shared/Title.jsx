

const Title = ({title,center}) => {
    return (
        <div className={`md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto text-xl lg:text-3xl  text-secondary font-semibold text-${center}`}>
            {title}
        </div>
    );
};

export default Title;