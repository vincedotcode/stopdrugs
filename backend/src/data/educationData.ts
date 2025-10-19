export interface DrugInfo {
  id: string;
  name: string;
  category: string;
  harmLevel: 'high' | 'medium' | 'low';
  shortDescription: string;
  effects: string[];
  risks: string[];
  addictionPotential: string;
  longTermEffects: string[];
  resources: string[];
}

export const drugsEducation: DrugInfo[] = [
  {
    id: 'opioids',
    name: 'Opioids',
    category: 'Depressants',
    harmLevel: 'high',
    shortDescription: 'Opioids are highly addictive substances that include prescription painkillers and heroin.',
    effects: [
      'Pain relief',
      'Euphoria',
      'Drowsiness',
      'Confusion',
      'Nausea',
      'Respiratory depression'
    ],
    risks: [
      'Overdose death',
      'Severe physical dependence',
      'Withdrawal symptoms',
      'Collapsed veins (from injection)',
      'Infectious diseases (from needle sharing)',
      'Chronic constipation'
    ],
    addictionPotential: 'Extremely High - Physical and psychological dependence can develop quickly',
    longTermEffects: [
      'Permanent organ damage',
      'Brain damage from oxygen deprivation',
      'Weakened immune system',
      'Increased risk of mental health disorders',
      'Financial and social problems'
    ],
    resources: [
      'SAMHSA National Helpline: 1-800-662-4357',
      'Narcotics Anonymous',
      'Local treatment centers'
    ]
  },
  {
    id: 'methamphetamine',
    name: 'Methamphetamine',
    category: 'Stimulants',
    harmLevel: 'high',
    shortDescription: 'A powerful and highly addictive stimulant that affects the central nervous system.',
    effects: [
      'Increased wakefulness',
      'Physical activity boost',
      'Decreased appetite',
      'Rapid heart rate',
      'Irregular heartbeat',
      'Increased blood pressure'
    ],
    risks: [
      'Severe dental problems ("meth mouth")',
      'Skin sores from picking',
      'Weight loss and malnutrition',
      'Psychotic behavior',
      'Violent behavior',
      'Risk of stroke and heart attack'
    ],
    addictionPotential: 'Extremely High - Creates powerful psychological addiction',
    longTermEffects: [
      'Permanent damage to blood vessels',
      'Heart and brain damage',
      'Liver and kidney damage',
      'Severe psychological issues',
      'Cognitive impairment',
      'Dental destruction'
    ],
    resources: [
      'Crystal Meth Anonymous',
      'SAMHSA National Helpline: 1-800-662-4357',
      'Local rehabilitation centers'
    ]
  },
  {
    id: 'cocaine',
    name: 'Cocaine',
    category: 'Stimulants',
    harmLevel: 'high',
    shortDescription: 'A powerful stimulant drug made from coca plant leaves.',
    effects: [
      'Increased energy and alertness',
      'Euphoria',
      'Increased heart rate',
      'Increased body temperature',
      'Constricted blood vessels',
      'Dilated pupils'
    ],
    risks: [
      'Heart attacks',
      'Stroke',
      'Seizures',
      'Sudden death',
      'Nasal damage (from snorting)',
      'Lung damage (from smoking)'
    ],
    addictionPotential: 'Very High - Strong psychological dependence',
    longTermEffects: [
      'Cardiovascular damage',
      'Respiratory problems',
      'Neurological problems',
      'Sexual dysfunction',
      'Loss of smell (from snorting)',
      'Mental health deterioration'
    ],
    resources: [
      'Cocaine Anonymous',
      'SAMHSA National Helpline: 1-800-662-4357',
      'Emergency services: 911'
    ]
  },
  {
    id: 'synthetic-drugs',
    name: 'Synthetic Drugs',
    category: 'Various',
    harmLevel: 'high',
    shortDescription: 'Man-made chemicals designed to mimic other drugs, often with unpredictable and dangerous effects.',
    effects: [
      'Unpredictable reactions',
      'Extreme agitation',
      'Violent behavior',
      'Hallucinations',
      'Paranoia',
      'Severe health complications'
    ],
    risks: [
      'Unknown chemical composition',
      'Toxic ingredients',
      'Organ failure',
      'Seizures',
      'Death',
      'Permanent psychological damage'
    ],
    addictionPotential: 'Variable but often High',
    longTermEffects: [
      'Brain damage',
      'Organ damage',
      'Mental health disorders',
      'Cognitive impairment',
      'Physical health deterioration'
    ],
    resources: [
      'Poison Control: 1-800-222-1222',
      'SAMHSA National Helpline: 1-800-662-4357',
      'Emergency services: 911'
    ]
  },
  {
    id: 'alcohol',
    name: 'Alcohol',
    category: 'Depressants',
    harmLevel: 'high',
    shortDescription: 'A legal depressant that is one of the most commonly abused substances worldwide.',
    effects: [
      'Impaired judgment',
      'Slowed reflexes',
      'Slurred speech',
      'Loss of coordination',
      'Memory problems',
      'Blackouts'
    ],
    risks: [
      'Alcohol poisoning',
      'Accidents and injuries',
      'Violent behavior',
      'Risky sexual behavior',
      'Liver damage',
      'Brain damage'
    ],
    addictionPotential: 'High - Both physical and psychological dependence',
    longTermEffects: [
      'Cirrhosis of the liver',
      'Brain damage',
      'Heart disease',
      'Cancer risk increase',
      'Weakened immune system',
      'Mental health disorders'
    ],
    resources: [
      'Alcoholics Anonymous',
      'SAMHSA National Helpline: 1-800-662-4357',
      'Al-Anon (for families)'
    ]
  }
];

