import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PortfolioData, Project, Skill, Experience, ContactInfo, Education } from '../models/portfolio';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private portfolioData: PortfolioData = {
    name: 'Ramakrishna Chennuri',
    title: 'UI Developer',
    bio: 'Experienced web developer with 3+ years of hands-on experience in Angular framework. Proficient in developing dynamic and responsive web applications with strong command of front-end technologies. Specialized in frontend architecture optimization, performance enhancements, and building modular, reusable components.',
    profileImage: 'assets/images/myPhoto2.jpg',
    skills: [
      { name: 'Angular', level: 90, category: 'frontend' },
      { name: 'React', level: 80, category: 'frontend' },
      { name: 'Node.js', level: 75, category: 'backend' },
      { name: 'JavaScript', level: 88, category: 'frontend' },
      { name: 'TypeScript', level: 85, category: 'frontend' },
      { name: 'HTML5', level: 95, category: 'frontend' },
      { name: 'CSS3', level: 92, category: 'frontend' },
      { name: 'Bootstrap', level: 85, category: 'frontend' }
    ],
    projects: [
      {
        id: 1,
        title: 'Pharmacy Management Application - DocisRx',
        description: 'Comprehensive pharmacy management system enabling pharmacists to create, view, edit, and track prescription orders with real-time updates. Features drug stock management, batch tracking, expiry monitoring, and role-based access control.',
        image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        technologies: ['Angular', 'Angular Material', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
        githubUrl: 'https://github.com/ramakrishna/docisrx',
        liveUrl: 'https://docisrx-demo.com',
        category: 'Full Stack'
      },
      {
        id: 2,
        title: 'AI-Powered Logistics Chatbot',
        description: 'Intelligent chatbot interface for logistics data retrieval through prompt-based interactions. Features dynamic chart rendering (bar, line, pie) and conditional data visualization based on user queries.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        technologies: ['JavaScript', 'HTML5', 'CSS3', 'Vanilla JavaScript', 'Bootstrap'],
        githubUrl: 'https://github.com/ramakrishna/logistics-chatbot',
        liveUrl: 'https://logistics-chatbot-demo.com',
        category: 'Frontend'
      }
    ],
    experience: [
      {
        company: 'Archents IT India Pvt. Ltd',
        position: 'Software Engineer L2',
        duration: 'Dec 2021 - Present',
        description: 'Built and improved modern, user-friendly web applications using Angular, helping deliver faster, smoother experiences for end-users. Worked closely with designers and back-end teams to create clean, reusable UI components. Regularly contributed ideas to improve UI/UX, fixed bugs, and kept the codebase clean using best practices with RxJS and Angular Material.',
        technologies: ['Angular', 'RxJS', 'Angular Material', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3']
      }
    ],
    education: [
      {
        degree: 'Bachelor of Technology (B.Tech) in Computer Science',
        institution: 'CMR College of Engineering',
        duration: 'June 2016 - July 2019',
        location: 'Hyderabad, Telangana'
      }
    ],
    contact: {
      email: 'chennuriramakrishna@gmail.com',
      phone: '7702214691',
      location: 'Hyderabad, Telangana',
      linkedin: 'https://in.linkedin.com/in/ramakrishna-chennuri-043329148',
      github: 'https://github.com/ram6840',
      website: 'https://ramakrishna-portfolio.com'
    }
  };

  constructor() { }

  getPortfolioData(): Observable<PortfolioData> {
    return of(this.portfolioData);
  }

  getProjects(): Observable<Project[]> {
    return of(this.portfolioData.projects);
  }

  getSkills(): Observable<Skill[]> {
    return of(this.portfolioData.skills);
  }

  getExperience(): Observable<Experience[]> {
    return of(this.portfolioData.experience);
  }

  getContactInfo(): Observable<ContactInfo> {
    return of(this.portfolioData.contact);
  }

  getEducation(): Observable<Education[]> {
    return of(this.portfolioData.education);
  }
}