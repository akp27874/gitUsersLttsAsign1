import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface User{
  login: string,
    id: number,
    node_id: string,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    site_admin: boolean
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  USER_DATA : User[]=[];
  constructor(private http : HttpClient){

  }
  ngOnInit(): void {
    this.fetchUsers();
  }
  title = 'gitUsers';

  displayedColumns: string[] = ['login', 'id', 'avatar_url', 'type'];
  dataSource;
fetchUsers(){
this.http.get("https://api.github.com/users").subscribe(
 response => {
   console.log("Users : ",response);

   this.dataSource = response;
 }
);

}
}
