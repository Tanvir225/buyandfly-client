

const Title = ({title,center,size}) => {
    return (
        <div className={`text-xl md:${size ? `${size}` : 'text-4xl'} text-primary font-semibold text-${center}`}>
            {title}
        </div>
    );
};

export default Title;