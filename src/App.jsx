import "./App.css";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";

function App() {
  return (
    <div className="overflow-x-hidden h-screen w-screen">
      {/* <Section backgroundImageUrl="./bg_1.gif">
          <h2 className="text-4xl">Section 1</h2>
          <p>This is the first section of the landing page.</p>
        </Section> */}
      {/* <Section1 backgroundImageUrl="./bg_1.gif">
          <h2 className="text-4xl">Section 2</h2>
          <p>This is the second section of the landing page.</p>
        </Section1> */}
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      {/* <Section backgroundImageUrl="./bg_2.gif">
          <h2 className="text-4xl">Section 2</h2>
          <p>This is the second section of the landing page.</p>
        </Section>
        <Section backgroundImageUrl="./bg_3.gif">
          <h2 className="text-4xl">Section 3</h2>
          <p>This is the third section of the landing page.</p>
        </Section>
        <Section backgroundImageUrl="./bg_4.gif">
          <h2 className="text-4xl">Section 4</h2>
          <p>This is the third section of the landing page.</p>
        </Section>
        <Section backgroundImageUrl="./bg_5.gif">
          <h2 className="text-4xl">Section 5</h2>
          <p>This is the third section of the landing page.</p>
        </Section> */}
    </div>
  );

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
}
export default App;
