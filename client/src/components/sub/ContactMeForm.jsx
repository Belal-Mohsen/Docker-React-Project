import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const form = useRef();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let hasErrors = false;
        if (!formData.name) {
            toast.error('Name is required');
            hasErrors = true;
        }
        if (!formData.email) {
            toast.error('Email is required');
            hasErrors = true;
        } else if (!validateEmail(formData.email)) {
            toast.error('Email is invalid');
            hasErrors = true;
        }
        if (!formData.subject) {
            toast.error('Subject is required');
            hasErrors = true;
        }
        if (!formData.message) {
            toast.error('Message is required');
            hasErrors = true;
        }

        if (!hasErrors) {
            try {
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });

                emailjs.sendForm(
                    import.meta.env.VITE_APP_SERVICE_ID,
                    import.meta.env.VITE_APP_TEMPLATE_ID,
                    form.current,
                    import.meta.env.VITE_APP_PUBLIC_KEY
                )
                    .then((result) => {
                        console.log(result.text);
                        toast.success("Message sent successfully!");
                    }, (error) => {
                        toast.error("Failed to send message. Please try again." + error.text);
                        console.log(error.text);
                    });
            } catch (error) {
                toast.error("Failed to send message. Please try again.");
                console.log(error)
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className='z-20 mx-6 mb-16 md:w-1/2'
        >
            <ToastContainer />
            <form ref={form} onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="subject">
                        Subject
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="subject" type="text" placeholder="Subject" value={formData.subject} onChange={handleChange} />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        style={{ width: '100%', height: '200px' }} ></textarea>
                </div>
                <div className="flex w-full justify-end">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-9 rounded-[30px] focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Send
                    </motion.button>
                </div>
            </form>
        </motion.div>
    );
}

export default ContactForm;
