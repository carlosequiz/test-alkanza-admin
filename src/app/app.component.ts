import { Component } from '@angular/core';
import { AF } from "./providers/af";
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public images: FirebaseListObservable<any[]>;

    constructor(public afService: AF) {
        //this.images = afService.images;
        //this.images = afService.db.list("/images");
        this.images = this.afService.db.list('/images', {
            query: {
                orderByChild: 'timestamp'
            }
        });
    }
}
