

const Title = ({title,center}) => {
    return (
        <div className={`max-w-7xl mx-auto text-xl lg:text-3xl  text-secondary font-semibold text-${center}`}>
            {title}
        </div>
    );
};

export default Title;