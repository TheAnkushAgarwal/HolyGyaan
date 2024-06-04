import SectionWrapper from "@/components/SectionWrapper"
import GradientWrapper from "@/components/GradientWrapper"
import user1 from "@/public/testimonial/user1.webp"
import user2 from "@/public/testimonial/user2.webp"
import user3 from "@/public/testimonial/user3.webp"
import user4 from "@/public/testimonial/user4.webp"
import user5 from "@/public/testimonial/user5.webp"
import user6 from "@/public/testimonial/user6.webp"
import Image from "next/image"
import LayoutEffect from "@/components/LayoutEffect"

const Testimonial = () => {

    const testimonials = [
        {
            avatar: user1,
            name: "John",
            title: "USA",
            quote: "I was amazed by HolyGyaan! I had a complex question about finding inner peace, and the AI provided me with profound insights from both the Bhagavad Gita and the Bible. It’s like having a spiritual guide right at my fingertips. Highly recommended for anyone seeking wisdom from holy texts."
        },
        {
            avatar: user2,
            name: "bob",
            title: "Canada",
            quote: "HolyGyaan is a truly unique and powerful tool. I often have questions about life and spirituality, and this site connects me with the teachings from sacred books effortlessly. The AI’s ability to find relevant passages and provide context is impressive. It's a must-visit for anyone on a spiritual journey."
        },
        {
            avatar: user3,
            name: "Sidi jeddou",
            title: "United Kingdom",
            quote: "As someone who studies multiple religions, HolyGyaan has been invaluable. Whether I'm looking for guidance from the Bible or insights from the Bhagavad Gita, the AI pulls together the wisdom I need. It's a seamless way to explore and understand different perspectives on faith and life.."
        },
        {
            avatar: user4,
            name: "Ghazbel",
            title: "Italy",
            quote: "I used HolyGyaan to help answer some tough questions I had about morality and ethics. The responses I received were enlightening and drew from both the Bible and the Bhagavad Gita. It’s like having a scholarly discussion with the great sages and prophets. Thank you, HolyGyaan!"
        },
        {
            avatar: user5,
            name: "Ana khan",
            title: "USA",
            quote: "HolyGyaan is an incredible resource for anyone looking to deepen their understanding of religious texts. The AI is quick and accurate, providing passages from holy books that I might never have found on my own. It's a wonderful blend of technology and spirituality."
        },
        {
            avatar: user6,
            name: "Ahmed khasem",
            title: "Dubai",
            quote: "I highly recommend HolyGyaan for anyone who wants to explore religious scriptures in an easy and meaningful way. The AI-driven responses are spot on, providing relevant passages and thoughtful interpretations from the Bible and the Bhagavad Gita. It has enriched my spiritual practice immensely."
        },
    ]

    return (
        <SectionWrapper>
            <div id="testimonials" className="custom-screen text-gray-300">
                <div className="max-w-2xl text-center md:mx-auto">
                    <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
                        HolyGyaan is loved by users around the world
                    </h2>
                </div>
                <GradientWrapper wrapperClassName="max-w-sm h-40 top-12 inset-x-0" className="mt-12">
                    <LayoutEffect
                        className="duration-1000 delay-300"
                        isInviewState={{
                            trueState: "opacity-1",
                            falseState: "opacity-0 translate-y-12"
                        }}
                    >
                        <ul className="grid gap-6 duration-1000 delay-300 ease-in-out sm:grid-cols-2 lg:grid-cols-3">
                            {
                                testimonials.map((item, idx) => (
                                    <li key={idx} className="p-4 rounded-xl border border-gray-800"
                                        style={{
                                            backgroundImage: "radial-gradient(100% 100% at 50% 50%, rgba(124, 58, 237, 0.05) 0%, rgba(124, 58, 237, 0) 100%)"
                                        }}
                                    >
                                        <figure className="flex flex-col justify-between gap-y-6 h-full">
                                            <blockquote className="">
                                                <p className="">
                                                    {item.quote}
                                                </p>
                                            </blockquote>
                                            <div className="flex items-center gap-x-4">
                                                <Image
                                                    src={item.avatar}
                                                    alt={item.name}
                                                    className="w-14 h-14 rounded-full object-cover"
                                                />
                                                <div>
                                                    <span className="block text-gray-50 font-semibold">{item.name}</span>
                                                    <span className="block text-sm mt-0.5">{item.title}</span>
                                                </div>
                                            </div>
                                        </figure>
                                    </li>
                                ))
                            }
                        </ul>
                    </LayoutEffect>
                </GradientWrapper>
            </div>
        </SectionWrapper>
    )
}

export default Testimonial