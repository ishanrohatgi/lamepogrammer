import { Component, OnInit, DoCheck } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'slds';
  jokes: any;
  isLoaded = false;
  constructor(private http: HttpClient){
  }
  ngOnInit(): void {
    //window.addEventListener('online', this.getJokes);
      this.getJokes();
  }
  getJokes(){
    this.isLoaded = false;
    const url = 'https://geek-jokes.sameerkumar.website/api?format=json';
    this.http.get(url).subscribe(
      (resp)=>{
        console.log(resp)
        this.jokes = resp;
        this.isLoaded=true;
      },()=>{
        this.isLoaded=false;
        if(!this.isLoaded){
          this.getJokes();
        }
      }
    );
  }
}
