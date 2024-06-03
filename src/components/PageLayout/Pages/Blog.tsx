
import { useLayoutEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { ThreeDots } from 'react-loader-spinner'

interface BlogPost {
  imageUrl: string;
  title: string;
  description: string;
  readMoreUrl: string;
}

const Blog = () => {

  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 500); // Delay of 2 seconds
  }, []);

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

  if(loading){
    return (
      <div className='w-screen h-screen bg-white flex items-center justify-center minw-[100vh]'>
        <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#0A4519"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
      </div>
    );
  }else{
    return (
      <div className="pt-40 pb-20">
        <p className="ml-[159px] text-bgGreen text-[40px]">Learn more about contribution to the ecosystem</p>
        <div className="flex items-center justify-center py-10">        
          <div className="flex flex-row flex-wrap items-center w-[1240px] justify-center px-5">
            {blogPosts.map((post, index) => (
              <div className="w-1/3 pb-10 -mx-2.5" key={index}>
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
}

export default Blog