# Certforge AI — Frontend Development Specification

## 1. Project Overview

Build a professional, modern, responsive frontend for **
Certforge **, an AI-powered cybersecurity certification preparation platform.

The platform helps students prepare for cybersecurity certifications through:

- AI-powered personalized tutoring
- Certification-specific learning paths
- PDF-based knowledge assistance
- Practice assessments
- Weak-topic detection
- Learning analytics
- Personalized study plans

The frontend must feel like a real commercial SaaS product developed by an experienced frontend engineering team.

Do not make the interface look like a generic AI-generated dashboard template.

---

# 2. Frontend Technology Stack

Use the following technologies:

- Next.js with App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React icons
- React Hook Form
- Zod
- TanStack Query
- Recharts
- Axios or a centralized Fetch API client

Use the latest stable compatible versions when initializing the project.

Do not install unnecessary libraries.

---

# 3. Design Philosophy

Create a premium cybersecurity education platform.

### Visual direction

The interface should combine:

- Modern SaaS dashboard design
- Professional cybersecurity aesthetics
- Minimalist layouts
- Premium EdTech experience
- Subtle futuristic visual elements

Avoid:

- Excessive gradients
- Too many glowing effects
- Random decorative elements
- Oversized cards
- Excessive rounded corners
- Too many colors
- Unnecessary animations
- Generic AI-generated layouts

The design should be clean, consistent, and easy to navigate.

### Color palette

Primary background:
- #0B1120

Secondary background:
- #111827

Card background:
- #172033

Primary accent:
- #3B82F6

Secondary accent:
- #06B6D4

Success:
- #22C55E

Warning:
- #F59E0B

Danger:
- #EF4444

Primary text:
- #F8FAFC

Secondary text:
- #94A3B8

Borders:
- #263449

Use colors consistently through design tokens and CSS variables.

Support a dark-first experience. Keep the design accessible and maintain sufficient contrast.

---

# 4. Application Layout

Create a reusable application layout.

### Sidebar

The sidebar should contain:

Brand:
- CyberPrep AI logo
- Product name

Navigation:

1. Overview
2. My Certifications
3. AI Tutor
4. Practice Lab
5. Learning Progress
6. Study Planner

Additional section:

7. Resources
8. Settings

Bottom section:
- User profile
- Account settings
- Logout

### Top navigation

Include:

- Breadcrumb navigation
- Current page title
- Search button
- Notifications
- User avatar
- Profile dropdown

### Responsive behavior

Desktop:
- Fixed or collapsible sidebar
- Main content area
- Top navigation

Tablet:
- Compact sidebar
- Responsive cards

Mobile:
- Mobile navigation drawer
- Responsive content
- Touch-friendly controls
- No horizontal overflow

---

# 5. Pages and Features

## PAGE 1: Landing Page

Route: `/`

Create a premium landing page.

### Hero section

Headline:

"Master Cybersecurity. Prepare Smarter with AI."

Description:

"Your personalized AI learning companion for cybersecurity certifications. Understand complex security concepts, practice smarter, and track your progress."

CTA buttons:

- Start Learning
- Explore Certifications

Hero visual:
Create an original dashboard preview or product illustration showing certification progress and AI tutoring.

### Additional sections

1. Hero
2. Platform features
3. How CyberPrep AI works
4. Supported certifications
5. AI tutor preview
6. Learning analytics preview
7. Why CyberPrep AI
8. Final CTA
9. Footer

Do not invent customer testimonials, user counts, ratings, or success statistics.

---

## PAGE 2: Authentication

Routes:
- `/login`
- `/register`

Login:
- Email
- Password
- Remember me
- Forgot password
- Login button
- Register link

Registration:
- Full name
- Email
- Password
- Confirm password
- Terms acceptance
- Create account

Requirements:
- Form validation using Zod
- Clear error messages
- Loading states
- Password visibility toggle
- Accessible form controls

---

## PAGE 3: Student Dashboard

Route: `/dashboard`

Create a personalized student dashboard.

### Welcome section

"Welcome back, [Student Name]"

Subtitle:
"Continue your cybersecurity learning journey."

### Summary cards

Display:

- Enrolled certifications
- Overall learning progress
- Practice tests completed
- Average assessment score

### Certification progress

Show enrolled certification cards.

Each card should include:

- Certification name
- Exam version
- Progress percentage
- Completed domains
- Continue learning button

### Learning analytics

Include:

- Weekly study activity
- Assessment performance
- Domain-level mastery

Use Recharts for charts.

