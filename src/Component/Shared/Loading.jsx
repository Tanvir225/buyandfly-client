import logo from "/logo.svg";

const Loading = () => {
    return (
        <div className={`h-[100vh] w-full flex justify-center items-center`}>
            <img src={logo} alt="logo"  className="w-44 h-full"/>
        </div>
    );
};

export default Loading;