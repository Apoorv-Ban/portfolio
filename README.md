# Apoorv Bandyopadhyay Portfolio

Production-ready cybersecurity consulting portfolio for Apoorv Bandyopadhyay. The site is a Vite, React, TypeScript, and Tailwind CSS single-page application based on the exported `Kinetic Sentinel` design system.

## Technology Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React

## Project Structure

- `src/components/layout` - navigation and footer
- `src/components/sections` - portfolio page sections
- `src/components/ui` - small reusable presentation components
- `src/data/portfolio.ts` - centralized content, links, credentials, and TODO placeholders
- `public/assets` - profile image assets
- `public/certifications` - credential badge assets and credential JSON files
- `public/resume` - downloadable resume PDF
- `public/robots.txt` and `public/sitemap.xml` - production SEO files

## Local Development

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm run dev
```

Create a production build:

```bash
pnpm run build
```

Preview the production build:

```bash
pnpm run preview
```

## Content Updates

Update portfolio content in `src/data/portfolio.ts`. This includes navigation, hero copy, expertise categories, sector experience, professional experience, selected engagements, credentials, social links, email, and resume path.

Missing values are intentionally marked with TODO comments in the data file rather than invented:

- Fiverr Pro profile URL
- CEH Practical verification URL
- Preferred CRTP verification URL, if different from the exported design reference

## Asset Management

Profile image:

- Source asset copied from `Assets/Profile_picture.jpg`
- Optimized WebP used at `public/assets/profile-picture.webp`

Resume:

- Replace `public/resume/Apoorv_Bandyopadhyay_Fiverr_Pro_Resume.pdf` with an updated PDF using the same filename, or update `portfolio.person.resumeUrl`.

Credentials:

- CRTP uses `public/certifications/crtp.avif`
- CEH Practical uses `public/certifications/ceh-practical.png`
- PNPT and eCTHP use badge URLs from the provided W3C credential JSON files because local image files were not present in the project
- Replace PNPT/eCTHP badge URLs with local files in `public/certifications` if local badge images are later added

## GitHub Deployment Workflow

1. Create a new GitHub repository.
2. Initialize git locally if needed.
3. Add the project files.
4. Commit the production portfolio.
5. Push to the GitHub repository.

Example:

```bash
git init
git add .
git commit -m "Build portfolio website"
git branch -M main
git remote add origin <your-github-repository-url>
git push -u origin main
```

## Vercel Deployment

1. Import the GitHub repository into Vercel.
2. Use the Vite defaults:
   - Build command: `pnpm run build`
   - Output directory: `dist`
3. Deploy the project.
4. Confirm the generated Vercel URL loads correctly.

## GoDaddy Custom Domain Guidance

The domain will be managed in GoDaddy and the website will be hosted on Vercel.

1. Add the custom domain in the Vercel project domain settings.
2. Use the exact DNS records shown by Vercel for the specific project and domain.
3. Add or update those records in GoDaddy DNS management.
4. Configure both domain variants if needed:
   - `example.com`
   - `www.example.com`
5. Choose the preferred canonical domain in Vercel.
6. Configure the non-preferred variant to redirect to the preferred domain.
7. Wait for DNS verification.
8. Vercel will automatically provision HTTPS after the domain verifies.

Do not hardcode generic DNS values from examples. Always use the records shown in the Vercel dashboard for the actual project.

## SEO Configuration

Before launch:

1. Replace `https://example.com/` in `index.html`, `public/robots.txt`, `public/sitemap.xml`, and `src/data/portfolio.ts`.
2. Update Open Graph image URLs in `index.html`.
3. Confirm the sitemap uses the final canonical domain.
4. Rebuild and redeploy.

## Accuracy Notes

Professional experience, education, skills, and certifications were taken from the provided resume files. Engagements are anonymized and avoid client names, vulnerability counts, financial impact, and sensitive technical details.
