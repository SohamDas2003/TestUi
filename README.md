# UniZenith Test UI

A comprehensive SAT practice test interface built with Next.js, React, and TypeScript. This application provides an authentic standardized test experience with real SAT structure, timing, and question types.

## Features

### 🎯 Authentic SAT Experience
- **Real SAT Structure**: 4 modules across 2 sections (Reading & Writing, Math)
- **Accurate Timing**: 32 minutes for R&W modules, 35 minutes for Math modules
- **Question Types**: Multiple choice, student-produced response (grid-in)
- **Authentic Content**: Reading passages, grammar questions, and math problems

### 📱 Interactive Interface
- **Adaptive Layout**: Conditional left panel for reading passages
- **Question Navigation**: Easy navigation between questions with progress tracking
- **Review System**: Mark questions for review and comprehensive review page
- **Calculator Integration**: Built-in Desmos graphing calculator for math sections

### 🎨 Modern UI/UX
- **Responsive Design**: Works seamlessly across devices
- **Clean Typography**: Uses Lexend font for optimal readability
- **Intuitive Controls**: Clear navigation and answer selection
- **Visual Feedback**: Progress indicators and status updates

## Technology Stack

- **Frontend**: Next.js 15.4.4, React 19.1.0, TypeScript 5.x
- **Styling**: Tailwind CSS 4.x
- **Calculator**: Desmos API integration
- **Development**: ESLint, PostCSS
- **Build Tool**: Next.js with Turbopack

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Home page with test interface
│   └── globals.css         # Global styles
├── components/
│   ├── TestInterface.tsx   # Main test interface wrapper
│   ├── TestContainer.tsx   # Core test logic and state management
│   ├── TestHeader.tsx      # Header with timer, calculator, directions
│   ├── TestFooter.tsx      # Footer with navigation controls
│   ├── MainContent.tsx     # Question display and answer input
│   ├── DirectionsPanel.tsx # Test directions overlay
│   ├── DesmosCalculator.tsx # Graphing calculator component
│   ├── QuestionNavigationPopup.tsx # Question grid popup
│   ├── ReviewPage.tsx      # Review page for module completion
│   └── ModuleLoadingScreen.tsx # Inter-module loading screen
└── data/
    └── data.ts             # SAT test data and type definitions
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd unizenith-test-ui
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### Test Structure
The application follows the official SAT format:
- **Section 1**: Reading and Writing (2 modules, 32 minutes each)
- **Section 2**: Math (2 modules, 35 minutes each)

### Interface Features

#### Navigation
- **Previous/Next**: Navigate between questions
- **Question Grid**: Click question counter to see all questions
- **Review Marking**: Mark questions for later review

#### Tools
- **Calculator**: Access Desmos graphing calculator (Math sections)
- **Directions**: View test instructions anytime
- **Timer**: Track remaining time for current module

#### Answer Input
- **Multiple Choice**: Click to select answers
- **Student Response**: Type numerical answers for grid-in questions

### Data Structure

The test data is structured hierarchically:

```typescript
interface SATTestData {
  testName: string;
  modules: ModuleData[];
  currentModuleIndex: number;
}

interface ModuleData {
  title: string;           // "Reading and Writing" or "Math"
  section: string;         // "Section 1" or "Section 2"
  module: string;          // "Module 1" or "Module 2"
  timeLimit: string;       // "32:00" or "35:00"
  totalQuestions: number;  // 27 or 22
  hasPassage: boolean;     // true for R&W, false for Math
  questions: TestQuestion[];
}
```

## Development

### Available Scripts

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Key Components

#### TestContainer
Central component managing:
- Test state and progression
- Timer functionality
- Answer tracking
- Module transitions

#### MainContent
Handles question display with:
- Conditional layout (centered vs. split-panel)
- Answer input components
- Passage display for reading questions

#### DesmosCalculator
Integrated graphing calculator featuring:
- Draggable interface
- Full Desmos functionality
- Proper cleanup and state management

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Future Enhancements

- [ ] Additional standardized tests (GMAT, GRE)
- [ ] Score calculation and analytics
- [ ] User authentication and progress saving
- [ ] Performance metrics and timing analysis
- [ ] Accessibility improvements
- [ ] Mobile app version

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/) and [React](https://reactjs.org/)
- Calculator powered by [Desmos API](https://www.desmos.com/api/)
- Typography using [Lexend](https://fonts.google.com/specimen/Lexend) font family
- Styling with [Tailwind CSS](https://tailwindcss.com/)
