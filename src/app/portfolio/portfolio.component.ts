import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { PortfolioData, Project, Skill, Experience } from '../models/portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolioData!: PortfolioData;
  filteredProjects: Project[] = [];
  activeFilter = 'All';

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.loadPortfolioData();
  }

  loadPortfolioData(): void {
    this.portfolioService.getPortfolioData().subscribe(data => {
      this.portfolioData = data;
      this.filteredProjects = data.projects;
    });
  }

  filterProjects(category: string): void {
    this.activeFilter = category;
    if (category === 'All') {
      this.filteredProjects = this.portfolioData.projects;
    } else {
      this.filteredProjects = this.portfolioData.projects.filter(
        project => project.category === category
      );
    }
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  getSkillLevelClass(level: number): string {
    if (level >= 80) return 'expert';
    if (level >= 60) return 'advanced';
    if (level >= 40) return 'intermediate';
    return 'beginner';
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.portfolioData.skills.filter(skill => skill.category === category);
  }

  getSkillIcon(skillName: string): string {
    const iconMap: { [key: string]: string } = {
      'Angular': '🅰️',
      'React': '⚛️',
      'Node.js': '🟢',
      'JavaScript': '🟨',
      'TypeScript': '🔷',
      'HTML5': '🌐',
      'CSS3': '🎨',
      'Bootstrap': '🎯'
    };
    return iconMap[skillName] || '💡';
  }

  toggleMobileMenu(): void {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger?.classList.toggle('active');
    navMenu?.classList.toggle('active');
  }
}