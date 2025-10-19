export interface CannabisInfo {
  title: string;
  sections: {
    id: string;
    title: string;
    content: string[];
  }[];
}

export const cannabisEducation: CannabisInfo = {
  title: 'Cannabis: Facts, Science, and Legalization',
  sections: [
    {
      id: 'introduction',
      title: 'Understanding Cannabis',
      content: [
        'Cannabis, also known as marijuana, is a plant that has been used medicinally and recreationally for thousands of years.',
        'The plant contains numerous compounds called cannabinoids, with THC (tetrahydrocannabinol) and CBD (cannabidiol) being the most well-known.',
        'Unlike many dangerous drugs, cannabis has never caused a fatal overdose in recorded history.',
        'Modern research is uncovering significant medical benefits of cannabis for various conditions.'
      ]
    },
    {
      id: 'medical-benefits',
      title: 'Medical Benefits and Research',
      content: [
        'Pain Management: Cannabis has shown effectiveness in treating chronic pain, including neuropathic pain that is resistant to other treatments.',
        'Epilepsy Treatment: CBD has been FDA-approved for treating certain forms of childhood epilepsy (Epidiolex).',
        'Cancer-Related Symptoms: Helps with nausea, vomiting, and appetite loss in cancer patients undergoing chemotherapy.',
        'Mental Health: Shows promise in treating PTSD, anxiety disorders, and depression in some patients.',
        'Neurodegenerative Diseases: Research suggests potential benefits for conditions like Parkinson\'s disease, multiple sclerosis, and Alzheimer\'s.',
        'Inflammatory Conditions: Anti-inflammatory properties may help with conditions like Crohn\'s disease and arthritis.',
        'Opioid Alternative: Studies show cannabis can reduce opioid use and may help combat the opioid epidemic.'
      ]
    },
    {
      id: 'safety-profile',
      title: 'Safety Profile',
      content: [
        'Cannabis has an exceptionally low toxicity profile compared to many legal and illegal substances.',
        'No recorded cases of fatal overdose from cannabis alone in medical literature.',
        'Significantly less addictive than alcohol, tobacco, or opioids.',
        'Cannot cause the type of physical withdrawal symptoms associated with alcohol or opioid dependence.',
        'Most side effects are mild and temporary, including dry mouth, red eyes, and increased appetite.',
        'When used responsibly by adults, cannabis poses minimal health risks.'
      ]
    },
    {
      id: 'comparison',
      title: 'Comparison with Legal Substances',
      content: [
        'Alcohol: Causes approximately 95,000 deaths annually in the US, is highly addictive, and causes severe organ damage. Yet it remains legal.',
        'Tobacco: Kills over 480,000 Americans yearly, is extremely addictive, and causes cancer. Yet it remains legal.',
        'Cannabis: Zero overdose deaths, lower addiction potential, and proven medical benefits. Yet it remains federally illegal in many places.',
        'Prescription Opioids: Highly addictive, cause tens of thousands of overdose deaths annually. Cannabis could be a safer alternative for pain management.'
      ]
    },
    {
      id: 'legalization-benefits',
      title: 'Benefits of Legalization',
      content: [
        'Criminal Justice Reform: Reduces incarceration rates and eliminates arrests for non-violent cannabis offenses.',
        'Economic Benefits: Creates jobs, generates tax revenue, and stimulates economic growth.',
        'Quality Control: Regulation ensures product safety, potency labeling, and eliminates contaminated products.',
        'Medical Access: Patients can access cannabis for legitimate medical needs without fear of prosecution.',
        'Research Opportunities: Legalization enables more comprehensive research into medical applications.',
        'Reduced Black Market: Legal markets undercut illegal drug trade and associated violence.',
        'Social Equity: Addresses historical injustices from the War on Drugs that disproportionately affected minority communities.'
      ]
    },
    {
      id: 'responsible-use',
      title: 'Responsible Use Guidelines',
      content: [
        'Adults Only: Cannabis should only be used by adults 21 and older, as adolescent brains are still developing.',
        'Don\'t Drive Impaired: Never drive or operate machinery while under the influence.',
        'Start Low, Go Slow: Especially for new users, start with low doses and wait to assess effects.',
        'Know Your Source: Only obtain cannabis from legal, regulated sources when possible.',
        'Consider Method: Vaporizing or edibles may be healthier alternatives to smoking.',
        'Medical Supervision: Consult healthcare providers when using cannabis for medical purposes.',
        'Pregnancy and Breastfeeding: Avoid cannabis use during pregnancy and while breastfeeding.',
        'Mental Health Considerations: Those with certain mental health conditions should consult professionals before use.'
      ]
    },
    {
      id: 'current-status',
      title: 'Current Legal Status and Progress',
      content: [
        'In recent years, numerous states have legalized cannabis for medical and/or recreational use.',
        'Public opinion has shifted dramatically, with majority support for legalization.',
        'International trend: Several countries including Canada, Uruguay, and parts of Europe have legalized cannabis.',
        'Federal reform is increasingly discussed as states demonstrate successful regulatory models.',
        'Banking and business challenges persist due to federal prohibition.',
        'Continued advocacy is needed to achieve comprehensive federal legalization and criminal justice reform.'
      ]
    }
  ]
};

