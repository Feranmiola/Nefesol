import useScrollToTop from "@/hooks/ScrollToTop";
import { motion } from "framer-motion"// BlogCard.tsx
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
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
    useScrollToTop();
    const navigate = useNavigate();
    const {t} = useTranslation();
    return (
      <div className="flex flex-col  w-[350px] rounded-[16px] border-[1px] border-[#9BBBAB]">
        <div>
          <img
            src={imageUrl}
            alt="blogImage"
            className="rounded-t-[16px] max-h-[212px] w-full"
          />
        </div>
        <div className="p-5 space-y-5">
          <p className="text-bgGreen text-[24px]">{title}</p>
          <p className="text-[16px] text-bgGreen w-[302px]">{description}</p>
          <div>
            <motion.a
              whileHover={{ scale: 1.13 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate(readMoreUrl)}
              className="text-linkGreen text-bold cursor-pointer"
            >
              {t('readMore')}
            </motion.a>
          </div>
        </div>
      </div>
    );
  };
  
  export default BlogCard;