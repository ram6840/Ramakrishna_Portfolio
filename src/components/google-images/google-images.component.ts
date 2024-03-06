import { Component } from '@angular/core';
import { GoogleDriveService } from '../../services/google-drive.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-google-images',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './google-images.component.html',
  styleUrl: './google-images.component.scss'
})
export class GoogleImagesComponent {
  images: string[] = [];
  constructor(private googleDriveService: GoogleDriveService){}
  ngOnInit(): void {
    this.getImagesFromDrive();
  }
  async getImagesFromDrive(): Promise<void> {
    try {
      this.images = await this.googleDriveService.getImages();
    } catch (error) {
      console.error('Error fetching images from Google Drive:', error);
    }
  }
}
