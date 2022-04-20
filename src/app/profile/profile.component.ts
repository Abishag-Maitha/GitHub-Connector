import { Component, OnInit } from '@angular/core';
import { GitHubServiceService } from '../git-hub-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profiles:any
repos:any
search!:string
  constructor(private gitservice:GitHubServiceService) {
    // this.userprofiles()
    // this.userrepos()
   }

  ngOnInit(): void {
  }
userprofiles(){
  this.gitservice.getUsers().subscribe((prof)=>{
  this.profiles=prof
  console.log(prof)
  })
}
userrepos(){
  this.gitservice.getUserRepos().subscribe((repo)=>{
    this.repos=repo
    console.log(repo)
  })
}
}
