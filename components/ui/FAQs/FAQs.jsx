import LayoutEffect from "@/components/LayoutEffect"
import SectionWrapper from "@/components/SectionWrapper"

const faqsList = [
    {
        q: "What is HolyGyaan?",
        a: "HolyGyaan is an AI-powered platform designed to answer your spiritual and philosophical queries by referencing sacred texts such as the Bible and the Bhagavad Gita.",
    },
    {
        q: "How does HolyGyaan work?",
        a: "HolyGyaan’s advanced AI processes your questions and searches through the Bible and the Bhagavad Gita to provide relevant and insightful answers, offering wisdom from these ancient texts.",
    },
    {
        q: "What types of questions can I ask on HolyGyaan?",
        a: "You can ask a variety of questions related to spirituality, ethics, morality, life challenges, and philosophical concepts. Our AI will provide responses grounded in the teachings of the Bible and the Bhagavad Gita.",
    },
    {
        q: "Is HolyGyaan free to use?",
        a: "Yes, HolyGyaan offers a free version for users.",
    },
    {
        q: "How accurate are the responses from HolyGyaan?",
        a: "Our AI aims to provide accurate and relevant responses by drawing directly from sacred texts. However, interpretations of religious texts can vary, and we encourage users to seek additional insights from spiritual leaders.",
    },
    {
        q: "Are there plans to include more religious texts on HolyGyaan?",
        a: "Yes, we plan to expand our database to include more religious texts from various faiths, providing a broader spectrum of spiritual guidance.",
    }
]

const FAQs = () => (
    <SectionWrapper id="faqs">
        <div className="custom-screen text-gray-300">
            <div className="max-w-xl text-center xl:mx-auto">
                <h2 className="text-gray-50 text-3xl font-extrabold sm:text-4xl">
                    Everything you need to know
                </h2>
                <p className="mt-3">
                    Here are the most questions people always ask about.
                </p>
            </div>
            <div className='mt-12'>
                <LayoutEffect
                    className="duration-1000 delay-300"
                    isInviewState={{
                        trueState: "opacity-1",
                        falseState: "opacity-0 translate-y-12"
                    }}
                >
                    <ul className='space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3'>
                        {faqsList.map((item, idx) => (
                            <li
                                key={idx}
                                className="space-y-3"
                            >
                                <summary
                                    className="flex items-center justify-between font-semibold text-gray-100">
                                    {item.q}
                                </summary>
                                <p
                                    dangerouslySetInnerHTML={{ __html: item.a }}
                                    className='leading-relaxed'>
                                </p>
                            </li>
                        ))}
                    </ul>
                </LayoutEffect>
            </div>
        </div>
    </SectionWrapper>
)

export default FAQs