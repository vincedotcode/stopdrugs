export default function EducationPage() {
  const drugs = [
    {
      id: 'opioids',
      name: 'Opioids',
      emoji: '💊',
      danger: 'EXTREMELY HIGH',
      description: 'Highly addictive substances including prescription painkillers and heroin.',
      keyRisks: ['Overdose death', 'Severe physical dependence', 'Respiratory depression'],
      color: 'red'
    },
    {
      id: 'methamphetamine',
      name: 'Methamphetamine',
      emoji: '⚗️',
      danger: 'EXTREMELY HIGH',
      description: 'Powerful stimulant causing severe physical and psychological damage.',
      keyRisks: ['Severe dental problems', 'Psychosis', 'Heart and brain damage'],
      color: 'red'
    },
    {
      id: 'cocaine',
      name: 'Cocaine',
      emoji: '💉',
      danger: 'VERY HIGH',
      description: 'Powerful stimulant with high risk of heart attacks and stroke.',
      keyRisks: ['Heart attacks', 'Stroke', 'Strong psychological addiction'],
      color: 'red'
    },
    {
      id: 'synthetic-drugs',
      name: 'Synthetic Drugs',
      emoji: '🧪',
      danger: 'EXTREMELY HIGH',
      description: 'Man-made chemicals with unpredictable and often deadly effects.',
      keyRisks: ['Unknown composition', 'Organ failure', 'Death'],
      color: 'red'
    },
    {
      id: 'alcohol',
      name: 'Alcohol',
      emoji: '🍺',
      danger: 'HIGH',
      description: 'Legal but dangerous - one of the most harmful substances worldwide.',
      keyRisks: ['Liver damage', 'Addiction', '95,000+ deaths yearly in US'],
      color: 'orange'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Drug Harm Education</h1>
            <p className="text-xl text-red-100">
              Understanding the real dangers of harmful drugs can save lives. 
              If you or someone you know is struggling, help is available.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-yellow-100 border-l-4 border-yellow-600 py-4">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-yellow-900 font-semibold">
              ⚠️ <strong>In case of overdose:</strong> Call 911 immediately. Administer Naloxone if available. 
              Stay with the person and place them on their side.
            </p>
          </div>
        </div>
      </section>

      {/* Drugs Information */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Dangerous Substances</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {drugs.map((drug) => (
                <div key={drug.id} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-600">
                  <div className="flex items-start mb-4">
                    <div className="text-4xl mr-4">{drug.emoji}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800">{drug.name}</h3>
                      <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mt-2">
                        DANGER: {drug.danger}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{drug.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Risks:</h4>
                    <ul className="space-y-1">
                      {drug.keyRisks.map((risk, idx) => (
                        <li key={idx} className="text-gray-600 text-sm">• {risk}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Harm Reduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Harm Reduction Strategies</h2>
            <p className="text-gray-700 mb-6">
              If you or someone you know is using drugs, these strategies can help reduce immediate harm:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-2">🤝 Never Use Alone</h3>
                <p className="text-blue-800 text-sm">Have someone present who can call for help in emergencies.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-2">📏 Start Small</h3>
                <p className="text-blue-800 text-sm">Test potency with a small amount to reduce overdose risk.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-2">🚫 Don&apos;t Mix Substances</h3>
                <p className="text-blue-800 text-sm">Combining drugs greatly increases overdose risk.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-2">💉 Use Clean Supplies</h3>
                <p className="text-blue-800 text-sm">Never share needles to prevent disease transmission.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-2">🏥 Know Overdose Signs</h3>
                <p className="text-blue-800 text-sm">Learn to recognize symptoms and use Naloxone for opioids.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-2">💪 Seek Help</h3>
                <p className="text-blue-800 text-sm">Treatment and recovery are possible. You&apos;re not alone.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Resources */}
      <section className="py-12 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Treatment & Recovery Resources</h2>
            <p className="text-gray-700 mb-6 text-lg">
              Recovery is possible. Help is available 24/7, free and confidential.
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">24/7 National Hotlines</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-bold text-lg">SAMHSA National Helpline</h4>
                  <p className="text-2xl font-bold text-green-600">1-800-662-4357</p>
                  <p className="text-gray-600">Free, confidential treatment referral and information service</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-bold text-lg">Crisis Text Line</h4>
                  <p className="text-2xl font-bold text-blue-600">Text HOME to 741741</p>
                  <p className="text-gray-600">Free 24/7 crisis support via text message</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-bold text-lg">Suicide Prevention Lifeline</h4>
                  <p className="text-2xl font-bold text-purple-600">988</p>
                  <p className="text-gray-600">24/7 support for people in distress</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Support Groups</h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="text-gray-700">• Narcotics Anonymous (NA)</div>
                <div className="text-gray-700">• Alcoholics Anonymous (AA)</div>
                <div className="text-gray-700">• SMART Recovery</div>
                <div className="text-gray-700">• Cocaine Anonymous</div>
                <div className="text-gray-700">• Crystal Meth Anonymous</div>
                <div className="text-gray-700">• Al-Anon (for families)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Good Samaritan Info */}
      <section className="py-8 bg-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3 text-blue-900">Good Samaritan Laws</h3>
            <p className="text-blue-800">
              Many states have Good Samaritan laws that provide legal protection when calling for help 
              during an overdose. Don&apos;t hesitate to call 911 - you could save a life.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
