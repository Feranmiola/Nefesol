import { motion } from "framer-motion"// BlogCard.tsx
interface BlogCardProps {
    imageUrl: string;
    title: string;
    description: string;
    readMoreUrl: string;
  }
  
  const BlogCard: React.FC<BlogCardProps> = ({
    imageUrl,
    title,
    description,
    readMoreUrl,
  }) => {
    return (
      <div className="flex flex-col  w-[350px] rounded-[16px] border-[1px] border-[#9BBBAB]">
        <div>
          <img
            src={imageUrl}
            alt="blogImage"
            className="rounded-t-[16px]"
          />
        </div>
        <div className="p-5 space-y-5">
          <p className="text-bgGreen text-[24px]">{title}</p>
          <p className="text-[16px] text-bgGreen w-[302px]">{description}</p>
          <div>
            <motion.a
              whileHover={{ scale: 1.13 }}
              whileTap={{ scale: 0.9 }}
              href={readMoreUrl}
              className="text-linkGreen text-bold cursor-pointer"
            >
              Read More
            </motion.a>
          </div>
        </div>
      </div>
    );
  };
  
  export default BlogCard;