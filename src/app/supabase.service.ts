import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  async testConnection(): Promise<boolean> {
    try {
      const response = await this.supabase.rpc('version');
      console.log('✅ Connexion réussie à Supabase :', response);
      return true;
    } catch (error) {
      console.error('❌ Échec de la connexion à Supabase :', error);
      return false;
    }
  }
}
