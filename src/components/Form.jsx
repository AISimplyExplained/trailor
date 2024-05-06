import { motion } from 'framer-motion';
import useStore from "../../useStore.js"; // Import your Zustand store
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useState, useEffect } from 'react';
import { Loader } from '../Loader'; // Use named import instead.

const Form = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false); // State to control the loader
    const loadingStates = [
        { text: 'Fetching Travel Information' },
        { text: 'Cumulating Information about the destination' },
        { text: 'Finding delicious food havens' },
        { text: 'Finding fun places' },
        { text: 'Finding some activities' },
        { text: 'Creating the itinerary' },
        { text: 'Have Fun!' }
    ];

    useEffect(() => {
        if (loading) {
            const timer = setTimeout(() => {
                navigate('/itinerary');
            }, 14000); // Wait for 5 seconds before navigating

            return () => clearTimeout(timer);
        }
    }, [loading, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true); // Show the loader when the form is submitted
    };

    // Animation settings for each form field
    const fieldVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.2, duration: 0.5 }
        })
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            {loading ? (
                <Loader loading={loading} loadingStates={loadingStates} duration={2000} loop={true} />
            ) : (
                <>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-center mb-8 text-3xl font-medium text-gray-900 dark:text-gray-50 sm:text-3xl"
                    >
                        Just a few more <span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">details</span>
                    </motion.h2>
                    <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                        {/* Origin Field */}
                        <motion.div
                            variants={fieldVariants}
                            initial="hidden"
                            animate="visible"
                            custom={0}
                            className="flex flex-wrap -mx-3 mb-6"
                        >
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2" htmlFor="origin">
                                    Origin
                                </label>
                                <input style={{ backgroundColor: '#0a0a0a' }} className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500 dark:border-gray-700 dark:text-gray-400 dark:focus:bg-gray-700" id="origin" type="text" placeholder="Enter your starting point" />
                            </div>
                        </motion.div>

                        {/* Date of Travel Field */}
                        <motion.div
                            variants={fieldVariants}
                            initial="hidden"
                            animate="visible"
                            custom={0.5}
                            className="flex flex-wrap -mx-3 mb-6"
                        >
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2" htmlFor="date">
                                    Date of Travel
                                </label>
                                <input style={{ backgroundColor: '#0a0a0a' , colorScheme:"dark"}} className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500 dark:border-gray-700 dark:text-gray-400 dark:focus:bg-gray-700" id="date" type="date" />
                            </div>
                        </motion.div>

                        {/* Number of Days Field */}
                        <motion.div
                            variants={fieldVariants}
                            initial="hidden"
                            animate="visible"
                            custom={1}
                            className="flex flex-wrap -mx-3 mb-6"
                        >
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2" htmlFor="days">
                                    Number of Days
                                </label>
                                <input style={{ backgroundColor: '#0a0a0a' }} className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500 dark:border-gray-700 dark:text-gray-400 dark:focus:bg-gray-700" id="days" type="number" placeholder="e.g. 5" />
                            </div>
                        </motion.div>

                        {/* Budget Field */}
                        <motion.div
                            variants={fieldVariants}
                            initial="hidden"
                            animate="visible"
                            custom={1.5}
                            className="flex flex-wrap -mx-3 mb-6"
                        >
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2" htmlFor="budget">
                                    Budget
                                </label>
                                <input style={{ backgroundColor: '#0a0a0a' }} className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500 dark:border-gray-700 dark:text-gray-400 dark:focus:bg-gray-700" id="budget" type="text" placeholder="Your budget in INR" />
                            </div>
                        </motion.div>

                        {/* Vibe Field */}
                        <motion.div
                            variants={fieldVariants}
                            initial="hidden"
                            animate="visible"
                            custom={2}
                            className="flex flex-wrap -mx-3 mb-6"
                        >
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2" htmlFor="vibe">
                                    Vibe
                                </label>
                                <select style={{ backgroundColor: '#0a0a0a' }} className="block w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500 dark:border-gray-700 dark:text-gray-400 dark:focus:bg-gray-700" id="vibe">
                                    <option>Adventurous</option>
                                    <option>Relaxing</option>
                                    <option>Cultural</option>
                                    <option>Party</option>
                                </select>
                            </div>
                        </motion.div>

                        <div className="flex items-center justify-center">
                            <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
                                <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
                                <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
                                    Submit
                                </span>
                            </button>
                        </div>
                    </form>
                </>
            )}
        </div>
    );
};

export default Form;
