import { motion } from "framer-motion";

export default function CustomLoader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 2, // adjust duration to your liking
          easing: "easeInOut",
        },
      }}
      style={{
        position: 'fixed', // Fixed positioning
        top: 0, // From the top
        left: 0, // From the left
        width: '100vw', // Full viewport width
        height: '100vh', // Full viewport height
        backgroundColor: 'gray', // White background
        display: 'flex', // To center the images
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        zIndex: 9999, // Ensure it's on top of other elements
      }}
    >
      {/* White tree image */}
      <motion.img
        src="./assets/whiteTree.svg"
        className="w-[200px] h-[200px]"
        alt="White tree"
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: {
            duration: 2, // same duration as the container
            easing: "easeInOut",
          },
        }}
        style={{ position: 'absolute' }} // Add this line
      />
      {/* Green tree image */}
      <motion.img
        src="./assets/greenTree.svg"
        className="w-[200px] h-[200px]"
        alt="Green tree"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 2, // same duration as the container
            easing: "easeInOut",
          },
        }}
        style={{ position: 'absolute' }} // Add this line
      />
    </motion.div>
  );
}
