import {Component, OnInit} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {Catalogue} from "../assets/DB/Catalogue";
import {CatalogueService} from "./catalogue.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CokO-pwa';
  update : boolean = false;
  searchText:string;
  constructor(private updates : SwUpdate){
    this.updates.available.subscribe(event=>{

      //this.update = true;
      updates.activateUpdate().then(()=> document.location.reload());
    })
  }
  ngOnInit(){
    if(this.updates.isEnabled){
      this.updates.available.subscribe(()=> {
        if(confirm("New version available for CokO app. Load it?")){
          this.updates.activateUpdate().then(()=> document.location.reload());
        }
      })
    }
  }
}
