export interface Myth {
  id: string;
  myth: string;
  reality: string;
  explanation: string[];
  sources?: string[];
}

export const cannabisMyths: Myth[] = [
  {
    id: 'gateway-drug',
    myth: 'Cannabis is a "gateway drug" that leads to harder drug use',
    reality: 'Cannabis is NOT a gateway drug. This myth has been thoroughly debunked by modern research.',
    explanation: [
      'The gateway drug theory has been discredited by numerous scientific studies.',
      'The vast majority of cannabis users never progress to harder drugs.',
      'Correlation does not equal causation - most hard drug users may have tried cannabis first, but this is because cannabis is more available, not because it causes progression.',
      'Studies show that alcohol and tobacco are actually more likely to precede hard drug use than cannabis.',
      'The real "gateway" is often the illegal drug market itself - prohibition forces cannabis users to interact with dealers who may sell dangerous drugs.',
      'Countries that have decriminalized cannabis have not seen increases in hard drug use.',
      'Biological research shows no pharmacological mechanism by which cannabis would cause users to seek other drugs.'
    ],
    sources: [
      'Institute of Medicine (1999): Cannabis is not a gateway drug',
      'RAND Corporation study: Gateway effect is a result of drug policies and markets',
      'University of Pittsburgh 12-year study: No evidence of gateway effect'
    ]
  },
  {
    id: 'brain-damage',
    myth: 'Cannabis causes permanent brain damage and kills brain cells',
    reality: 'Cannabis does NOT kill brain cells or cause permanent brain damage in adults.',
    explanation: [
      'This myth originated from a flawed 1974 study that has been thoroughly discredited.',
      'Modern brain imaging studies show no structural brain damage from cannabis use in adults.',
      'Unlike alcohol, which does kill brain cells, cannabis has neuroprotective properties.',
      'Research actually suggests cannabis may help protect brain cells in certain conditions.',
      'Important note: Heavy use during adolescence may affect brain development, which is why adult-only use is recommended.',
      'Studies show any cognitive effects from adult cannabis use are largely reversible after abstinence.',
      'Cannabis has been shown to promote neurogenesis (creation of new brain cells) in some studies.'
    ],
    sources: [
      'Journal of the International Neuropsychological Society (2003): No residual cognitive effects in heavy users after 28 days abstinence',
      'JAMA Psychiatry (2015): No long-term effects on brain structure in adults',
      'Proceedings of the National Academy of Sciences: Cannabis promotes neurogenesis'
    ]
  },
  {
    id: 'highly-addictive',
    myth: 'Cannabis is highly addictive and causes severe withdrawal',
    reality: 'Cannabis has LOW addiction potential, much lower than legal substances like alcohol and tobacco.',
    explanation: [
      'Only about 9% of cannabis users develop problematic use patterns, compared to 15% for alcohol and 32% for tobacco.',
      'Cannabis does not cause the severe physical dependence associated with alcohol, opioids, or benzodiazepines.',
      'Withdrawal symptoms from cannabis are mild compared to alcohol or opioid withdrawal, which can be life-threatening.',
      'Cannabis withdrawal typically includes mild symptoms like irritability, sleep difficulty, and appetite changes that resolve within 1-2 weeks.',
      'Most cannabis users can stop without difficulty and without medical intervention.',
      'The concept of "addiction" is often confused with regular use - many people use cannabis regularly without it causing harm to their life.',
      'Cannabis dependence is primarily psychological rather than physical.'
    ],
    sources: [
      'National Institute on Drug Abuse: Cannabis addiction rates',
      'Addiction journal: Comparative addiction risks of substances',
      'Drug and Alcohol Dependence: Cannabis withdrawal syndrome is mild and self-limiting'
    ]
  },
  {
    id: 'lung-damage',
    myth: 'Smoking cannabis causes lung cancer and COPD like tobacco',
    reality: 'Research has NOT established a causal link between cannabis smoking and lung cancer or COPD.',
    explanation: [
      'Despite concerns, large-scale studies have not found increased lung cancer rates among cannabis smokers.',
      'Cannabis smoke contains different chemicals than tobacco and may have different effects.',
      'Some research suggests cannabinoids may have anti-tumor properties that counteract potential harms from smoke.',
      'Typical cannabis users smoke far less than typical tobacco users.',
      'Alternative consumption methods like vaporizing or edibles eliminate smoke exposure entirely.',
      'A 20-year UCLA study found no association between cannabis smoking and lung cancer.',
      'Research indicates cannabis may actually have anti-inflammatory effects on the lungs.',
      'Heavy long-term smoking may cause bronchitis symptoms, but these are reversible with cessation.'
    ],
    sources: [
      'UCLA Donald Tashkin 20-year study: No increased lung cancer risk',
      'International Journal of Cancer (2015): No association with lung cancer',
      'Canadian Medical Association Journal: Cannabis not linked to COPD in moderate use'
    ]
  },
  {
    id: 'motivation',
    myth: 'Cannabis makes people lazy and unmotivated ("amotivational syndrome")',
    reality: 'The "amotivational syndrome" is not supported by scientific evidence.',
    explanation: [
      'Research has failed to find evidence of amotivational syndrome caused by cannabis.',
      'Many successful professionals, athletes, and entrepreneurs use cannabis without loss of motivation.',
      'Studies comparing cannabis users to non-users find no significant differences in motivation or achievement.',
      'Any temporary effects on motivation are acute (while under the influence) and not permanent.',
      'Correlation with lower achievement in some studies is better explained by socioeconomic factors, not cannabis itself.',
      'Selection bias: People who are already less motivated may be more likely to use any substance.',
      'Prohibition and criminalization can impact life outcomes more than cannabis use itself.'
    ],
    sources: [
      'Psychology of Addictive Behaviors (2007): No evidence of amotivational syndrome',
      'Drug and Alcohol Dependence: Cannabis use not associated with reduced motivation',
      'Journal of Addiction Medicine: No causal link between cannabis and motivation'
    ]
  },
  {
    id: 'psychosis',
    myth: 'Cannabis inevitably causes schizophrenia and psychosis',
    reality: 'Cannabis does NOT cause schizophrenia in most people. The relationship is complex and involves multiple factors.',
    explanation: [
      'Schizophrenia rates have remained stable despite massive increases in cannabis use, arguing against causation.',
      'Cannabis may trigger early symptoms in people already predisposed to schizophrenia, but doesn\'t cause it in those without genetic risk.',
      'The vast majority of cannabis users never develop psychosis or schizophrenia.',
      'Cannabis-induced psychosis is rare, temporary, and typically only occurs with very high doses in susceptible individuals.',
      'CBD (cannabidiol) actually has anti-psychotic properties and is being studied as a treatment for schizophrenia.',
      'Correlation studies cannot establish causation - other factors like genetics, environment, and other substance use are involved.',
      'Those with family history of psychosis should be cautious, but this represents a small percentage of the population.'
    ],
    sources: [
      'Schizophrenia Research (2009): No evidence cannabis causes schizophrenia',
      'Frontiers in Psychiatry: Cannabis may precipitate but not cause schizophrenia',
      'British Journal of Psychiatry: Stable schizophrenia rates despite increased cannabis use'
    ]
  },
  {
    id: 'memory-loss',
    myth: 'Cannabis causes permanent memory loss',
    reality: 'Cannabis does NOT cause permanent memory loss. Effects on memory are temporary and reversible.',
    explanation: [
      'Cannabis can temporarily affect short-term memory while under the influence, but this is acute and reversible.',
      'Studies show memory function returns to normal after stopping cannabis use.',
      'Long-term memory and memory formation are not permanently impaired by cannabis use.',
      'Any lingering effects in heavy users resolve within 3-4 weeks of abstinence.',
      'Cannabis may actually protect against some types of memory decline, including Alzheimer\'s disease.',
      'Research shows no permanent cognitive impairment from adult cannabis use.',
      'Memory effects are dose-dependent and vary between individuals.'
    ],
    sources: [
      'Journal of the International Neuropsychological Society: Cognitive function recovers after abstinence',
      'Neurology: No permanent memory impairment from cannabis',
      'Journal of Alzheimer\'s Disease: Cannabis compounds may prevent Alzheimer\'s'
    ]
  },
  {
    id: 'reproductive-harm',
    myth: 'Cannabis causes infertility and harms reproduction',
    reality: 'Evidence does NOT support claims that cannabis causes infertility or significant reproductive harm.',
    explanation: [
      'Studies on cannabis and fertility have produced inconsistent and inconclusive results.',
      'Many cannabis users successfully conceive and have healthy children.',
      'Any effects on fertility appear to be reversible and not clinically significant.',
      'Cannabis use during pregnancy should be avoided as a precaution, but severe birth defects have not been conclusively linked.',
      'More research is needed, but current evidence does not support major fertility concerns.',
      'Stress and other lifestyle factors have much stronger effects on fertility than cannabis.',
      'Recommendations to avoid use during pregnancy are precautionary rather than based on proven severe harm.'
    ],
    sources: [
      'Fertility and Sterility: Inconsistent evidence on cannabis and fertility',
      'Journal of Perinatal Medicine: No major birth defects linked to cannabis',
      'Human Reproduction Update: Limited evidence of reproductive harm'
    ]
  },
  {
    id: 'crime-violence',
    myth: 'Cannabis causes violent behavior and crime',
    reality: 'Cannabis does NOT cause violence. In fact, it tends to reduce aggression.',
    explanation: [
      'Cannabis has calming effects and is associated with decreased aggression, not increased violence.',
      'Crime statistics from legalized states show decreases in violent crime after legalization.',
      'This myth was propaganda from the "Reefer Madness" era and has no scientific basis.',
      'Unlike alcohol, which is strongly associated with violence, cannabis reduces violent tendencies.',
      'Studies consistently show cannabis users are LESS likely to commit violent crimes.',
      'Any association between cannabis and crime is due to prohibition itself, not the substance.',
      'Legalization has not led to increased crime rates in any jurisdiction.'
    ],
    sources: [
      'Journal of Economic Behavior & Organization: Cannabis legalization reduces violent crime',
      'International Journal of Drug Policy: Cannabis users less likely to be violent',
      'RAND Corporation: No increase in crime from legalization'
    ]
  },
  {
    id: 'no-medical-value',
    myth: 'Cannabis has no legitimate medical value',
    reality: 'Cannabis has PROVEN medical value and is increasingly accepted by the medical community.',
    explanation: [
      'The FDA has approved cannabis-derived medications (Epidiolex for epilepsy).',
      'Thousands of peer-reviewed studies document medical benefits of cannabis.',
      'Major medical organizations now support medical cannabis access.',
      'Cannabis is effective for chronic pain, nausea, seizures, and many other conditions.',
      'Many patients find cannabis more effective and safer than pharmaceutical alternatives.',
      'The Schedule I classification (no medical value) is politically motivated, not scientifically based.',
      'Medical cannabis programs exist in majority of US states and many countries worldwide.'
    ],
    sources: [
      'National Academies of Sciences: Conclusive evidence for medical efficacy',
      'FDA approval of Epidiolex',
      'American Medical Association: Supports research and rescheduling'
    ]
  }
];