export const getHarmReductionInfo = () => ({
  title: 'Harm Reduction Strategies',
  description: 'If you or someone you know is struggling with substance use, these strategies can help reduce immediate harm:',
  strategies: [
    {
      title: 'Never Use Alone',
      description: 'Always have someone present who can call for help in case of an emergency.'
    },
    {
      title: 'Start Small',
      description: 'If using, start with a small amount to test potency and reduce overdose risk.'
    },
    {
      title: 'Avoid Mixing Substances',
      description: 'Combining drugs, especially with alcohol, significantly increases risk of overdose and death.'
    },
    {
      title: 'Know the Signs of Overdose',
      description: 'Learn to recognize overdose symptoms and how to respond, including using Naloxone for opioids.'
    },
    {
      title: 'Use Clean Supplies',
      description: 'Never share needles or other drug equipment to prevent infectious disease transmission.'
    },
    {
      title: 'Stay Hydrated',
      description: 'Drink water and take breaks, especially when using stimulants in hot environments.'
    },
    {
      title: 'Seek Help',
      description: 'Treatment and support services are available. Recovery is possible.'
    }
  ],
  emergencyInfo: {
    title: 'In Case of Emergency',
    steps: [
      'Call 911 immediately',
      'Stay with the person',
      'Place them in recovery position (on their side)',
      'Administer Naloxone if available and overdose is suspected',
      'Provide information about what was taken to emergency responders'
    ],
    goodSamaritanLaws: 'Many states have Good Samaritan laws that provide legal protection when calling for help during an overdose.'
  }
});

export const getTreatmentResources = () => ({
  title: 'Treatment and Recovery Resources',
  description: 'Recovery is possible. Help is available 24/7.',
  nationalHotlines: [
    {
      name: 'SAMHSA National Helpline',
      phone: '1-800-662-4357',
      description: 'Free, confidential, 24/7 treatment referral and information service',
      website: 'https://www.samhsa.gov/find-help/national-helpline'
    },
    {
      name: 'Crisis Text Line',
      text: 'Text HOME to 741741',
      description: 'Free, 24/7 crisis support via text message'
    },
    {
      name: 'National Suicide Prevention Lifeline',
      phone: '988',
      description: '24/7 free and confidential support for people in distress'
    }
  ],
  supportGroups: [
    'Narcotics Anonymous (NA)',
    'Alcoholics Anonymous (AA)',
    'SMART Recovery',
    'Cocaine Anonymous',
    'Crystal Meth Anonymous'
  ],
  treatmentTypes: [
    {
      name: 'Inpatient/Residential Treatment',
      description: 'Intensive 24-hour care in a residential setting'
    },
    {
      name: 'Outpatient Treatment',
      description: 'Regular counseling sessions while living at home'
    },
    {
      name: 'Medication-Assisted Treatment (MAT)',
      description: 'Combines medications with counseling and behavioral therapies'
    },
    {
      name: 'Support Groups',
      description: 'Peer-led support for ongoing recovery'
    }
  ]
});
