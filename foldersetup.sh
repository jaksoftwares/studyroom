#!/bin/bash

# Define the base directories inside src
directories=(
  "src/app" 
  "src/app/auth" 
  "src/app/api" 
  "src/app/api/auth"
  "src/app/api/users"
  "src/app/api/assignments"
  "src/app/api/moderators"
  "src/app/api/payments"
  "src/app/api/reviews"
  "src/app/dashboard"
  "src/app/dashboard/student"
  "src/app/dashboard/writer"
  "src/app/dashboard/moderator"
  "src/app/dashboard/admin"
  "src/components"
  "src/components/ui"
  "src/components/forms"
  "src/components/dashboard"
  "src/hooks"
  "src/utils"
  "src/lib"
  "src/config"
  "src/context"
  "src/store"
  "src/services"
  "public/images"
  "public/icons"
  "styles"
  "prisma"
)

# Create directories
echo "Creating project structure..."
for dir in "${directories[@]}"; do
  mkdir -p "$dir"
done

# Create placeholder files for each directory
echo "Creating essential files..."

# API Endpoints
touch src/app/api/auth/login.ts
touch src/app/api/auth/register.ts
touch src/app/api/users/getUser.ts
touch src/app/api/users/updateUser.ts
touch src/app/api/assignments/create.ts
touch src/app/api/assignments/get.ts
touch src/app/api/assignments/update.ts
touch src/app/api/moderators/approve.ts
touch src/app/api/payments/processPayment.ts
touch src/app/api/reviews/submitReview.ts

# Dashboard Sections
touch src/app/dashboard/student/index.tsx
touch src/app/dashboard/student/assignments.tsx
touch src/app/dashboard/student/profile.tsx
touch src/app/dashboard/writer/index.tsx
touch src/app/dashboard/writer/availableTasks.tsx
touch src/app/dashboard/writer/submissions.tsx
touch src/app/dashboard/moderator/index.tsx
touch src/app/dashboard/moderator/pendingReviews.tsx
touch src/app/dashboard/admin/index.tsx
touch src/app/dashboard/admin/manageUsers.tsx
touch src/app/dashboard/admin/siteSettings.tsx

# Components
touch src/components/ui/Button.tsx
touch src/components/ui/Input.tsx
touch src/components/forms/LoginForm.tsx
touch src/components/forms/RegisterForm.tsx
touch src/components/dashboard/Sidebar.tsx
touch src/components/dashboard/Navbar.tsx

# Other Essential Files
touch src/config/siteConfig.ts
touch src/config/authConfig.ts
touch src/hooks/useAuth.ts
touch src/hooks/useFetch.ts
touch src/utils/helpers.ts
touch src/utils/constants.ts
touch src/context/AuthContext.tsx
touch src/store/store.ts
touch src/services/api.ts
touch prisma/schema.prisma
touch styles/global.css

# Setup TailwindCSS in global.css
echo "@tailwind base;" >> styles/global.css
echo "@tailwind components;" >> styles/global.css
echo "@tailwind utilities;" >> styles/global.css

# Initialize Prisma with PostgreSQL connection in .env
echo "DATABASE_URL='postgresql://user:password@localhost:5432/studyroom_db'" >> .env

echo "Project structure setup complete! ✅"
