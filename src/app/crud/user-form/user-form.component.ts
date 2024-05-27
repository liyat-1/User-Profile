
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CRUDService } from '../services/crud.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;
  userId: any;
  buttonText = 'Create User';
  photoPreview: SafeUrl | string | ArrayBuffer| null = null;
  coverPreview: SafeUrl | string | ArrayBuffer|null = null;
  album_imagePreview:SafeUrl | string | ArrayBuffer|null = null;

  constructor(
    private formBuilder: FormBuilder,
    private crudService: CRUDService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.createUserForm();
    this.userId = this.activatedRoute.snapshot.params['userId'] || '';
    if (this.userId) {
      this.loadUserDetail(this.userId);
    }
  }

  createUserForm(): void {
    this.userForm = this.formBuilder.group({
      'name': ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ])],
      'description': ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(500)
      ])],
      'photo': [''],
      'cover': [''],
      'age': ['', Validators.compose([
        Validators.required,
        Validators.min(1),
        Validators.max(999) 
      ])],
      'album_name': [''],
      'album_image': [''],
     
    });
  }

  createUser(): void {
    const formData = new FormData();
    formData.append('name', this.userForm.get('name')?.value);
    formData.append('description', this.userForm.get('description')?.value);
    formData.append('photo', this.userForm.get('photo')?.value);
    formData.append('cover', this.userForm.get('cover')?.value);
    formData.append('age', this.userForm.get('age')?.value);
    formData.append('album_name', this.userForm.get('album_name')?.value);
    formData.append('album_image', this.userForm.get('album_image')?.value);
   

    if (this.userId) {
      formData.append('id', this.userId);
      this.crudService.updateUserDetail(formData).subscribe(res => {
        if (res.result === 'success') {
          this.navigateTo('/crud/user-list');
        }
      });
    } else {
      this.crudService.createUser(formData).subscribe(res => {
        if (res.result === 'success') {
          this.navigateTo('/crud/user-list');
        }
      });
    }
  }

  loadUserDetail(userId: any): void {
    this.buttonText = 'Update User';
    this.crudService.loadUserInfo(userId).subscribe(res => {
      this.userForm.patchValue({
        name: res.u_name,
        description: res.u_description,
        photo: res.u_photo,
        cover: res.u_cover,
        age: res.u_age,
        album_name:res.u_album_name,
        album_image:res.u_album_image,
       

      });

      // Set image previews
      if (res.u_photo) {
        this.photoPreview = this.sanitizer.bypassSecurityTrustUrl('http://localhost/web_api/uploads/' + res.u_photo);
      }

      if (res.u_cover) {
        this.coverPreview = this.sanitizer.bypassSecurityTrustUrl('http://localhost/web_api/uploads/' + res.u_cover);
      }

      if (res.u_album_image) {
        this.album_imagePreview = this.sanitizer.bypassSecurityTrustUrl('http://localhost/web_api/uploads/' + res.u_album_image);
      }
    });
  }

  onPhotoSelected(event: any): void {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      this.userForm.patchValue({ photo: file });
      this.setPhotoPreview(file);
    }
  }

  onCoverSelected(event: any): void {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      this.userForm.patchValue({ cover: file });
      this.setCoverPreview(file);
    }
  }

  onAlbum_ImageSelected(event: any): void {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      this.userForm.patchValue({ album_image: file });
      this.setAlbum_ImagePreview(file);
    }
  }





  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  private setPhotoPreview(file: File | string): void {
    if (file instanceof File) {
      const reader = new FileReader();
      reader.onload = () => {
        this.photoPreview = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      this.photoPreview = file;
    }
  }
  
  private setCoverPreview(file: File | string): void {
    if (file instanceof File) {
      const reader = new FileReader();
      reader.onload = () => {
        this.coverPreview = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      this.coverPreview = file;
    }
  }

  private setAlbum_ImagePreview(file: File | string): void {
    if (file instanceof File) {
      const reader = new FileReader();
      reader.onload = () => {
        this.album_imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      this.album_imagePreview = file;
    }
  }
  

  // Method to get photo preview
  getPhotoPreview():SafeUrl| string | ArrayBuffer | null {
    return this.photoPreview;
  }

  // Method to get cover preview
  getCoverPreview():SafeUrl| string | ArrayBuffer | null {
    return this.coverPreview;
  }
  getAlbum_ImagePreview():SafeUrl| string | ArrayBuffer | null {
    return this.album_imagePreview;
  }
}
