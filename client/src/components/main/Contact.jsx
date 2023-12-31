import ContactForm from "../sub/ContactMeForm"

const Contact = () => {
    return (
        <div className="flex flex-col md:flex-row gap-6 md:h-screen w-full overflow-hidden bg-[#080712] scale-100 pb-6">
            <ContactForm />

            <div className="w-full h-full absolute">
                <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
                    <video
                        className="w-full h-auto"
                        preload="false"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/bg3.mp4"
                    />
                </div>
            </div>
        </div>
    )
}

export default Contact