export const getDebunkingResources = () => ({
  title: 'Resources for Fact-Checking Cannabis Information',
  description: 'When you encounter claims about cannabis, verify them using credible sources:',
  sources: [
    {
      name: 'National Institute on Drug Abuse (NIDA)',
      url: 'https://nida.nih.gov/',
      description: 'Government research on drugs, though sometimes conservative'
    },
    {
      name: 'PubMed',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
      description: 'Database of peer-reviewed scientific research'
    },
    {
      name: 'Project CBD',
      url: 'https://www.projectcbd.org/',
      description: 'Science-based information on cannabis and CBD'
    },
    {
      name: 'NORML',
      url: 'https://norml.org/',
      description: 'Evidence-based cannabis information and advocacy'
    },
    {
      name: 'Drug Policy Alliance',
      url: 'https://drugpolicy.org/',
      description: 'Fact-based drug policy information'
    }
  ],
  tips: [
    'Look for peer-reviewed scientific studies, not opinion pieces',
    'Check the date - cannabis research is evolving rapidly',
    'Be wary of claims that seem extreme or emotional',
    'Consider the source - is it credible and unbiased?',
    'Look for consensus among multiple studies, not single studies',
    'Understand that absence of evidence is not evidence of absence',
    'Be critical of both prohibition and legalization propaganda'
  ]
});

