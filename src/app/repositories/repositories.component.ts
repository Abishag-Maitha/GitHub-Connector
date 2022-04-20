import { Component, OnInit } from '@angular/core';
import { GitHubServiceService } from '../git-hub-service.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repos:any
  constructor(private service:GitHubServiceService) {
    this.getrepositories()
   }

  ngOnInit(): void {
  }
 getrepositories(){
   this.service.searchRepos().subscribe((repo)=>{
    this.repos=repo.items
    console.log(repo.items)
   })
 }
}
