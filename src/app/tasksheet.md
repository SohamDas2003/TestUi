# SAT Test UI Requirements Analysis

## What I Understand:

### 1. **Test Structure Requirements**
- This is for real standardized exams (SAT, GMAT, GRE, etc.)
- Start with SAT structure first
- Multiple sections and modules with proper timing
- Each module has its own time limit and question count
- Real SAT exam structure with authentic sections/modules/timing

### 2. **UI Layout Requirements**
- **Left Panel (Optional/Conditional):**
  - Contains passages for English/Reading sections
  - May or may not exist depending on section type
  - When absent, question appears in center
- **Right Panel:**
  - Always contains answer choices
- **Layout Logic:**
  - English sections: Left panel (passage) + Right panel (questions/answers)
  - Math sections: May or may not have left panel, question could be centered

### 3. **Data Structure Changes Needed**
- Update data.ts to include:
  - Multiple sections (Reading, Writing, Math, etc.)
  - Multiple modules within each section
  - Each module has its own:
    - Time limit
    - Question count
    - Question types
    - Passage content (if applicable)
- Proper SAT structure with real timing and question counts

### 4. **Flow Control Requirements**
- After each module completion → Review page appears
- Review page "Next" button → Loads next module/section
- Need module-to-module progression logic

### 5. **Loading Screen Requirements**
- Between modules, show loading screen with specific text:
  ```
  This Module is Over
  All your work has been saved
  You'll move on automatically in just a moment.
  Do not refresh this page or quit the app.
  ```
- White background with centered text
- Brief display before next module loads

### 6. **Component Updates Needed**
- Modify `TestContainer` to handle module progression
- Update data props passing throughout component tree
- Add loading state management
- Implement conditional left panel rendering
- Update layout logic for centered vs. side-by-side content

### 7. **Real SAT Structure to Implement**
- **Section 1: Reading and Writing Module 1** (32 minutes, 27 questions)
- **Section 1: Reading and Writing Module 2** (32 minutes, 27 questions)  
- **Section 2: Math Module 1** (35 minutes, 22 questions)
- **Section 2: Math Module 2** (35 minutes, 22 questions)

### 8. **Question Types to Support**
- Reading comprehension with passages
- Writing/grammar questions
- Math multiple choice
- Math student-produced response (grid-in)

## Tasks Breakdown:

1. **Update Data Structure** (data.ts)
   - Create proper SAT section/module hierarchy
   - Add passage content for reading sections
   - Include real timing and question counts
   - Add question types and content

2. **Modify Layout Logic** (MainContent.tsx)
   - Conditional left panel rendering
   - Center content when no passage
   - Responsive layout adjustments

3. **Implement Module Progression** (TestContainer.tsx)
   - Module completion detection
   - Loading state management
   - Next module loading logic

4. **Create Loading Component**
   - Inter-module loading screen
   - Proper styling and text

5. **Update Review Page Flow**
   - Connect to next module progression
   - Handle section/module transitions

6. **Props Threading**
   - Pass section/module data throughout component tree
   - Update all component interfaces