import ContactForm from "../sub/ContactMeForm";

const Contact = () => {
    return (
        <div className="flex flex-col md:flex-row md:h-screen w-full overflow-hidden bg-[#080712] scale-100 pb-6">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-4 md:mt-56 md:ml-20">
                    <h2 className="text-3xl text-white font-semibold mb-4">Let&apos;s Connect!</h2>
                    <p className="text-white md:text-2xl text-justify">
                        Your thoughts and inquiries are important to me. Whether you have questions,
                        feedback, or any ideas you would like to share, my inbox is always open.
                        Please feel free to reach out to me using the contact form. I value your
                        input and will respond promptly to your message.
                    </p>
                </div>
                <div className="w-full md:mx-32 h-full md:flex justify-center items-center">
                    <ContactForm />
                </div>
            </div>

            <div className="w-full h-full absolute">
                <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
                    <video
                        className="w-full h-auto"
                        preload="false"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/bg3-s.mp4"
                    />
                </div>
            </div>
        </div>
    )
}

export default Contact;
