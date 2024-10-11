import "./App.css";
import Home from "./Home";
import GetData from "./GetData";
import LearningRes from "./LearningRes";
import VitrualTour from "./VitrualTour";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white py-4 px-6 sticky top-0 z-50">
      <div
        className="container mx-auto flex justify-evenly items-center"
        style={{ paddingLeft: "4%", paddingRight: "4%" }}
      >
        <Link
          to="https://at-your-own-pace.earth/"
          className="text-lg font-semi-bold hover:text-blue-300"
        >
          HOME
        </Link>

        <Link
          to="/learningResource"
          className="text-lg font-semi-bold hover:text-blue-300"
        >
          Learning Resources
        </Link>
        {/* Center Links: Access PACE Data */}
        <Link
          to="/getData"
          className="text-lg font-semi-bold hover:text-blue-300"
        >
          Access PACE Data
        </Link>
        <Link
          to="/vitrualTour"
          className="text-lg font-semi-bold hover:text-blue-300"
        >
          Virtual Tour
        </Link>

        {/* Center Links: Learning Resource */}

        {/* Right: Community */}
        <a
          href="https://discord.gg/cTcxpBJGsU"
          className="text-lg font-semi-bold hover:text-blue-300"
          target="_blank"
        >
          Community
        </a>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getData" element={<GetData />} />
          <Route path="/learningResource" element={<LearningRes />} />
          <Route path="/vitrualTour" element={<VitrualTour />} />
        </Routes>

        {/* <Section backgroundImageUrl="./bg_1.gif">
          <h2 className="text-4xl">Section 1</h2>
          <p>This is the first section of the landing page.</p>
        </Section> */}
        {/* <Section1 backgroundImageUrl="./bg_1.gif">
          <h2 className="text-4xl">Section 2</h2>
          <p>This is the second section of the landing page.</p>
        </Section1> */}
      </div>
    </Router>
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
