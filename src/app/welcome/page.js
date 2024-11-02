const Welcome = () => {
    return (
        <>
            <div className="bg-[url('/assets/image/welcome-screen-bg.jpg')] bg-cover bg-center bg-white/75 bg-blend-overlay w-screen h-screen overflow-hidden flex flex-col">
                <div className="flex gap-8 p-4 justify-end text-lg">
                    <a href="https://lmcc.net/" target="_blank">About Us</a>
                    <a>Sign Up</a>
                    <a>Log In</a>
                </div>
                <div className="flex flex-col gap-8 flex-1 justify-center items-center">
                    <img src="/assets/image/lmcc-50-years-logo.png" className="h-64 w-auto"></img>
                    <p className="text-lg font-bold">Networking platform for alumni.</p>
                    <button className="bg-teal text-white px-4 py-2 rounded-sm">Connect with Artists</button>
                </div>
            </div>
    </>
    );
};

export default Welcome;