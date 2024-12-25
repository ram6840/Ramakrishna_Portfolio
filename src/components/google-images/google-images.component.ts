import { Component } from '@angular/core';
import { GoogleDriveService } from '../../services/google-drive.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';
import { AuthenticationService } from '../../services/authentication.service';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-google-images',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  providers:[HttpClientModule],
  templateUrl: './google-images.component.html',
  styleUrl: './google-images.component.scss'
})
export class GoogleImagesComponent {
  imageUrls:any = [];
  private accessToken = '';
  constructor(private http: HttpClient,private auth:AuthenticationService) { }

  ngOnInit(): void {
    // this.auth.oauthSignIn()
    this.getImagesFromGoogleDriveFolder();
  }
  getImagesFromGoogleDriveFolder() {
    // Replace 'YOUR_FOLDER_ID' with the ID of the Google Drive folder containing your images
    const folderId = '1m0axFW7F1WVY53CibO1JBwBRZa1EEo-z';
    const apiUrl = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&fields=files(*)&key=${environment.apiKey}`;

    this.http.get<any>(apiUrl).subscribe(
      (response) => {
        if (response.files && response.files.length > 0) {
          this.imageUrls = response.files.filter((file:any) => file.mimeType.startsWith('image/'));
          console.log(this.imageUrls  )
        }
      },
      (error) => {
        console.error('Error fetching images from Google Drive:', error);
      }
    );
  }
}
