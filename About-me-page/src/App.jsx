import React from "react";

const App = () => {
  return (
    <div className="p-[10rem]">
      <header className="flex gap-[5rem]">
        <div className="h-[150px] w-[150px] rounded-full overflow-hidden">
          <img src="./profile.jpg" className="w-[150px] top-[-10px] relative" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold">Alex Skyler</h2>
          <p className="text-lg">Male</p>
          <p className="text-lg">Age: 29</p>
        </div>
      </header>
      <main className="my-[50px]">
        <section className="my-[20px]">
          <h2 className="text-3xl font-semibold">Introduction</h2>
          <p className="text-lg">
            Greetings! I'm Alex Skyler, an intrepid soul with a penchant for
            exploration, a passion for photography, and an insatiable curiosity
            about the ever-evolving world of technology. Welcome to my corner of
            the internet, where I share the tales of my adventures, the beauty
            captured through my lens, and my fascination with all things tech.
          </p>
        </section>
        <article>Journey Through the Unknown</article>
        <section className="my-[20px]">
          <h2 className="text-3xl font-semibold">Background</h2>
          <p className="text-lg">
            Originally hailing from the vibrant city of Aurora, I discovered my
            love for adventure at a young age. My insatiable curiosity led me to
            pursue a degree in Environmental Science, where I learned to
            appreciate the intricate connections between nature and humanity.
            The desire to explore beyond textbooks and classrooms eventually
            fueled my decision to embark on a journey across the globe.
          </p>
        </section>
        <section className="my-[20px]">
          <h2 className="text-3xl font-semibold">Adventures Unfolded</h2>
          <p className="text-lg">
            From the bustling markets of Marrakech to the serene landscapes of
            Patagonia, my adventures have taken me to the far reaches of the
            Earth. Each journey has left an indelible mark on my soul, shaping
            my perspective and deepening my appreciation for the diversity of
            our planet. Through my lens, I strive to capture not just the
            scenery but the emotions and stories that unfold in every corner of
            the world.
          </p>
        </section>
        <article>Intersection of Passion and Profession</article>
        <section className="my-[20px]">
          <h2 className="text-3xl font-semibold">Tech Enthusiast</h2>
          <p className="text-lg">
            Beyond my adventures, I find solace in the ever-evolving realm of
            technology. As a self-proclaimed tech enthusiast, I'm always on the
            lookout for the latest innovations that push the boundaries of
            what's possible. Whether it's experimenting with the newest gadgets
            or delving into the world of artificial intelligence, I revel in the
            fast-paced landscape of the tech industry.
          </p>
        </section>
        <section className="my-[20px]">
          <h2 className="text-3xl font-semibold">Let's Connect</h2>
          <p className="text-lg">
            I believe in the power of collaboration and community. If you share
            a passion for exploration, photography, or technology, I invite you
            to join me on this journey. Let's connect, share our stories, and
            inspire each other to explore the wonders of our world.
          </p>
        </section>
        <section className="my-[20px]">
          <h2 className="text-3xl font-semibold">Contact Information</h2>
          <p className="text-lg">
            Feel free to reach out! You can connect with me via email at
            alex.skyler@imaginaryadventures.com or follow me on Instagram for a
            visual glimpse into my adventures.
          </p>
        </section>
        <section className="my-[20px]">
          <h2 className="text-3xl font-semibold"></h2>
          <p className="text-lg"></p>
        </section>
        <section className="my-[20px]">
          <h2 className="text-3xl font-semibold"></h2>
          <p className="text-lg"></p>
        </section>
        <section className="my-[20px]">
          <h2 className="text-3xl font-semibold"></h2>
          <p className="text-lg"></p>
        </section>
      </main>
      <footer>
        <p>
          This "About Me" page provides a glimpse into Alex Skyler's background,
          adventures, and passions, creating a narrative that invites readers to
          join in the exploration and celebration of the diverse facets of life.
        </p>
      </footer>
    </div>
  );
};

export default App;
