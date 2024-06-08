import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import BeatLoader from "react-spinners/BeatLoader";


interface BlogPost {
  imageUrl: string;
  title: string;
  description: string;
  readMoreUrl: string;
}

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      imageUrl: './assets/blogImage.svg',
      title: 'Carbon Cycle',
      description: "The carbon cycle, located at the heart of our planet's environmental processes, is the biogeochemical world that provides carbon exchange between biosphere, pedosphere (earth), geosphere (earth)...",
      readMoreUrl: '/carbon-cycle',
    },
    {
      imageUrl: './assets/blogImage.svg',
      title: 'Climate Change',
      description: "Climate change is one of the most pressing issues of our time, with far-reaching consequences for our planet and its inhabitants...",
      readMoreUrl: '/blog/climate-change',
    },
    {
      imageUrl: './assets/blogImage.svg',
      title: 'Sustainability',
      description: "Sustainability is a crucial aspect of our daily lives, and it's essential that we make conscious choices to reduce our impact on the environment...",
      readMoreUrl: '/blog/sustainability',
    },
    {
      imageUrl: './assets/blogImage.svg',
      title: 'Sustainability',
      description: "Sustainability is a crucial aspect of our daily lives, and it's essential that we make conscious choices to reduce our impact on the environment...",
      readMoreUrl: '/blog/sustainability',
    },
    {
      imageUrl: './assets/blogImage.svg',
      title: 'Sustainability',
      description: "Sustainability is a crucial aspect of our daily lives, and it's essential that we make conscious choices to reduce our impact on the environment...",
      readMoreUrl: '/blog/sustainability',
    },
    {
      imageUrl: './assets/blogImage.svg',
      title: 'Sustainability',
      description: "Sustainability is a crucial aspect of our daily lives, and it's essential that we make conscious choices to reduce our impact on the environment...",
      readMoreUrl: '/blog/sustainability',
    },
  ];

  const [loading, setLoading] = useState(true);
  const imageUrls = ['./assets/blogImage.svg', './assets/blogImage.svg', './assets/blogImage.svg', './assets/blogImage.svg', './assets/blogImage.svg', './assets/blogImage.svg']; // Replace with your image URLs

  useEffect(() => {
    let loadedImages = 0;

    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedImages++;
        if (loadedImages === imageUrls.length) {
          setLoading(false);
        }
      };
    });
  }, [imageUrls]);



  if (loading) {
    return (
      <div className='w-screen h-screen bg-white flex items-center justify-center min-h-[100vh]'>
        <BeatLoader color="#0A4519" />
      </div>
    );
  }
  return (
    <div className="pt-40 md:pb-20">
    <p className="lg:ml-[159px] text-bgGreen max-md:text-[26px] max-sm:text-center text-[40px]">Learn more about contribution to the ecosystem</p>
    <div className="flex items-center justify-center py-10">
      <div className="flex flex-row flex-wrap items-center lg:w-[1240px] justify-between md:px-5">
        {blogPosts.map((post, index) => (
          <div className="w-full max-sm:w-1/1 md:w-1/3 pb-10 flex justify-center" key={index}>
            <BlogCard
              imageUrl={post.imageUrl}
              title={post.title}
              description={post.description}
              readMoreUrl={post.readMoreUrl}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Blog
