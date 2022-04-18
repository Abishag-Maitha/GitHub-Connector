import { Component, OnInit } from '@angular/core';
import { GitHubServiceService } from '../git-hub-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profiles:any
  constructor(private gitservice:GitHubServiceService) {
    this.userprofiles()
   }

  ngOnInit(): void {
  }
userprofiles(){
  this.gitservice.getUsers().subscribe((prof)=>{
  this.profiles=prof
  console.log(prof)
  })
}
}
