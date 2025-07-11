import { Component, OnInit } from '@angular/core';
import { SupabaseService } from './services/supabase.service';
import { AuthComponent } from "./auth/auth.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [AuthComponent],
  // styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-user-management';
  session: any = null; // Typage minimal, à améliorer selon la structure réelle

  constructor(private readonly supabase: SupabaseService) {}

  ngOnInit(): void {
    // Initialisation de la session actuelle
    this.session = this.supabase.session;

    // Ecoute des changements d'authentification
    this.supabase.authChanges((event, session) => {
      this.session = session;
    });
  }
}



