import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDcULkAFzbZgvlDqsnebBYp9uuDLcjoIRs',
      authDomain: 'angular-oc-1c014.firebaseapp.com',
      databaseURL: 'https://angular-oc-1c014.firebaseio.com',
      projectId: 'angular-oc-1c014',
      storageBucket: 'angular-oc-1c014.appspot.com',
      messagingSenderId: '914792476461'
    });
  }

  ngOnInit() {
  }
}
