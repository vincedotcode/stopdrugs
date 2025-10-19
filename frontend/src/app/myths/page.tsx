'use client';

import { useState } from 'react';

export default function MythsPage() {
  const [expandedMyth, setExpandedMyth] = useState<string | null>(null);

  const myths = [
    {
      id: 'gateway-drug',
      myth: 'Cannabis is a "gateway drug" that leads to harder drug use',
      reality: 'Cannabis is NOT a gateway drug',
      summary: 'This myth has been thoroughly debunked by modern research. The vast majority of cannabis users never progress to harder drugs.',
      details: [
        'The gateway drug theory has been discredited by numerous scientific studies',
        'Correlation does not equal causation - most hard drug users may have tried cannabis first simply because it\'s more available',
        'Alcohol and tobacco are actually more likely to precede hard drug use',
        'The real "gateway" is often the illegal drug market itself, not cannabis',
        'Countries that have decriminalized cannabis have not seen increases in hard drug use'
      ]
    },
    {
      id: 'brain-damage',
      myth: 'Cannabis causes permanent brain damage and kills brain cells',
      reality: 'Cannabis does NOT kill brain cells or cause permanent brain damage in adults',
      summary: 'This myth originated from a flawed 1974 study. Modern brain imaging shows no structural brain damage from adult cannabis use.',
      details: [
        'Unlike alcohol (which does kill brain cells), cannabis has neuroprotective properties',
        'Research suggests cannabis may help protect brain cells in certain conditions',
        'Heavy use during adolescence may affect brain development (why adult-only use is recommended)',
        'Any cognitive effects from adult use are largely reversible after abstinence',
        'Studies show cannabis promotes neurogenesis (creation of new brain cells)'
      ]
    },
    {
      id: 'highly-addictive',
      myth: 'Cannabis is highly addictive and causes severe withdrawal',
      reality: 'Cannabis has LOW addiction potential, much lower than alcohol and tobacco',
      summary: 'Only 9% of users develop problematic use, compared to 15% for alcohol and 32% for tobacco.',
      details: [
        'Cannabis does not cause severe physical dependence like alcohol or opioids',
        'Withdrawal symptoms are mild: irritability, sleep difficulty, appetite changes',
        'Symptoms resolve within 1-2 weeks without medical intervention',
        'Most users can stop without difficulty',
        'Cannabis dependence is primarily psychological rather than physical'
      ]
    },
    {
      id: 'lung-damage',
      myth: 'Smoking cannabis causes lung cancer and COPD like tobacco',
      reality: 'Research has NOT established a causal link between cannabis and lung cancer',
      summary: 'Large-scale studies have not found increased lung cancer rates among cannabis smokers.',
      details: [
        'A 20-year UCLA study found no association between cannabis smoking and lung cancer',
        'Cannabinoids may have anti-tumor properties that counteract smoke exposure',
        'Cannabis users typically smoke far less than tobacco users',
        'Alternative methods (vaporizing, edibles) eliminate smoke exposure entirely',
        'Heavy long-term smoking may cause bronchitis, but it\'s reversible with cessation'
      ]
    },
    {
      id: 'motivation',
      myth: 'Cannabis makes people lazy and unmotivated',
      reality: 'The "amotivational syndrome" is not supported by scientific evidence',
      summary: 'Research has failed to find evidence that cannabis causes lasting motivation problems.',
      details: [
        'Many successful professionals, athletes, and entrepreneurs use cannabis',
        'Studies comparing users to non-users find no significant differences in motivation',
        'Any temporary effects on motivation are acute (while under the influence)',
        'Lower achievement correlations are better explained by socioeconomic factors',
        'Prohibition and criminalization impact life outcomes more than cannabis itself'
      ]
    },
    {
      id: 'psychosis',
      myth: 'Cannabis inevitably causes schizophrenia and psychosis',
      reality: 'Cannabis does NOT cause schizophrenia in most people',
      summary: 'Schizophrenia rates have remained stable despite massive increases in cannabis use.',
      details: [
        'Cannabis may trigger early symptoms in people already predisposed to schizophrenia',
        'The vast majority of cannabis users never develop psychosis or schizophrenia',
        'Cannabis-induced psychosis is rare and temporary',
        'CBD actually has anti-psychotic properties',
        'Other factors like genetics and environment are more important',
        'Only those with family history of psychosis need to be cautious'
      ]
    },
    {
      id: 'memory-loss',
      myth: 'Cannabis causes permanent memory loss',
      reality: 'Cannabis does NOT cause permanent memory loss',
      summary: 'Effects on memory are temporary and reversible when cannabis use stops.',
      details: [
        'Short-term memory may be affected while under the influence',
        'Memory function returns to normal after stopping use',
        'Any lingering effects in heavy users resolve within 3-4 weeks',
        'Cannabis may actually protect against some types of memory decline',
        'Research shows no permanent cognitive impairment from adult use'
      ]
    },
    {
      id: 'crime-violence',
      myth: 'Cannabis causes violent behavior and crime',
      reality: 'Cannabis does NOT cause violence - it tends to reduce aggression',
      summary: 'Cannabis has calming effects and is associated with decreased aggression.',
      details: [
        'Crime statistics from legalized states show decreases in violent crime',
        'This myth was propaganda from the "Reefer Madness" era',
        'Unlike alcohol, which is strongly linked to violence, cannabis reduces violent tendencies',
        'Studies show cannabis users are LESS likely to commit violent crimes',
        'Any crime association is due to prohibition itself, not the substance',
        'Legalization has not led to increased crime rates anywhere'
      ]
    },
    {
      id: 'no-medical-value',
      myth: 'Cannabis has no legitimate medical value',
      reality: 'Cannabis has PROVEN medical value',
      summary: 'The FDA has approved cannabis-derived medications, and thousands of studies document medical benefits.',
      details: [
        'FDA-approved Epidiolex for epilepsy',
        'Effective for chronic pain, nausea, seizures, and many other conditions',
        'Major medical organizations now support medical cannabis access',
        'Many patients find it more effective and safer than pharmaceutical alternatives',
        'Schedule I classification (no medical value) is politically motivated, not scientific',
        'Medical cannabis programs exist in majority of US states and many countries'
      ]
    },
    {
      id: 'reproductive-harm',
      myth: 'Cannabis causes infertility and harms reproduction',
      reality: 'Evidence does NOT support major fertility concerns',
      summary: 'Studies on fertility have produced inconsistent results, with no proven severe harm.',
      details: [
        'Many cannabis users successfully conceive and have healthy children',
        'Any effects on fertility appear to be reversible',
        'Use during pregnancy should be avoided as a precaution',
        'Severe birth defects have not been conclusively linked',
        'More research is needed, but current evidence doesn\'t support major concerns',
        'Stress and lifestyle factors have stronger effects on fertility'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Debunking Cannabis Myths</h1>
            <p className="text-xl text-purple-100">
              Separating fact from fiction with science and evidence. 
              Decades of propaganda have created persistent myths about cannabis.
            </p>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="bg-blue-100 border-l-4 border-blue-600 py-4">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-blue-900">
              💡 <strong>Media Literacy Tip:</strong> Always check sources, look for peer-reviewed research, 
              and be skeptical of extreme claims on either side. Science evolves with new evidence.
            </p>
          </div>
        </div>
      </section>

      {/* Myths List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Common Myths vs. Reality</h2>
            <div className="space-y-4">
              {myths.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedMyth(expandedMyth === item.id ? null : item.id)}
                    className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full mr-3">
                            MYTH
                          </span>
                          <h3 className="text-lg font-bold text-gray-800">{item.myth}</h3>
                        </div>
                        <div className="flex items-center mb-2">
                          <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full mr-3">
                            REALITY
                          </span>
                          <p className="text-lg font-semibold text-green-800">{item.reality}</p>
                        </div>
                        <p className="text-gray-600 mt-2">{item.summary}</p>
                      </div>
                      <div className="ml-4 text-2xl">
                        {expandedMyth === item.id ? '−' : '+'}
                      </div>
                    </div>
                  </button>
                  
                  {expandedMyth === item.id && (
                    <div className="px-6 pb-6 border-t border-gray-200 pt-4">
                      <h4 className="font-bold text-gray-800 mb-3">The Facts:</h4>
                      <ul className="space-y-2">
                        {item.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-600 mr-2 mt-1">✓</span>
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Spot Misinformation */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">How to Spot Cannabis Misinformation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-red-800">🚩 Red Flags</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Outdated research from 1970s-1980s</li>
                  <li>• Emotional language instead of facts</li>
                  <li>• Extreme claims (totally harmless OR deadly)</li>
                  <li>• Cherry-picking single studies</li>
                  <li>• No credible sources cited</li>
                  <li>• &quot;Reefer Madness&quot; stereotypes</li>
                  <li>• Conflicts of interest (prison/pharma)</li>
                </ul>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-green-800">✅ Trust Signals</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Peer-reviewed research</li>
                  <li>• Recent studies (post-2000)</li>
                  <li>• Balanced, nuanced perspective</li>
                  <li>• Multiple sources confirm</li>
                  <li>• Credible scientific journals</li>
                  <li>• Acknowledges limitations</li>
                  <li>• No obvious bias/agenda</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Questions */}
      <section className="py-12 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Ask Critical Questions</h2>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-700 mb-4">
                When evaluating cannabis information, ask yourself:
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">?</span>
                  <p className="text-gray-700">Who funded this research or published this information?</p>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">?</span>
                  <p className="text-gray-700">Is this from a peer-reviewed scientific source?</p>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">?</span>
                  <p className="text-gray-700">When was this information published? Is it current?</p>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">?</span>
                  <p className="text-gray-700">Does this represent scientific consensus or an outlier study?</p>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">?</span>
                  <p className="text-gray-700">Are there conflicts of interest?</p>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">?</span>
                  <p className="text-gray-700">Can I find this confirmed by multiple credible sources?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Resources */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Trusted Resources for Fact-Checking</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">📚 PubMed</h3>
                <p className="text-gray-700 text-sm">Database of peer-reviewed scientific research</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">🏛️ National Academies of Sciences</h3>
                <p className="text-gray-700 text-sm">Comprehensive cannabis health effects review</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">🌿 Project CBD</h3>
                <p className="text-gray-700 text-sm">Science-based cannabis and CBD information</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">⚖️ NORML</h3>
                <p className="text-gray-700 text-sm">Evidence-based cannabis information and advocacy</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">🔬 Drug Policy Alliance</h3>
                <p className="text-gray-700 text-sm">Fact-based drug policy information</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">🏥 American Medical Association</h3>
                <p className="text-gray-700 text-sm">Medical perspective on cannabis policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gradient-to-r from-purple-700 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Fight Misinformation with Education</h2>
          <p className="text-xl text-purple-100 mb-6">
            Share accurate information. Challenge myths. Support evidence-based policy.
          </p>
          <p className="text-lg">
            The truth matters. Science matters. Let&apos;s end the propaganda.
          </p>
        </div>
      </section>
    </div>
  );
}
