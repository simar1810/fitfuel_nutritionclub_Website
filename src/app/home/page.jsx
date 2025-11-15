import Home from "./home/page";
import Provide from "./provide/page";
import Goals from "./goals/page";
import Trainer from "./trainer/page";
import Why from "./why/page";
import Join from "./join/page";
import Results from "./results/page";
import Footer2 from "./footer2/page";

export default function HomePage() {
  return (
    <>
      <Home />
      <Provide />
      <Goals />
      <Trainer />
      <Why />
      <Results/>
      <Join />
      <Footer2 />
    </>
  );
}
