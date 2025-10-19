import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 via-green-600 to-emerald-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Truth About Drugs, Science About Cannabis
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-50">
              Education. Evidence. Advocacy. Breaking through decades of misinformation.
            </p>
            <p className="text-lg text-green-100 mb-8">
              Learn about the real dangers of harmful drugs, get life-saving resources for addiction, 
              and discover why cannabis legalization is supported by science and compassion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/education" 
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                🚨 Learn About Drug Harm
              </Link>
              <Link 
                href="/cannabis" 
                className="bg-white hover:bg-gray-100 text-green-800 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                🌿 Cannabis Facts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Mission</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Protect Lives</h3>
                <p className="text-gray-600">
                  Educate about the real dangers of harmful drugs like opioids, methamphetamine, 
                  and other substances that cause addiction and death.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🌿</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Advocate for Truth</h3>
                <p className="text-gray-600">
                  Support evidence-based cannabis legalization, combating decades of propaganda 
                  with scientific research and facts.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Fight Misinformation</h3>
                <p className="text-gray-600">
                  Debunk myths and propaganda about cannabis with peer-reviewed science 
                  and help people make informed decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">The Reality</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-3 text-red-800">Dangerous Drugs Kill</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Opioids: ~80,000 deaths/year in the US</li>
                  <li>• Alcohol: ~95,000 deaths/year in the US</li>
                  <li>• Tobacco: ~480,000 deaths/year in the US</li>
                  <li>• Methamphetamine: Rising overdose rates</li>
                </ul>
              </div>
              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-3 text-green-800">Cannabis Reality</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Zero recorded fatal overdoses</li>
                  <li>• FDA-approved medical applications</li>
                  <li>• Lower addiction rate than alcohol/tobacco</li>
                  <li>• Can reduce opioid dependence</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Informed. Stay Safe. Advocate for Change.
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link 
              href="/education" 
              className="bg-white text-green-800 hover:bg-gray-100 font-bold py-6 px-6 rounded-lg transition-colors"
            >
              <div className="text-3xl mb-2">📚</div>
              <div className="text-lg">Drug Harm Education</div>
            </Link>
            <Link 
              href="/cannabis" 
              className="bg-white text-green-800 hover:bg-gray-100 font-bold py-6 px-6 rounded-lg transition-colors"
            >
              <div className="text-3xl mb-2">🌿</div>
              <div className="text-lg">Cannabis Facts</div>
            </Link>
            <Link 
              href="/myths" 
              className="bg-white text-green-800 hover:bg-gray-100 font-bold py-6 px-6 rounded-lg transition-colors"
            >
              <div className="text-3xl mb-2">❌</div>
              <div className="text-lg">Debunk Myths</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency Resources */}
      <section className="py-12 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Now?</h2>
          <p className="text-xl mb-6">Crisis resources are available 24/7</p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <a href="tel:1-800-662-4357" className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors">
              📞 SAMHSA: 1-800-662-4357
            </a>
            <a href="tel:988" className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors">
              🆘 Suicide Prevention: 988
            </a>
            <a href="tel:911" className="bg-yellow-400 text-red-800 hover:bg-yellow-300 font-bold py-3 px-6 rounded-lg transition-colors">
              🚨 Emergency: 911
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
