import ClubHome from "./home/page";
import Results from "./results/page";
import Featured from "./featured/page";
import ClubFormSection from "./form/formSection";
import ClubFooter from "./footer/clubFooter";

export default function Club() {
  return (
    <>
      <ClubHome />
      <Results />
      <Featured />
      <ClubFormSection />
      <ClubFooter />
    </>
  );
}