### Weak topics

Display:
- Topic name
- Certification domain
- Accuracy percentage
- Recommended action

### Recommended learning

Display:
- Suggested topic
- Reason for recommendation
- Estimated learning duration
- Start learning button

New students should see a meaningful onboarding state rather than fabricated analytics.

---

## PAGE 4: Certification Library

Route: `/certifications`

Create a certification discovery page.

Include:

- Search bar
- Category filters
- Difficulty filters
- Certification cards

Initial certification examples:

- CompTIA Security+
- CISSP
- CEH
- CompTIA Network+

Each card should show:

- Certification name
- Short description
- Exam version
- Number of domains, when available
- Enrollment status
- Explore button

Do not present unverified exam versions or objectives as official.

---

## PAGE 5: Certification Details

Route: `/certifications/[id]`

Display:

- Certification overview
- Exam information
- Learning objectives
- Domain list
- Topic list
- Student progress

Allow users to explore domains and topics.

Use expandable sections for domains.

Each topic should have:

- Topic title
- Description
- Learning status
- Start learning button

---

## PAGE 6: AI Tutor

Route: `/tutor`

This is one of the most important features.

Create a polished AI tutoring workspace.

### Layout

Left panel:
- Chat history
- New conversation
- Selected certification
- Exam version
- Domain selector
- Topic selector

Main panel:
- Conversation messages
- AI response
- Source citations
- Follow-up questions
- Message input

### Chat input

Placeholder:

"Ask anything about cybersecurity..."

Features:

- Send message
- Enter to send
- Shift + Enter for new line
- Loading indicator
- Streaming response support
- Copy response
- Regenerate response
- Feedback buttons

### AI response layout

Structure explanations using:

- Simple explanation
- Technical explanation
- Practical example
- Real-world application
- Key takeaways
- Source references

Citations must link to real retrieved documents and page references.

Do not generate fake citations.

### Example interaction

Student:

"Explain the difference between symmetric and asymmetric encryption."

AI response should provide:
- Beginner-friendly explanation
- Technical comparison
- Real-world examples
- Practical cybersecurity applications

The frontend must communicate with the backend AI API. Do not hardcode chatbot responses.

---

## PAGE 7: Practice Lab

Route: `/practice`

Create an interactive cybersecurity assessment interface.

### Assessment setup

Allow students to choose:

- Certification
- Exam version
- Domain
- Topic
- Difficulty
- Number of questions

### Assessment screen

Display:

- Question number
- Question text
- Four answer options
- Progress indicator
- Previous and next buttons
- Mark for review
- Submit assessment

### Assessment results

Display:

- Total questions
- Correct answers
- Incorrect answers
- Accuracy percentage
- Time taken
- Topic-level performance

Show explanations after submission.

Do not expose correct answers before submission.

The backend is responsible for assessment scoring.

---

## PAGE 8: Learning Progress

Route: `/progress`

Create a learning analytics dashboard.

Display:

- Overall mastery
- Certification progress
- Domain performance
- Topic performance
- Weekly activity
- Assessment trends

Charts:

1. Weekly learning activity
2. Assessment accuracy trend
3. Domain-wise performance
4. Topic mastery distribution

Weak topic section:

- Topic name
- Accuracy
- Number of attempts
- Recommended revision

Clearly distinguish untested topics from weak topics.

---

## PAGE 9: Study Planner

Route: `/study-plan`

Display:

- Selected certification
- Target exam date
- Daily study availability
- Weak topics
- Recommended tasks

Study plan cards should include:

- Topic
- Task description
- Estimated duration
- Task type
- Completion status

Task types:

- Learn
- Revise
- Practice
- Review mistakes

Allow students to mark tasks complete.

Provide an empty state if no plan exists.

---

## PAGE 10: Admin Dashboard

Route: `/admin`

Only authorized administrators can access this page.

Display:

- Total users
- Certification count
- Uploaded documents
- Document processing status

### Document management

Provide:

- Upload PDF
- Document list
- Certification assignment
- Exam version assignment
- Domain and topic metadata
- Processing status
- Delete document
- Reprocess document

Show upload progress and clear processing errors.

Do not expose admin operations to student accounts.

---

## PAGE 11: Settings

Route: `/settings`

Include:

- Profile information
- Account preferences
- Password change
- Notification preferences
- Learning preferences

---

# 6. Component Architecture

Use reusable components.

Suggested structure:

