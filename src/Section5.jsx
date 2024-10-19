import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Section5 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const backgroundImageUrl = "./bg_5.gif";
  const phyto =
    "https://drive.google.com/thumbnail?id=1jRWywQgTKFt-XjBCq-UMwFWdLVZnnNhe&sz=w1000";
  // https://drive.google.com/file/d/1jRWywQgTKFt-XjBCq-UMwFWdLVZnnNhe/view?usp=sharing
  const particles =
    "https://drive.google.com/thumbnail?id=1LGZWYPcEyOr2OSG7T0CNuv2Rs_wcUCkB&sz=w1000";
  //   https://drive.google.com/file/d/1LGZWYPcEyOr2OSG7T0CNuv2Rs_wcUCkB/view?usp=sharing
  const light =
    "https://drive.google.com/thumbnail?id=1ez9W1iZnGCAt8K9hpQQH9H2Hv2fEgco4&sz=w1000";
  //   https://drive.google.com/file/d/1ez9W1iZnGCAt8K9hpQQH9H2Hv2fEgco4/view?usp=sharing
  return (
    <div
      ref={ref}
      className="p-0 w-full min-h-screen flex flex-col items-center relative bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "100% 100%", // Change from cover to contain
        backgroundPosition: "center", // Center the image
        overflow: "hidden",
        marginTop: "-2px",
      }}
    >
      <p className="mx-auto text-center text-white text-4xl font-bold">
        Submerged Data by PACE
      </p>
      <div className="flex flex-row">
        <div className="w-1/3 flex flex-col p-4">
          <p className="mx-auto text-center bg-[#545DB9] py-2 w-full font-semi-bold text-2xl rounded-lg">
            Phytoplankton
          </p>
          <img
            src={phyto}
            alt="Phytoplankton"
            className=" flex justify-center items-center pt-4"
            style={{ width: "350px", height: "350px" }}
          />
        </div>
        <div className="w-1/3 flex flex-col p-4">
          <p className="mx-auto text-center bg-[#545DB9] py-2 w-full font-semi-bold text-2xl rounded-lg">
            Particles
          </p>
          <img
            src={particles}
            alt="Particles"
            className=" flex justify-center items-center pt-4"
            style={{ width: "350px", height: "350px" }}
          />
        </div>
        <div className="w-1/3 flex flex-col p-4">
          <p className="mx-auto text-center bg-[#545DB9] py-2 w-full font-semi-bold text-2xl rounded-lg">
            Light
          </p>
          <img
            src={light}
            alt="Light"
            className=" flex justify-center items-center pt-4"
            style={{ width: "350px", height: "350px" }}
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 mx-auto content-center w-full flex justify-center">
        <div className="bg-opacity-40 bg-black bg-contain w-2/3 p-4">
          <div className="w-full w-1/3"></div>
          <p className="text-white flex items-center">
            <span className="mr-2">✔️</span>
            To learn more, check our{" "}
            <a href="/learningResource" className="text-blue-500 underline">
              Resource Page
            </a>
          </p>
          <p className="text-white flex items-center">
            <span className="mr-2">✔️</span>
            By using our Portal, easily{" "}
            <a href="/getData" className="text-blue-500 underline">
              Access PACE Data
            </a>
          </p>
          <p className="text-white flex items-center">
            <span className="mr-2">✔️</span>
            Join our{" "}
            <a
              href="https://discord.com/invite/cTcxpBJGsU"
              className="text-blue-500 underline"
            >
              Global PACE Community
            </a>{" "}
            dedicated to teachers, students, and PACE enthusiasts
          </p>
          <p className="text-white flex items-center">
            <span className="mr-2">✔️</span>
            For any help, get support from ORCA AI at bottom right section
          </p>
          <p className="text-white flex items-center underline underline-offset-2">
            Have fun exploring PACE and its awesome products at your own PACE!!!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section5;
