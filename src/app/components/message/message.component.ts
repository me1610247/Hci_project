import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  constructor(private router: Router) { }

  navigateToNew() {
    this.router.navigate(['/new']); // Navigate to the 'new' route
  }
}
