import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {AF} from "./providers/af";
import { AppComponent } from './app.component';

export const firebaseConfig = {
    apiKey: "AIzaSyAH1aoqu3zHDamdd5zRG5aXaRRBlclfAkY",
    authDomain: "test-alkanza.firebaseapp.com",
    databaseURL: "https://test-alkanza.firebaseio.com",
    projectId: "test-alkanza",
    storageBucket: "test-alkanza.appspot.com",
    messagingSenderId: "871541808001"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [AF],
  bootstrap: [AppComponent]
})
export class AppModule { }
