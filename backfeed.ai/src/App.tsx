import logo from "./assets/Backfeed White logo 2000x1500.png";
import mainbg from "./assets/blurry-gradient-haikei.png";
import mainimg from "./assets/both.jpg";
import mainblob from "./assets/blob-haikei(1).png";
import resume2 from "./assets/resume2.png";
import shortlist from "./assets/shortlist.png";
import reject from "./assets/reject.png";
import feedback from "./assets/Candidate Feedback Analysis.png";
import { createEffect } from "solid-js";

function App() {
  let nav: HTMLElement;
  createEffect(() => {
    window.addEventListener("scroll", function () {
      var scrollDistance =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollDistance > 150) {
        nav.classList.add("py-3");
        nav.classList.add("bg-gradient-to-b");
        nav.classList.add("from-[#0f0c29]");
        nav.classList.add("to-[#302b63]");
        nav.classList.remove("py-10");
      } else {
        nav.classList.remove("py-3");
        nav.classList.remove("bg-gradient-to-b");
        nav.classList.remove("from-[#0f0c29]");
        nav.classList.remove("to-[#302b63]");
        nav.classList.add("py-10");
      }
    });
  });
  return (
    <>
      <nav
        // @ts-ignore
        ref={nav}
        class="text-gray-50 w-full fixed flex items-center justify-center z-50 transition-all py-10"
      >
        <div class="container flex items-center justify-between">
          <a href="#home">
            <img src={logo} alt="Backfeed" class="w-40" />
          </a>
          <div class="flex items-center gap-12">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#pricing">Pricing</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>
      <main id="home">
        <section class="relative text-gray-50 flex items-center justify-center bg-gradient-to-b from-[#6a1fab] to-[#4A00E0] min-h-screen">
          <div class="absolute inset-0 z-10">
            <img src={mainbg} class="w-full h-full object-cover" />
          </div>
          <div class="absolute inset-0 z-20 flex items-center justify-center gap-6">
            <div class="w-1/3">
              <h1 class="text-5xl font-bold mb-3">
                Revolutionize Your Recruitment Process
              </h1>
              <p>
                Introducing Backfeed.ai - An AI-powered recruitment platform
                that streamlines hiring, enriches candidate experience, and
                empowers data-driven decisions.
              </p>
            </div>
            <div class="w-1/3 relative">
              <img src={mainimg} class="w-full" alt="" />
              <img
                src={mainblob}
                class="absolute right-0 bottom-0 w-full -z-10"
                alt=""
              />
            </div>
          </div>
        </section>
        <section class="relative text-gray-800">
          <div class="absolute inset-0 -z-10">
            <svg
              class="absolute top-10 left-0"
              width="571"
              height="768"
              viewBox="0 0 571 768"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="187"
                cy="384"
                r="384"
                fill="url(#paint0_linear_95_67)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_95_67"
                  x1="187"
                  y1="0"
                  x2="187"
                  y2="768"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#6100FF" />
                  <stop offset="1" stop-color="#6202FF" stop-opacity="0.57" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="py-32">
            <div class="container mx-auto flex items-center gap-6 justify-center">
              <div class="w-1/2 flex items-center justify-center">
                <img src={resume2} class="h-full" />
              </div>
              <div class="w-1/2">
                <h1 class="text-4xl font-bold mb-3">
                  Efficiency & Automation Resume Ranking & Extraction
                </h1>
                <p>
                  Our smart algorithms sort through heaps of resumes, ranking
                  candidates based on experience and qualifications. Make hiring
                  faster and more precise with Backfeed.ai.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="relative text-gray-800 bg-violet-200">
          <div class="absolute inset-0 -z-10"></div>
          <div class="py-32">
            <div class="container mx-auto flex items-center gap-6 justify-center">
              <div class="w-1/2">
                <h1 class="text-4xl font-bold mb-3">
                  Data-Driven Decisions Candidate Shortlisting
                </h1>
                <p>
                  Bridge the gap between hiring managers and talent. Backfeed.ai
                  automates the transfer of top-ranked candidates, ensuring that
                  hiring decisions are data-driven and effective.
                </p>
              </div>
              <div class="w-1/2 flex items-center justify-center">
                <img src={shortlist} class="h-full" />
              </div>
            </div>
          </div>
        </section>
        <section class="relative text-gray-800 bg-zinc-200">
          <div class="absolute inset-0 -z-10"></div>
          <div class="py-32">
            <div class="container mx-auto flex items-center gap-6 justify-center">
              <div class="w-1/2 flex items-center justify-center">
                <img src={reject} class="h-full" />
              </div>
              <div class="w-1/2">
                <h1 class="text-4xl font-bold mb-3">
                  Rejection Email Feedback Analysis
                </h1>
                <p>
                  Utilizing Natural Language Processing, Backfeed.ai provides
                  personalized feedback to candidates, improving transparency
                  and enriching their experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="relative text-gray-800">
          <div class="absolute inset-0 -z-10"></div>
          <div class="py-32">
            <div class="container mx-auto flex items-center gap-6 justify-center">
              <div class="w-1/2">
                <h1 class="text-4xl font-bold mb-3">
                  Data-Driven Candidate Feedback Analysis
                </h1>
                <p>
                  Utilizing Natural Language Processing, Backfeed.ai provides
                  personalized feedback to candidates, improving transparency
                  and enriching their experience.
                </p>
              </div>
              <div class="w-1/2 flex items-center justify-center">
                <img src={feedback} class="h-full" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer class="bg-gradient-to-b text-gray-100 py-32 relative">
        <div class="absolute inset-0 -z-10">
          <img src={mainbg} class="w-full h-full object-cover" />
        </div>
        <div class="container mx-auto flex items-center">
          <div class="w-2/5">
            <img src={logo} alt="Backfeed" class="w-40" />
            <form action="" class="w-fit">
              <div class="mb-3 ml-3 relative flex items-center">
                <input
                  type="email"
                  class="p-2 bg-transparent rounded-full border-2 border-white w-96"
                  placeholder="email@example.com"
                />
                <button class="rounded-full absolute flex items-center justify-center aspect-square bg-[#6a1fab] p-1 right-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 5L19 12L12 19"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <div class="flex flex-col w-1/5">
            <h2 class="text-xl">Links</h2>
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#contact">Contact</a>
          </div>
          <div class="flex flex-col w-1/5">
            <h2 class="text-xl">Links</h2>
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#contact">Contact</a>
          </div>
          <div class="flex flex-col w-1/5">
            <h2 class="text-xl">Links</h2>
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
      <footer class="bg-violet-900">
        <div class="container mx-auto flex items-center py-4 text-white justify-between text-xs">
          <span>© 2023 Backfeed Copyrights reserved</span>
          <div class="flex items-center justify-center gap-6">
            <a href="">Terms and Conditions</a>
            <a href="">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
