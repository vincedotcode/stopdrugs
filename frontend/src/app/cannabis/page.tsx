export default function CannabisPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Cannabis: Facts, Science & Legalization</h1>
            <p className="text-xl text-green-100">
              Evidence-based information about cannabis and why legalization is supported by science, 
              health professionals, and human rights advocates.
            </p>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Why Cannabis Should Be Legal</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Safer Than Legal Substances</h3>
                <p className="text-gray-700">
                  Cannabis has never caused a fatal overdose. Alcohol kills 95,000+ Americans yearly, 
                  tobacco kills 480,000+, yet both remain legal.
                </p>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                <div className="text-3xl mb-3">🏥</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Proven Medical Benefits</h3>
                <p className="text-gray-700">
                  FDA-approved for epilepsy. Effective for chronic pain, nausea, PTSD, and may help 
                  combat the opioid epidemic as a safer pain management alternative.
                </p>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                <div className="text-3xl mb-3">⚖️</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Criminal Justice Reform</h3>
                <p className="text-gray-700">
                  Reduces mass incarceration for non-violent offenses and addresses the 
                  disproportionate impact on minority communities from the War on Drugs.
                </p>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Economic Benefits</h3>
                <p className="text-gray-700">
                  Creates thousands of jobs, generates billions in tax revenue for education and 
                  healthcare, and supports small business growth.
                </p>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                <div className="text-3xl mb-3">🔬</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Low Addiction Risk</h3>
                <p className="text-gray-700">
                  Only ~9% of users develop problematic use, compared to 15% for alcohol and 32% for 
                  tobacco. No severe physical withdrawal.
                </p>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                <div className="text-3xl mb-3">🗽</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Personal Freedom</h3>
                <p className="text-gray-700">
                  Adults should have the freedom to make their own choices about cannabis use without 
                  fear of criminal prosecution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Benefits */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Medical Benefits</h2>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 text-blue-900">FDA-Approved & Research-Backed Applications</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-bold">Epilepsy Treatment</h4>
                  <p className="text-gray-700">CBD (Epidiolex) is FDA-approved for certain childhood epilepsies.</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-bold">Chronic Pain Management</h4>
                  <p className="text-gray-700">Conclusive evidence for effectiveness in treating chronic pain conditions.</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-bold">Cancer-Related Symptoms</h4>
                  <p className="text-gray-700">Helps with chemotherapy-induced nausea and appetite loss.</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-bold">Mental Health</h4>
                  <p className="text-gray-700">Shows promise for PTSD, anxiety, and depression in some patients.</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-bold">Opioid Alternative</h4>
                  <p className="text-gray-700">States with medical cannabis have 24.8% lower opioid overdose rates.</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-bold">Neurodegenerative Diseases</h4>
                  <p className="text-gray-700">Research shows potential for Parkinson&apos;s, MS, and Alzheimer&apos;s.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Profile */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Safety Profile</h2>
            <div className="bg-green-50 rounded-lg p-6 mb-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-2xl mr-3">✅</div>
                  <p className="text-gray-700">
                    <strong>Zero Fatal Overdoses:</strong> No recorded deaths from cannabis alone in medical literature
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">✅</div>
                  <p className="text-gray-700">
                    <strong>Low Toxicity:</strong> Exceptionally low toxicity profile compared to legal and illegal substances
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">✅</div>
                  <p className="text-gray-700">
                    <strong>Less Addictive:</strong> Significantly lower addiction potential than alcohol, tobacco, or opioids
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">✅</div>
                  <p className="text-gray-700">
                    <strong>Mild Withdrawal:</strong> No severe physical withdrawal like alcohol or opioids
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">✅</div>
                  <p className="text-gray-700">
                    <strong>Temporary Effects:</strong> Side effects are mild (dry mouth, red eyes) and temporary
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Comparison with Legal Substances</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-red-800">Alcohol (LEGAL)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>❌ ~95,000 deaths/year in US</li>
                  <li>❌ Highly addictive</li>
                  <li>❌ Severe organ damage</li>
                  <li>❌ Associated with violence</li>
                  <li>❌ Life-threatening withdrawal</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-red-800">Tobacco (LEGAL)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>❌ ~480,000 deaths/year in US</li>
                  <li>❌ Extremely addictive</li>
                  <li>❌ Causes cancer</li>
                  <li>❌ Heart and lung disease</li>
                  <li>❌ No medical benefits</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-green-500">
                <h3 className="text-xl font-bold mb-4 text-green-800">Cannabis (ILLEGAL)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✅ Zero overdose deaths</li>
                  <li>✅ Lower addiction potential</li>
                  <li>✅ Medical benefits proven</li>
                  <li>✅ Reduces aggression</li>
                  <li>✅ Minimal withdrawal</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-6">
              <p className="text-xl font-bold text-gray-800">
                Why is the safest one illegal?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Responsible Use */}
      <section className="py-12 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Responsible Use Guidelines</h2>
            <p className="text-gray-700 mb-6">
              While advocating for legalization, we also promote responsible use:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-600">
                <h3 className="font-bold mb-2">👤 Adults Only (21+)</h3>
                <p className="text-gray-700 text-sm">Cannabis should only be used by adults, as adolescent brains are still developing.</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-600">
                <h3 className="font-bold mb-2">🚗 Don&apos;t Drive Impaired</h3>
                <p className="text-gray-700 text-sm">Never drive or operate machinery while under the influence.</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-600">
                <h3 className="font-bold mb-2">📊 Start Low, Go Slow</h3>
                <p className="text-gray-700 text-sm">Especially for new users, start with low doses and wait to assess effects.</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-600">
                <h3 className="font-bold mb-2">🏪 Legal Sources Only</h3>
                <p className="text-gray-700 text-sm">Only obtain cannabis from legal, regulated sources when possible.</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-600">
                <h3 className="font-bold mb-2">🩺 Medical Supervision</h3>
                <p className="text-gray-700 text-sm">Consult healthcare providers when using cannabis for medical purposes.</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-600">
                <h3 className="font-bold mb-2">🤰 Not During Pregnancy</h3>
                <p className="text-gray-700 text-sm">Avoid cannabis use during pregnancy and while breastfeeding.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legalization Progress */}
      <section className="py-12 bg-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">The Tide is Turning</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-bold mb-3">✅ Progress Made</h3>
                <ul className="space-y-2">
                  <li>• Majority of US states have medical programs</li>
                  <li>• Growing number of recreational states</li>
                  <li>• Countries like Canada fully legalized</li>
                  <li>• Public support at all-time high</li>
                  <li>• Successful state regulatory models</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">⏳ Work Remaining</h3>
                <ul className="space-y-2">
                  <li>• Federal prohibition continues</li>
                  <li>• Banking challenges for businesses</li>
                  <li>• People still imprisoned for cannabis</li>
                  <li>• Need for expungement programs</li>
                  <li>• Continued education needed</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-xl">
              <strong>The science is clear. The public agrees. It&apos;s time for full legalization.</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Scientific Research</h2>
            <p className="text-gray-700 mb-6">
              Don&apos;t take our word for it. The scientific evidence supports cannabis legalization:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">National Academies of Sciences, Engineering, and Medicine (2017)</h4>
                <p className="text-gray-700">Comprehensive review finding conclusive evidence for cannabis effectiveness in treating chronic pain, nausea, and spasticity.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Journal of the American Medical Association</h4>
                <p className="text-gray-700">States with medical cannabis laws had 24.8% lower opioid overdose mortality rates.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">FDA Approval</h4>
                <p className="text-gray-700">Epidiolex, a CBD-based medication, was approved by the FDA for treating severe forms of epilepsy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
