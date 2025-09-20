# Ramakrishna Chennuri - UI Developer Portfolio

A modern, responsive portfolio website built with Angular 16. This portfolio showcases Ramakrishna Chennuri's skills, projects, and experience as a UI Developer with 3+ years of hands-on experience in Angular framework.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Navigation**: Smooth scrolling navigation with mobile hamburger menu
- **Project Showcase**: Filterable project gallery with hover effects
- **Skills Section**: Animated skill bars with different proficiency levels
- **Experience Timeline**: Professional experience displayed in an elegant timeline
- **Contact Form**: Ready-to-use contact form (backend integration needed)
- **Social Links**: Links to GitHub, LinkedIn, and other social profiles

## Sections

1. **Hero Section**: Introduction with call-to-action buttons
2. **About**: Personal bio and statistics
3. **Skills**: Technical skills organized by category (Frontend, Backend, Tools)
4. **Projects**: Portfolio projects including DocisRx Pharmacy Management and AI-Powered Logistics Chatbot
5. **Experience**: Work experience at Archents IT India Pvt. Ltd
6. **Education**: Academic background from CMR College of Engineering
7. **Contact**: Contact information and form

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- Angular CLI
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

## Customization

### Personal Information

The portfolio is already customized with Ramakrishna Chennuri's information. To update personal details, edit the `portfolio.service.ts` file:

```typescript
private portfolioData: PortfolioData = {
  name: 'Ramakrishna Chennuri',
  title: 'UI Developer',
  bio: 'Experienced web developer with 3+ years of hands-on experience...',
  profileImage: 'path/to/your/image.jpg',
  // ... other data
};
```

### Projects

The portfolio includes two main projects:

1. **DocisRx Pharmacy Management Application**: Comprehensive pharmacy management system
2. **AI-Powered Logistics Chatbot**: Intelligent chatbot for logistics data retrieval

To add more projects, update the `projects` array in the service:

```typescript
projects: [
  {
    id: 1,
    title: 'Pharmacy Management Application - DocisRx',
    description: 'Comprehensive pharmacy management system...',
    image: 'project-image.jpg',
    technologies: ['Angular', 'Angular Material', 'HTML5', 'CSS3'],
    githubUrl: 'https://github.com/ramakrishna/docisrx',
    liveUrl: 'https://docisrx-demo.com',
    category: 'Full Stack'
  }
]
```

### Skills

The portfolio includes comprehensive technical skills organized by category:

**Frontend**: Angular, React, TypeScript, JavaScript, HTML5, CSS3, SCSS, RxJS, NgRx, Bootstrap, Tailwind CSS, Angular Material

**Backend**: Java

**Tools**: Git, VS Code, Postman, Jasmine, Jest, Adobe XD, Figma

Update skills in the `skills` array:

```typescript
skills: [
  { name: 'Angular', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'React', level: 80, category: 'frontend' },
  // ... more skills
]
```

### Styling

The portfolio uses SCSS for styling. Main color variables are defined in `portfolio.component.scss`:

```scss
$primary-color: #4f46e5;
$secondary-color: #10b981;
$accent-color: #f59e0b;
```

## Technologies Used

- **Angular 16**: Frontend framework
- **TypeScript**: Programming language
- **SCSS**: Styling with CSS preprocessor
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Inter font)

## Deployment

### Build for Production

```bash
ng build --prod
```

### Deploy to GitHub Pages

1. Install angular-cli-ghpages:
```bash
npm install -g angular-cli-ghpages
```

2. Build and deploy:
```bash
ng build --prod --base-href "https://yourusername.github.io/portfolio/"
ngh --dir=dist/portfolio
```

### Deploy to Netlify

1. Build the project:
```bash
ng build --prod
```

2. Upload the `dist/portfolio` folder to Netlify

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Ramakrishna Chennuri**  
UI Developer  
Email: [chennuriramakrishna@gmail.com](mailto:chennuriramakrishna@gmail.com)  
Phone: 7702214691  
Location: Hyderabad, Telangana  
LinkedIn: [linkedin.com/in/ramakrishna-chennuri](https://linkedin.com/in/ramakrishna-chennuri)  
GitHub: [github.com/ramakrishna](https://github.com/ramakrishna)

For questions or suggestions, please open an issue or contact [chennuriramakrishna@gmail.com](mailto:chennuriramakrishna@gmail.com).