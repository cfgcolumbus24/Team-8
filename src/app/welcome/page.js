const Welcome = () => {
    return (
        <>
            <div className="bg-[url('/assets/image/welcome-screen-bg.jpg')] bg-cover bg-center bg-white/60 bg-blend-overlay w-screen h-screen overflow-hidden flex flex-col">
                <div className="flex gap-8 p-4 justify-end text-lg">
                    <a>About Us</a>
                    <a>Sign Up</a>
                    <a>Log In</a>
                </div>
                <div className="flex flex-col gap-8 flex-1 justify-center items-center">
                    <img src="/assets/image/lmcc-50-years-logo.png" className="h-64 w-auto"></img>
                    <p>Networking platform for alumni.</p>
                    <button>Connect</button>
                </div>
            </div>
    </>
    );
};

export default Welcome;