export const getMediaLiteracy = () => ({
  title: 'Media Literacy: Recognizing Propaganda',
  description: 'How to identify misinformation about cannabis:',
  redFlags: [
    {
      flag: 'Outdated Information',
      explanation: 'Claims based on research from the 1970s-1980s that has since been discredited'
    },
    {
      flag: 'Emotional Appeals',
      explanation: 'Using fear tactics or emotional language instead of scientific evidence'
    },
    {
      flag: 'Extreme Claims',
      explanation: 'Suggesting cannabis is either completely harmless or extremely dangerous'
    },
    {
      flag: 'Cherry-Picking',
      explanation: 'Citing only studies that support one view while ignoring contradicting evidence'
    },
    {
      flag: 'Lack of Sources',
      explanation: 'Making claims without citing credible scientific research'
    },
    {
      flag: 'Conflict of Interest',
      explanation: 'Information from organizations with financial stake in prohibition (private prisons, pharmaceutical companies)'
    },
    {
      flag: '"Reefer Madness" Language',
      explanation: 'Using outdated propaganda terms or stereotypes'
    }
  ],
  criticalQuestions: [
    'Who funded this research or published this information?',
    'Is this from a peer-reviewed scientific source?',
    'When was this information published? Is it current?',
    'Does this represent scientific consensus or an outlier study?',
    'Are there conflicts of interest?',
    'Does this use emotional language or stick to facts?',
    'Can I find this information confirmed by multiple credible sources?'
  ]
});
