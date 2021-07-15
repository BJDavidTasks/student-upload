import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient,HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-student-upload',
  templateUrl: './student-upload.component.html',
  styleUrls: ['./student-upload.component.css']
})
export class StudentUploadCompenent {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
  });

  constructor(private fb: FormBuilder,private http: HttpClient) { }
////////////////////
 photo: File ;
  attestation: File ;
    onFileSelected(event) {
        this.photo = <File>event.target.files[0];
        this.attestation = <File>event.target.files[0];
    }

    onUpload(){
      const fd =new FormData();
      fd.append('image',this.photo.name,this.photo.name);
      this.http.post('',fd,{
        reportProgress:true,
        observe: 'events'
      })
      .subscribe(event => {
        if(event.type === HttpEventType.UploadProgress){
        }else if(event.type ===HttpEventType.Response){
          console.log(event);
        }

      })
    }

}