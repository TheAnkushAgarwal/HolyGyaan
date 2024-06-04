import SectionWrapper from "@/components/SectionWrapper"
import Feature1 from "@/public/images/gita.jpeg"
import Feature2 from "@/public/images/bible.png"
import Image from "next/image"

const VisualFeatures = () => {

    const features = [
        {
            title: "Bhagavad Gita",
            desc: "The Bhagavad Gita is a 700-verse Hindu scripture in the Mahabharata, presenting a dialogue between Prince Arjuna and the god Krishna, who serves as his charioteer. It covers key philosophical and ethical issues, focusing on duty, righteousness, and the path to spiritual enlightenment.",
            img: Feature1
        },
        {
            title: "Holy Bible",
            desc: "The Holy Bible is a collection of sacred texts central to Christianity, comprising the Old and New Testaments. It encompasses the creation of the world, the history of Israel, the life and teachings of Jesus Christ, and moral and spiritual guidance for believers. ",
            img: Feature2
        },
    ]
    return (
        <SectionWrapper>
            <div className="custom-screen text-gray-300">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
                        Take your spiritual knowledge to the next level with HolyGyaan
                    </h2>
                    <p className="mt-3">
                        With HolyGyaan's powerful features, you can easily ask and make queries from holybooks.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="space-y-8 gap-x-6 sm:flex sm:space-y-0">
                        {
                            features.map((item, idx) => (
                                <li className="flex-1 flex flex-col justify-between border border-gray-800 rounded-2xl" key={idx}
                                    style={{
                                        background: "radial-gradient(141.61% 141.61% at 29.14% -11.49%, rgba(203, 213, 225, 0.15) 0%, rgba(203, 213, 225, 0) 57.72%)"
                                    }}
                                >
                                    <div className="p-8">
                                        <h3 className="text-gray-50 text-xl font-semibold">
                                            {item.title}
                                        </h3>
                                        <p className="mt-3 sm:text-sm md:text-base">
                                            {item.desc}
                                        </p>
                                    </div>
                                    <div className="pl-8">
                                        <Image
                                            src={item.img}
                                            className="w-full ml-auto"
                                            alt={item.title}
                                        />
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default VisualFeatures