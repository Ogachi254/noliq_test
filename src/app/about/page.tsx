import Image from 'next/image';

export default function About() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Welcome Message */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#29AB87' }}>
            WELCOME TO OUR SITE
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From zero-proof cocktails to full-on global adventures.
          </p>
        </section>

        {/* Story Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-dark">Meet Our Founder</h2>
              <p className="text-lg text-gray-700 mb-6">
                In 2022, I started Atlanta is go-to mobile non-alcoholic bar—serving bold, beautiful drinks without the booze. My mission was simple: to make the social scene more inclusive, sophisticated, and fun for everyone, regardless of what is in their glass.
              </p>
              <p className="text-gray-600 mb-6">
                I mixed handcrafted cocktails, curated unforgettable zero-proof experiences, and helped bars, restaurants, and event planners reimagine what a great drink could be.
              </p>
              <p className="text-gray-600 mb-6">
                But as my community grew, so did my vision. Today, I have taken everything I loved—connection, culture, curated flavor—and expanded it across the globe through intentional, alcohol-free travel.
              </p>
              <p className="text-gray-600 mb-6">
                What began as local sober experiences evolved into highly rated global sober sojourns. Think of us as The Social Travel Company. I create journeys where you can have a bush breakfast at sunrise, sleep like an A-list celebrity (that you are of course), sip NA coladas from a coconut at sunset, and build lasting friendships without needing alcohol to connect.
              </p>
              <p className="text-gray-600 mb-6">
                I still love to make a good alc-free cocktail—but now I am mixing mocktails in Marrakech, not just Midtown. If you are craving adventure, meaning, and community—without the hangover—you are in the right place.
              </p>
              <p className="text-accent font-bold text-lg">This is THE new... Travel well. Stay present. Come alive.</p>
            </div>
            <div className="rounded-xl overflow-hidden aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
                alt="Founder portrait"
                width={687}
                height={687}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* CTA - Fixed Version */}
        <section className="bg-[#121212] text-white rounded-xl p-12 text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Welcome to Our New Website</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We have created this space to help you explore intentional, alcohol-free travel with unforgettable experiences worldwide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#29AB87] hover:bg-[#1f8a6d] text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Browse Experiences
            </button>
            <button className="bg-transparent hover:bg-white/10 border border-white text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Stay Connected
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}