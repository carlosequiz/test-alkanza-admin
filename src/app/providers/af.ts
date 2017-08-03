import {Injectable} from "@angular/core";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class AF {
    public images: FirebaseListObservable<any>;

    constructor(public db: AngularFireDatabase) {
        this.images = this.db.list('images');
    }
}