import LandingCTA from "../cta"
import LandingFeatures from "../features"
import LandingFooter from "../footer"
import LandingHeader from "../header"
import LandingLogos from "../logos"
import LandingSection from "../section"

const LandingPage = () => {
  return (
    <div>
      <LandingHeader />
      <div class="container mx-auto">
        <LandingSection />
      </div>
      <div class="container mx-auto mt-10">
        <LandingFeatures />
      </div>
      <div class="container mx-auto">
        <LandingLogos />
      </div>
      <div class="container mx-auto mt-10">
        <LandingCTA />
      </div>
      <LandingFooter />
    </div>
  )
}

export default LandingPage