export default function HeroCenteredwithSimpleHeaderDark() {
  return (
    <>
      {/* Hero Section: Centered with Simple Header Dark */}
      <div className="dark">
        <div className="relative overflow-hidden bg-gray-900 text-gray-100">
          {/* Hero Content */}
          <div className="container relative mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
            <div className="text-center">
              <h1 className="mb-4 text-4xl font-black text-white">
                About
                <span className=" text-purple-500">HolyGyaan</span>
              </h1>
              <h2 className="mx-auto text-xl font-medium leading-relaxed text-gray-300 lg:w-2/3">
                Discover wisdom from the Bible and the Bhagavad Gita. Ask your
                questions and receive personalized insights from sacred texts.
                Journey towards spiritual enlightenment with HolyGyaan today.
              </h2>
            </div>
            <div className="flex flex-col gap-2 pb-28 pt-10 sm:flex-row sm:items-center sm:justify-center">
              <a
                href="bible"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-purple-700 bg-purple-700 px-7 py-3.5 font-semibold leading-6 text-white hover:border-purple-600 hover:bg-purple-600 hover:text-white focus:ring  active:border-purple-700 active:bg-purple-700 focus:ring-purple-400/90"
              >
                <span>Try Now</span>
              </a>
            </div>

            <div className="relative mx-5 lg:mx-32">
              <div className="bg-tranparent absolute left-0 top-0 -ml-20 -mt-16 size-40 rounded-full border border-purple-900 lg:size-72" />
              <div className="bg-tranparent absolute left-0 top-0 -ml-14 -mt-20 size-40 rounded-full border border-purple-950 lg:size-72" />
              <div className="bg-tranparent absolute bottom-0 right-0 -mb-16 -mr-20 size-40 rounded-full border border-purple-900 lg:size-72" />
              <div className="bg-tranparent absolute bottom-0 right-0 -mb-20 -mr-14 size-40 rounded-full border border-purple-950 lg:size-72" />
              <div className="absolute inset-0 -m-6 -rotate-2 rounded-xl  bg-gray-800 lg:-m-8" />
              <div className="absolute inset-0 -m-6 rotate-1 rounded-xl shadow-inner bg-purple-900/75 lg:-m-8" />
              <img
                src="/images/aboutus.jpeg"
                className="relative mx-auto rounded-lg shadow-lg"
                alt="Hero Image"
              />
            </div>
          </div>
          <div className="flex-col gap-2 pb-28 pt-10 sm:flex-row sm:items-center sm:justify-center">
            <h2 className="mx-auto text-xl font-bold leading-relaxed text-gray-300 lg:w-2/3">
              Introduction
            </h2>
            <h3 className="mx-auto text-md font-medium leading-relaxed text-gray-300 lg:w-2/3">
              Welcome to HolyGyaan, your trusted companion on the journey to
              spiritual enlightenment. HolyGyaan harnesses the power of advanced
              artificial intelligence to bring you wisdom from sacred texts such
              as the Bible and the Bhagavad Gita. Whether you are seeking
              answers to life's profound questions, ethical guidance, or a
              deeper understanding of spiritual concepts, HolyGyaan is here to
              provide thoughtful and relevant insights.
            </h3><br/>


            <h2 className="mx-auto text-xl font-bold leading-relaxed text-gray-300 lg:w-2/3">
                Our Mission
            </h2>
            <h3 className="mx-auto text-md font-medium leading-relaxed text-gray-300 lg:w-2/3">
            At HolyGyaan, our mission is to make the timeless wisdom of holy scriptures accessible to everyone, regardless of their background or beliefs. We believe that the teachings contained in these texts can offer valuable guidance and inspiration, helping individuals navigate the complexities of modern life with clarity and purpose.
            </h3><br/>

            <h2 className="mx-auto text-xl font-bold leading-relaxed text-gray-300 lg:w-2/3">
            How HolyGyaan Works
            </h2>
            <h3 className="mx-auto text-md font-medium leading-relaxed text-gray-300 lg:w-2/3">
            HolyGyaan utilizes state-of-the-art AI technology to process your queries and search through the Bible and the Bhagavad Gita. Here's how it works:<br/> <br/>
            User Query: You type in your question or topic of interest.<br/>
            AI Processing: Our AI analyzes the query to understand its context and intent.<br/>
            Content Search: The AI searches through the Bible and the Bhagavad Gita to find relevant passages and teachings.<br/>
            Response Generation: The AI compiles the findings and generates a comprehensive response, often providing multiple perspectives from the sacred texts.<br/>
            Delivery: You receive a thoughtful and insightful answer to your query, complete with relevant passages and contextual explanations.

            </h3><br/>
          </div>
          {/* END Hero Content */}
        </div>
      </div>
      {/* END Hero Section: Centered with Simple Header Dark */}
    </>
  );
}
