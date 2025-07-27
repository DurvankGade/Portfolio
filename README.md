# Durvank Gade - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Showcasing expertise in AI/ML, full-stack development, and innovative project solutions.

## 🚀 Features

- **Modern Design**: Clean, professional design with gradient effects and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth scrolling navigation and hover effects
- **Performance**: Optimized for fast loading and smooth interactions
- **Accessible**: Built with accessibility in mind
- **SEO Ready**: Proper meta tags and structured content

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, CSS Animations
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-tailwind-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Hero.tsx        # Hero section with profile
│   ├── About.tsx       # About section with skills
│   ├── Experience.tsx  # Work experience and education
│   ├── Contact.tsx     # Contact form and information
│   ├── Footer.tsx      # Footer with links
│   └── Navigation.tsx  # Navigation bar
├── pages/              # Page components
│   └── Projects.tsx    # Projects showcase
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles and animations
```

## 🎨 Customization

### Profile Information
Update the following files to customize your profile:

- **Hero.tsx**: Update name, title, and description
- **About.tsx**: Modify skills, education, and achievements
- **Experience.tsx**: Update work experience and certifications
- **Projects.tsx**: Add your projects with descriptions and links
- **Contact.tsx**: Update contact information and social links

### Styling
- **Colors**: Modify the gradient colors in `src/index.css`
- **Fonts**: Update font family in CSS variables
- **Animations**: Customize animation durations and effects

### Profile Image
Replace `/public/assets/profile.svg` with your actual profile photo:
1. Add your image to `/public/assets/` directory
2. Update the image source in `src/components/Hero.tsx`
3. Recommended size: 400x400 pixels or larger

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### Other Platforms
The project can be deployed to any static hosting platform that supports React applications.

## 📊 Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint (if configured)

## 📝 Content Updates

### Adding New Projects
1. Open `src/pages/Projects.tsx`
2. Add a new project object to the `projects` array
3. Include title, description, technologies, and GitHub link

### Updating Skills
1. Open `src/components/About.tsx`
2. Modify the `skills` object with your expertise
3. Update the skills categories as needed

### Modifying Experience
1. Open `src/components/Experience.tsx`
2. Update the `experiences`, `education`, and `certifications` arrays
3. Add or remove entries as needed

## 🎯 Key Sections

1. **Hero Section**: Introduction with profile image and key highlights
2. **About Section**: Detailed background, skills, and achievements
3. **Projects Section**: Showcase of technical projects with descriptions
4. **Experience Section**: Work history, education, and certifications
5. **Contact Section**: Contact form and social media links

## 🔗 Social Links

Update the social media links in:
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support or questions, please contact:
- Email: durvankgade@gmail.com
- GitHub: [@DurvankGade](https://github.com/DurvankGade)

---

**Built with ❤️ by Durvank Gade** 