import SplitType from "split-type";
import gsap from "gsap";

// const text = new SplitType(".index-text");
// gsap.to(".char", {
//     y: 0,
//     stagger: 0.02,
//     delay: 0.05,
//     duration: 0.01,
// });


const loaderText = new SplitType("#loader h1");
gsap.to(".char", {
    y: 0,
    stagger: 0.09,
    delay: 0.2,
    duration: 0.2,
    onComplete: () => {
        gsap.to("#loader", {
            opacity: 0,
            delay: 0.3,
            duration: 1,
            onComplete: () => {
                const loader: HTMLElement | null = document.getElementById("loader");
                if (loader) {
                    loader.remove();
                }
            }
        });
    }
});
