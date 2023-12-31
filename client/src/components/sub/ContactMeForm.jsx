import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [submissionStatus, setSubmissionStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let tempErrors = {};
        if (!formData.name) tempErrors.name = 'Name is required';
        if (!formData.email) tempErrors.email = 'Email is required';
        else if (!validateEmail(formData.email)) tempErrors.email = 'Email is invalid';
        if (!formData.subject) tempErrors.subject = 'Subject is required';
        if (!formData.message) tempErrors.message = 'Message is required';

        setErrors(tempErrors);

        if (Object.keys(tempErrors).length === 0) {
            // Simulate form submission logic here
            try {
                // Simulated successful submission
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                setSubmissionStatus("Message sent successfully!");
            } catch (error) {
                // Simulated error in submission
                setSubmissionStatus("Failed to send message. Please try again.");
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="max-w-md mx-auto"
        >
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} />
                    {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
                    {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="subject">
                        Subject
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="subject" type="text" placeholder="Subject" value={formData.subject} onChange={handleChange} />
                    {errors.subject && <p className="text-red-500 text-xs italic">{errors.subject}</p>}
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
                    {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
                </div>
                <div className="flex items-center justify-between">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded-[30px] focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Send
                    </motion.button>
                </div>
            </form>

            {submissionStatus && <p className={`text-center font-bold ${submissionStatus.startsWith("Failed") ? 'text-red-500' : 'text-green-500'}`}>{submissionStatus}</p>}
        </motion.div>
    );
}

export default ContactForm;
