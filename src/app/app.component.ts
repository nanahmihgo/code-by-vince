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
  session: any = null; 

  constructor(private readonly supabase: SupabaseService) {}

  async ngOnInit(): Promise<void> {
    this.session = await this.supabase.getSession();

    this.supabase.authChanges((event, session) => {
      this.session = session;
    });
  }
}



