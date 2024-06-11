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
      imageUrl: './assets/blog2ImageSmall.jpg',
      title: 'Nefes Ol: Çevresel Bilinçliliğe Katkıda Bulunmanın Adresi',
      description: "Nefes Ol: Çevresel Bilinçliliğe Katkıda Bulunmanın Adresi Günümüzde, dünya çapında artan çevre sorunları",
      readMoreUrl: '/Nefes-Ol',
    },
    {
      imageUrl: './assets/blogImage3Small.jpg',
      title: 'Karbon Kredileri ve Karbon Piyasaları Nedir?',
      description: "Karbon Kredileri ve Karbon Piyasaları: Yatırımcılar İçin Rehber Karbon Kredileri ve Önemi Dünya genelinde iklim değişikliğiyle m&",
      readMoreUrl: '/Karbon-Kredileri',
    },
  ];

  const [loading, setLoading] = useState(true);
  const imageUrls = ['./assets/blogImage.svg', './assets/blog2ImageSmall.jpg', './assets/blogImage3Small.jpg']; // Replace with your image URLs

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
    <div className="pt-40 md:pb-20 flex flex-col items-center justify-center">
      <p className=" text-bgGreen text-center text-[40px]">Learn more about contribution to the ecosystem</p>
      <div className="flex items-center justify-center py-10">
        <div className="flex flex-row flex-wrap items-center lg:w-[1240px] justify-center max-sm:px-4">
          <div className="flex flex-wrap justify-center w-full">
            {blogPosts.map((post, index) => (
              <div className="w-full max-sm:w-full md:w-1/3 pb-10 flex justify-center" key={index}>
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
    </div>

  )
}

export default Blog
