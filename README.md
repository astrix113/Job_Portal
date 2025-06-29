# Hirrd – Job Portal Web App 🚀

Hirrd is a modern job portal built with **React**, **Supabase**, and **shadcn/ui**, designed to streamline the recruitment and application process. It allows recruiters to post and manage jobs, create companies, and track applicant statuses, while applicants can browse, filter, and apply to jobs in a seamless, responsive UI.

![Hirrd Banner](./public/banner.jpeg) <!-- Replace with your banner path if available -->

---

## ✨ Features

### 🔍 For Applicants
- Browse available jobs by **location**, **company**, **role**, and **status**
- Apply for jobs directly via a structured and validated form
- View application status (e.g., Under Review, Accepted, Rejected)

### 🧑‍💼 For Recruiters
- Create and manage multiple **companies**
- Post new **job listings** with detailed metadata
- Update job status: `Open`, `Closed`, `Under Review`
- Filter and manage applicant submissions per job

### 📦 Tech Stack
- **Frontend**: React 19, Vite, TailwindCSS, shadcn/ui
- **State Management**: React Hook Form, Zod
- **Backend**: Supabase (PostgreSQL + Auth + Storage)
- **Routing**: React Router v6
- **UI/UX**: Radix UI + Tailwind + custom theming

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- Supabase project (create from [supabase.io](https://supabase.io))

### 1. Clone the Repo
```bash
git clone https://github.com/your-username/hirrd.git
cd hirrd


```
### 2. Install Dependencies
```bash
npm install
# or
yarn install
```
### 3. Setup Environment Variables
```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```
### 4. Run the Development Server
```bash
npm run dev
# or
yarn dev
```

### 📂 Folder Structure
```bash
src/
├── components/       # UI components (Buttons, Modals, Inputs)
├── pages/            # Routes (Home, Job, Recruiter)
├── hooks/            # Custom hooks (auth, fetch)
├── lib/              # Utility functions (supabase client, validators)
├── types/            # TypeScript types
└── styles/           # Global styles & Tailwind config
```
## 📊 Project Stats

- 📦 **25+ components**
- 🧠 **100% TypeScript**
- ⚡ **Real-time updates with Supabase**
- 🔒 **Secure authentication & authorization**
- ✅ **Form validation with Zod & React Hook Form**
- 🎨 **Fully responsive with dark mode support**

---

## 🛣️ Roadmap

- [ ] Resume Upload & Viewer  
- [ ] Saved Jobs for Applicants  
- [ ] Admin Analytics Dashboard  
- [ ] Email Notification System  
- [ ] Mobile PWA Support  

---

## 🧪 Testing

**Planned:**

- ✅ Unit Testing with **Vitest**
- ✅ E2E Testing with **Playwright**

---

## 🛠️ Contributing

Contributions are welcome!

1. Fork the repository  
2. Create a feature branch:  
   ```bash
   git checkout -b feat/your-feature



