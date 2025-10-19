# 🌿 StopDrugs NGO

A comprehensive educational platform dedicated to fighting drug harm through education while advocating for evidence-based cannabis legalization and combating decades of misinformation.

## 🎯 Mission

StopDrugs is an NGO with a dual mission:

1. **Protect Lives**: Educate people about the real dangers of harmful drugs like opioids, methamphetamine, cocaine, and synthetic drugs. Provide life-saving resources for addiction and recovery.

2. **Advocate for Truth**: Support evidence-based cannabis legalization by sharing scientific research and debunking propaganda. Cannabis has never caused a fatal overdose, has proven medical benefits, and is safer than legal substances like alcohol and tobacco.

3. **Fight Misinformation**: Combat decades of "Reefer Madness" propaganda with peer-reviewed science and facts.

## 🏗️ Architecture

This is a **full-stack monorepo** containing:

### Frontend (Next.js)
- **Location**: `/frontend`
- **Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Features**:
  - Responsive, modern UI with educational content
  - Drug harm education pages
  - Cannabis facts and legalization advocacy
  - Myth-busting section with expandable content
  - Crisis resources and hotlines
  - Mobile-friendly navigation

### Backend (Express)
- **Location**: `/backend`
- **Tech Stack**: Express, Node.js, TypeScript
- **Features**:
  - RESTful API endpoints
  - Educational content data management
  - Cannabis information and research
  - Myth-debunking data
  - CORS-enabled for frontend integration

## 📚 Content Sections

### 1. Drug Harm Education
- Comprehensive information about dangerous drugs (opioids, methamphetamine, cocaine, etc.)
- Harm reduction strategies
- Treatment and recovery resources
- 24/7 crisis hotlines
- Support group information

### 2. Cannabis Facts & Legalization
- Scientific evidence for medical benefits
- Safety profile (zero overdose deaths)
- Comparison with legal substances (alcohol, tobacco)
- Arguments for legalization (health, justice, economic)
- Responsible use guidelines
- Current legal status and progress

### 3. Myth Busting
- Debunking 10+ common cannabis myths
- Gateway drug theory debunked
- Brain damage myths debunked
- Addiction myths debunked
- Media literacy guide
- How to spot misinformation
- Trusted research resources

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/vincedotcode/stopdrugs.git
cd stopdrugs
```

2. **Setup Backend**
```bash
cd backend
npm install
cp .env.example .env
npm run build
npm run dev
```

The backend API will run on `http://localhost:3001`

3. **Setup Frontend** (in a new terminal)
```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:3000`

## 🔧 Development

### Backend Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run production build

### Frontend Scripts
- `npm run dev` - Start Next.js development server
- `npm run build` - Build for production
- `npm start` - Run production server
- `npm run lint` - Run ESLint

## 📡 API Endpoints

### Education Routes (`/api/education`)
- `GET /` - Get all drug education information
- `GET /drug/:id` - Get specific drug information
- `GET /harm-reduction` - Get harm reduction strategies
- `GET /treatment` - Get treatment resources
- `GET /by-harm/:level` - Filter drugs by harm level

### Cannabis Routes (`/api/cannabis`)
- `GET /` - Get all cannabis education information
- `GET /section/:id` - Get specific section
- `GET /legalization` - Get legalization arguments
- `GET /research` - Get research references
- `GET /sections` - Get all section IDs

### Myths Routes (`/api/myths`)
- `GET /` - Get all cannabis myths
- `GET /myth/:id` - Get specific myth
- `GET /resources` - Get debunking resources
- `GET /media-literacy` - Get media literacy guide
- `GET /search?q=query` - Search myths by keyword

## 🆘 Crisis Resources Featured

The platform prominently features:
- **SAMHSA National Helpline**: 1-800-662-4357 (24/7 substance abuse help)
- **Crisis Text Line**: Text HOME to 741741
- **Suicide Prevention Lifeline**: 988
- **Emergency Services**: 911

## 🎨 Design Philosophy

- **Education First**: Clear, accessible information without judgment
- **Science-Based**: All claims backed by peer-reviewed research
- **Harm Reduction**: Pragmatic approach to reduce deaths and suffering
- **Accessibility**: Mobile-friendly, easy navigation, clear typography
- **Visual Hierarchy**: Color coding for danger levels and information types

## 📖 Key Messages

### About Dangerous Drugs
- Opioids, methamphetamine, cocaine, and synthetic drugs kill tens of thousands annually
- Addiction is a medical condition, not a moral failing
- Treatment works, recovery is possible
- Harm reduction saves lives

### About Cannabis
- Zero recorded fatal overdoses in history
- FDA-approved medical applications
- Lower addiction potential than alcohol/tobacco
- Can reduce opioid dependence
- Prohibition causes more harm than the substance itself
- Legalization supported by science, medicine, and human rights

### About Misinformation
- "Gateway drug" theory debunked
- Brain damage myth debunked
- Most "Reefer Madness" propaganda has no scientific basis
- Modern research contradicts decades-old propaganda
- Media literacy is essential

## 🤝 Contributing

This project is open for contributions! Areas where help is needed:
- Additional educational content
- Multi-language support
- Accessibility improvements
- Mobile app development
- Community features

## ⚖️ Legal & Ethical Considerations

- **Educational Purpose**: All content is for educational purposes only
- **Medical Disclaimer**: This is not medical advice. Consult healthcare professionals.
- **Legal Disclaimer**: Cannabis laws vary by jurisdiction. Know your local laws.
- **Harm Reduction Focus**: We advocate for safety and evidence-based policy.

## 📄 License

MIT License - See LICENSE file for details

## 🙏 Acknowledgments

- National Institute on Drug Abuse (NIDA) for research data
- NORML for cannabis legalization advocacy
- Drug Policy Alliance for evidence-based policy information
- SAMHSA for addiction treatment resources
- All the researchers working on cannabis and addiction science

## 📞 Contact & Support

For questions, suggestions, or support:
- Create an issue on GitHub
- Emergency help: Call 911 or SAMHSA at 1-800-662-4357

---

**Remember**: If you or someone you know is struggling with substance use, help is available 24/7. Recovery is possible. You are not alone.

🌿 **StopDrugs** - Truth About Drugs, Science About Cannabis