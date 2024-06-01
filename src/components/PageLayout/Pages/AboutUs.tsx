import Testimonials from './HomeComponents/Testimonials'
import TrestedGroup from './HomeComponents/TrestedGroup'

const AboutUs = () => {
  return (
    <div className='py-20'>

        <div className='items-center justify-center flex flex-col py-20 space-y-5'>
            <p className=' text-linkGreen font-semibold text-[16px]'>ABOUT US</p>
            <p className='text-bgGreen text-[40px] text-center font-medium w-[645px]'>We are building an environmentally friendly future</p>

        </div>
        <div className='flex items-center justify-center flex-col space-y-10'>
            <div className='flex flex-row space-x-10 items-center justify-center'>
                <div className='flex flex-col space-y-10'>
                    <p className='text-[16px] text-bgGreen w-[536px]'>Erma Group A.Ş is a software company founded in 2020 at Gaziantep University Technopark. Our Mission is to build an environmentally friendly future by offering solutions to the global warming problem with green technologies. The protection and sustainability of our environment is one of our company's core values. In 2015, our CEO's Kyoto Protocol; Inspired by the Paris Agreement and the Paris Agreement, his vision is the power of technology in the fight against global warming; is to use. This vision has become the focal point of our company and has led us to produce green technologies.</p>
                    <p className='text-[16px] text-bgGreen w-[536px]'>Our website, Nefesol.com, is a platform that shares this mission and brings together a community with high environmental awareness around the world. Our aim is to encourage people to conserve natural resources and to contribute to the stabilization of the ecosystem. Our motto is "Every Tree" One Breath" and tells us the values that nature offers us. One breath of a tree is the oxygen that shapes our future. With this slogan, we emphasize the importance of respecting nature and taking responsibility for a sustainable future.</p>
                </div>
                <div className='aboutUsBG w-[539px] h-[432px] flex flex-col px-8 rounded-[14.03px] space-y-6'>
                    <div className='mt-[241px] flex flex-col'>
                        <p className="text-white text-[40px]  leading-tight">Each tree; a breath,</p>
                        <p className="text-white text-[40px]  leading-tight">every breath is a hope!.</p>
                    </div>
                    <img
                        src="./assets/whiteTree.svg"
                        alt="white tree"
                        className="w-[30.07px] h-[28.27px] bottom-0"
                    />
                </div>

            </div>

            <div>
                <p className='text-bgGreen text-[16px] w-[1120px]'>You too can contribute to environmental awareness and sustainability by joining  Nefesol.com. In our content, you can find informative articles about green technologies, news about environmentally friendly products and projects. At the same time, you can learn what you can do individually and switch to an eco-friendly lifestyle. Conservation of natural resources and combating climate change are the responsibility of all of us. As Nefesol.com, the power of technology for a sustainable future; We are committed to using We invite you to Nefesol.com and hope to work together for an environmentally friendly world. Take a step for a healthy and sustainable future.</p>
            </div>

        </div>
        <div>
            <Testimonials/>
            <TrestedGroup/>
        </div>
    </div>
  )
}

export default AboutUs