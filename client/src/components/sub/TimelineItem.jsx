import { motion } from 'framer-motion';

const TimelineItem = ({ data, isLast }) => (
    <div className="relative flex flex-col md:flex-row items-center text-left mb-8">
        {!isLast && (
            <motion.div
                className="hidden md:flex absolute top-8 left-8 -ml-px h-full border-l-2 border-gray-400"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                originY={0}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ originY: 'bottom' }}
            ></motion.div>
        )}

        <motion.div
            className="w-16 h-16 rounded-full flex items-center justify-center bg-blue-500 text-white text-2xl font-bold z-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 80 }}
        >
            {data.icon}
        </motion.div>

        <div className="flex flex-col justify-center items-center md:items-start md:ml-6 mt-4 md:mt-0 z-10">
            <h3 className="text-lg font-bold text-white">{data.title}</h3>
            {/* <span className="text-sm text-gray-400 block mt-2">{data.specialty}</span> */}
            <p className="mt-1 text-white">{data.specialty}</p>
            <span className="text-sm text-gray-400">{data.institution}</span>
        </div>
    </div>
);

export default TimelineItem;
