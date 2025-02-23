import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaXTwitter, FaEnvelope } from "react-icons/fa6";

export default function About() {
  return (
    <div>
      <Navbar
        options={[
          { path: "/", label: "Home" },
          { path: "/about", label: "About" },
          { path: "/projects", label: "Projects" },
          { path: "/uses", label: "Uses" },
        ]}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12 flex flex-col md:flex-row items-start md:items-center">
        <div className="md:w-2/3">
          <header aria-label="About Section">
            <h1 className="text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Hi, I'm Sebastian Gil Vega!
            </h1>
          </header>

          <p className="mt-6 text-lg text-gray-800 dark:text-gray-300">
            My journey began with an interest in problem-solving and technology, which led me to study computer science at Ensign College. Along the way, I discovered a love for coding, learning how to tackle complex challenges through creativity. I’m now transitioning into data science, where I can combine my passion for technology and my curiosity to understand the world through data.
          </p>
          <p className="mt-4 text-lg text-gray-800 dark:text-gray-300">
            I have experience leading teams as a student supervisor in a bakery setting, where I learned the importance of teamwork, responsibility, and customer service. I apply these skills in my work, ensuring efficient collaboration in all my tech projects.
          </p>
          <p className="mt-4 text-lg text-gray-800 dark:text-gray-300">
            I aim to further my knowledge in data science and apply it to solve real-world problems. As I continue developing my skills in web development, I’m looking to create solutions that are both user-friendly and data-driven.
          </p>
          <p className="mt-4 text-lg text-gray-800 dark:text-gray-300">
            When I’m not coding, you can find me exploring nature, experimenting with photography, or learning about new ways to use AI for creative expression.
          </p>
        </div>

        <div className="md:w-1/3 flex flex-col items-center mt-6 md:mt-0">
          <Image
            src="/profile-image.png" // Replace with a valid path or URL
            width={250}
            height={250}
            className="rounded-lg object-cover shadow-lg"
            alt="Profile Image"
          />

          <div className="flex flex-col items-center mt-4 space-y-3 text-gray-700 dark:text-gray-300">
            <a href="#" target="_blank" className="flex items-center gap-2">
              <FaXTwitter className="text-xl" />
              Follow on X
            </a>
            <a href="#" target="_blank" className="flex items-center gap-2">
              <FaGithub className="text-xl" />
              Follow on Github
            </a>
            <a href="#" target="_blank" className="flex items-center gap-2">
              <FaLinkedin className="text-xl" />
              Follow on LinkedIn
            </a>
            <a href="mailto:your.email@example.com" className="flex items-center gap-2">
              <FaEnvelope className="text-xl" />
              your.email@example.com
            </a>
          </div>
        </div>
      </div>

      <div className="footerBar">
        <Footer
          options={[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/projects", label: "Projects" },
            { path: "/uses", label: "Uses" },
          ]}
        />
      </div>
    </div>
  );
}
