import { Component, OnInit } from '@angular/core';
import { SupabaseService } from './supabase.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'codebyvince-angular';
  connected: boolean | null = null;

  constructor(private supabaseService: SupabaseService) {}

  async ngOnInit() {
    this.connected = await this.supabaseService.testConnection();
  }
}