src/
  app/
  components/
    ui/
    layout/
    dashboard/
    certifications/
    tutor/
    practice/
    analytics/
    study-plan/
    admin/
  hooks/
  lib/
  services/
  types/
  schemas/
  constants/

Examples of reusable components:

- AppSidebar
- AppHeader
- PageHeader
- StatCard
- CertificationCard
- DomainCard
- TopicCard
- ProgressBar
- MasteryBadge
- ChatMessage
- ChatInput
- CitationCard
- QuestionCard
- AssessmentTimer
- PerformanceChart
- EmptyState
- LoadingState
- ErrorState
- ConfirmDialog

Avoid duplicating components across pages.

---

# 7. Frontend API Integration

Create a centralized API layer.

Suggested structure:

services/
  api-client.ts
  auth-service.ts
  certification-service.ts
  tutor-service.ts
  assessment-service.ts
  progress-service.ts
  study-plan-service.ts
  document-service.ts

Requirements:

- Centralized API base URL
- Typed request and response interfaces
- Consistent error handling
- Authentication handling
- Loading states
- Request cancellation where appropriate
- Pagination where required

Use the backend API base URL from environment variables.

Environment variable:

NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1

Never store private API keys in frontend environment variables.

Use secure authentication and refresh handling. Prefer HttpOnly cookies for session or refresh credentials where supported by the backend.

---

# 8. State Management

Use:

- React state for local component state
- TanStack Query for server state
- React Hook Form for forms
- Zod for validation

Avoid unnecessary global state management.

Keep API state separate from UI state.

---

# 9. UX Requirements

Every page must include appropriate:

- Loading states
- Empty states
- Error states
- Success feedback
- Form validation
- Confirmation dialogs
- Responsive behavior

Interactions must work.

Examples:

- Sidebar links navigate correctly.
- Buttons perform their advertised actions.
- Search filters actual loaded results.
- Dropdowns update selected values.
- Assessment navigation works.
- Chat input submits messages.
- Study tasks update completion status.

Do not use buttons that do nothing.

If backend functionality is not yet implemented, display an honest unavailable or coming-soon state instead of fake success.

---

# 10. Accessibility

Implement:

- Semantic HTML
- Keyboard navigation
- Accessible labels
- Visible focus states
- Sufficient color contrast
- Accessible dialogs
- Screen-reader-friendly form errors

---

# 11. Performance

Optimize:

- Page loading
- Component rendering
- Image loading
- API requests
- Large lists
- Chart rendering

Use server components by default.

Use client components only when interaction or browser-side state requires them.

Use lazy loading where appropriate.

---

# 12. Testing

Use:

- TypeScript strict mode
- ESLint
- Component tests where useful
- Playwright for important user workflows

Test these workflows:

1. Registration and login
2. Dashboard loading
3. Certification exploration
4. AI tutor interaction
5. Assessment submission
6. Progress dashboard
7. Admin document upload

---

# 13. Frontend Development Workflow

Before implementation:

1. Inspect the repository.
2. Read CLAUDE.md and PROJECT_STATUS.md.
3. Review the existing frontend setup.
4. Identify reusable components.
5. Prepare an implementation plan.
6. Identify dependencies and required environment variables.

Implement in this order:

1. Frontend project initialization
2. Design system and theme
3. Application layout and navigation
4. Landing page
5. Authentication
6. Student dashboard
7. Certification library
8. Certification details
9. AI tutor
10. Practice lab
11. Learning analytics
12. Study planner
13. Admin dashboard
14. Settings
15. API integration and testing

Do not implement everything in one uncontrolled operation.

Work incrementally and preserve existing code.

---

# 14. Definition of Done

The frontend MVP is complete when:

- All specified pages exist.
- Navigation works.
- Responsive design works.
- Components are reusable.
- Forms have validation.
- API services are centralized.
- Loading, error, and empty states exist.
- No fake metrics or fake AI responses are presented as real.
- Authentication and protected routes work with the backend.
- Core workflows pass tests.
- TypeScript and lint checks pass.

---

# FINAL INSTRUCTION

First inspect the current repository and existing frontend.

Do not immediately generate all pages.

Start with:

1. Frontend architecture report.
2. Final frontend folder structure.
3. Design system.
4. Dependency list.
5. Phase-wise frontend implementation plan.

Then implement the design system, application layout, sidebar, top navigation, and landing page.

After implementation:
- Run the development server.
- Check the pages.
- Run lint and TypeScript checks.
- Fix actual errors.
- Report files created and tests performed.

Prioritize professional UI quality, usability, maintainability, and real functionality over decorative design.