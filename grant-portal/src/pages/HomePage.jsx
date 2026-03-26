import HeroBanner from '../components/HeroBanner'
import ProcessSteps from '../components/ProcessSteps'
import EligibilityNotice from '../components/EligibilityNotice'
import ApplicationForm from '../components/ApplicationForm'

export default function HomePage() {
  return (
    <main className="pt-16">
      <HeroBanner />
      <div className="bg-gray-50 border-b border-gray-200">
        <ProcessSteps />
      </div>
      <div className="bg-white" id="apply">
        <div className="max-w-5xl mx-auto px-4 pt-8">
          <div className="border-b border-gray-200 mb-6 pb-4">
            <h2 className="text-xl font-bold text-[#1a3c6e] uppercase tracking-wide">
              Apply Now
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Fill out the form below to begin your grant application.
            </p>
          </div>
        </div>
        <EligibilityNotice />
        <ApplicationForm />
      </div>
    </main>
  )
}
