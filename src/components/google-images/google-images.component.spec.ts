import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleImagesComponent } from './google-images.component';

describe('GoogleImagesComponent', () => {
  let component: GoogleImagesComponent;
  let fixture: ComponentFixture<GoogleImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleImagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoogleImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
