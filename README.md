# Ralto

Share instructions with everyone using beautiful markdown documents.

## Features

- Rich text editor with markdown support
- Syntax highlighting for code blocks
- Live preview
- Dark mode support
- Authentication with GitHub and Google
- Share documents with unique URLs
- Copy to clipboard functionality

## Getting Started

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a Supabase project at [https://supabase.com](https://supabase.com)

4. Copy the `.env.example` file to `.env.local` and fill in your Supabase credentials:

   ```bash
   cp .env.example .env.local
   ```

5. Run the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database Schema

The application uses two main tables in Supabase:

### Documents

- id: uuid (primary key)
- created_at: timestamp
- updated_at: timestamp
- title: text
- content: text
- user_id: uuid (foreign key to auth.users)
- slug: text (unique)

### Profiles

- id: uuid (primary key, references auth.users)
- created_at: timestamp
- username: text (unique)
- full_name: text
- avatar_url: text

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [@uiw/react-md-editor](https://uiwjs.github.io/react-md-editor/)
- [TypeScript](https://www.typescriptlang.org/)
