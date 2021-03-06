import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../shared/services/auth.service";
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public afAuth: AngularFireAuth, 
    public router:Router, 
    public authService: AuthService,
    public ngZone: NgZone
  ) { }

  ngOnInit() {
  }

}