export const getLegalizationArguments = () => ({
  title: 'Why Cannabis Should Be Legal',
  arguments: [
    {
      category: 'Health and Safety',
      points: [
        'Cannabis is significantly safer than alcohol and tobacco, both of which are legal',
        'No fatal overdoses from cannabis alone',
        'Lower addiction potential than many legal substances',
        'Proven medical benefits for numerous conditions',
        'Legalization allows for quality control and safety standards'
      ]
    },
    {
      category: 'Criminal Justice',
      points: [
        'Reduces mass incarceration for non-violent offenses',
        'Eliminates disparate impact on minority communities',
        'Frees law enforcement resources for serious crimes',
        'Reduces court system burden',
        'Allows expungement of past cannabis convictions'
      ]
    },
    {
      category: 'Economic',
      points: [
        'Generates significant tax revenue for states',
        'Creates thousands of legal jobs',
        'Stimulates economic growth and investment',
        'Reduces costs of prohibition enforcement',
        'Supports small businesses and entrepreneurs'
      ]
    },
    {
      category: 'Personal Freedom',
      points: [
        'Adults should have freedom to make their own choices',
        'Government should not criminalize personal behavior that doesn\'t harm others',
        'Medical patients deserve access to effective treatments',
        'Respects individual liberty and bodily autonomy'
      ]
    },
    {
      category: 'Public Health',
      points: [
        'Provides alternative to dangerous opioids for pain management',
        'Regulated markets are safer than black markets',
        'Enables better education about responsible use',
        'Allows research into medical applications',
        'Reduces drug-related violence from illegal trade'
      ]
    }
  ]
});

export const getResearchReferences = () => ({
  title: 'Scientific Research and Resources',
  studies: [
    {
      topic: 'Medical Efficacy',
      reference: 'National Academies of Sciences, Engineering, and Medicine. (2017). The Health Effects of Cannabis and Cannabinoids.',
      summary: 'Comprehensive review finding conclusive evidence for cannabis effectiveness in treating chronic pain, nausea, and spasticity.'
    },
    {
      topic: 'Safety Profile',
      reference: 'Gable, R. S. (2004). Comparison of acute lethal toxicity of commonly abused psychoactive substances.',
      summary: 'Found cannabis to have one of the highest safety ratios of all recreational substances.'
    },
    {
      topic: 'Opioid Reduction',
      reference: 'Bachhuber, M. A., et al. (2014). Medical cannabis laws and opioid analgesic overdose mortality in the United States.',
      summary: 'States with medical cannabis laws had 24.8% lower opioid overdose mortality rates.'
    },
    {
      topic: 'Economic Impact',
      reference: 'Colorado Department of Revenue. (2024). Marijuana Tax Data.',
      summary: 'Colorado has collected billions in cannabis tax revenue since legalization, funding schools, healthcare, and infrastructure.'
    }
  ],
  organizations: [
    {
      name: 'National Organization for the Reform of Marijuana Laws (NORML)',
      website: 'https://norml.org',
      description: 'Leading organization advocating for cannabis law reform'
    },
    {
      name: 'Marijuana Policy Project (MPP)',
      website: 'https://www.mpp.org',
      description: 'Focuses on changing state and federal cannabis laws'
    },
    {
      name: 'Drug Policy Alliance',
      website: 'https://drugpolicy.org',
      description: 'Advocates for drug policies grounded in science and compassion'
    },
    {
      name: 'Americans for Safe Access (ASA)',
      website: 'https://www.safeaccessnow.org',
      description: 'Medical cannabis advocacy organization'
    }
  ]
});
