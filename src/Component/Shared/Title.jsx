

const Title = ({title,center}) => {
    return (
        <div className={`text-xl md:text-4xl text-primary font-semibold text-${center}`}>
            {title}
        </div>
    );
};

export default Title;