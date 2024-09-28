import { httpBatchLink } from "@trpc/client";
import { useState } from "react";
import { trpc } from "../utils/trpc";
import "./App.css";
import IndexPage from "./Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Satellite from "./Satellite";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const backgroundImageUrl = "./Jamie.png";
// const backgroundImageUrl = "./temp_background.jpg";

const Section = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when the component is in view
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-screen w-screen flex items-center justify-center overflow-x-hidden mx-0 px-0"
    >
      <div
        className="absolute inset-0 w-screen h-screen bg-cover bg-center "
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      ></div>
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
export function App() {
  //   const [queryClient] = useState(() => new QueryClient());
  //   const [trpcClient] = useState(() =>
  //     trpc.createClient({
  //       links: [
  //         httpBatchLink({
  //           url: `${window.location.protocol}//${window.location.hostname}:3000/trpc`,
  //           headers: () => {
  //             const token = localStorage.getItem("auth_token");

  //             if (!token) return {};
  //             return {
  //               Authorization: `Bearer ${token}`,
  //             };
  //           },
  //         }),
  //       ],
  //     })
  //   );

  //   return (
  //     <trpc.Provider client={trpcClient} queryClient={queryClient}>
  //       <QueryClientProvider client={queryClient}>
  //         <Satellite />
  //         <IndexPage />
  //       </QueryClientProvider>
  //     </trpc.Provider>
  //   );
  return (
    <div className="overflow-x-hidden mx-0 px-0">
      {/* <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      ></div> */}
      <Section>
        <h2 className="text-2xl">Section 1</h2>
        <p>This is the first section of the landing page.</p>
      </Section>
      <Section>
        <h2 className="text-2xl">Section 2</h2>
        <p>This is the second section of the landing page.</p>
      </Section>
      <Section>
        <h2 className="text-2xl">Section 3</h2>
        <p>This is the third section of the landing page.</p>
      </Section>
      <Section>
        <h2 className="text-2xl">Section 3</h2>
        <p>This is the third section of the landing page.</p>
      </Section>{" "}
      <Section>
        <h2 className="text-2xl">Section 3</h2>
        <p>This is the third section of the landing page.</p>
      </Section>{" "}
      <Section>
        <h2 className="text-2xl">Section 3</h2>
        <p>This is the third section of the landing page.</p>
      </Section>{" "}
    </div>
  );
}

export default App;
