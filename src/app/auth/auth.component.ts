import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SupabaseService } from '../services/supabase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  // styleUrls: ['./auth.component.css'],
  standalone: true,
  imports: [
    // FormBuilder,
    // FormGroup,
    ReactiveFormsModule
  ]  
})
export class AuthComponent implements OnInit {
  loading = false
  signInForm!: FormGroup

  constructor(
    private readonly supabase: SupabaseService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.signInForm = this.formBuilder.group({
      email: '',
    })

    const { data } = await this.supabase['supabase'].auth.getSession()
    if (data.session) {
      this.router.navigate(['/profil'])
    }

    const session = await this.supabase.getSession()
      if (session) {
        this.router.navigate(['/profile'])
    }
  }

  async onSubmit(): Promise<void> {
    try {
      this.loading = true
      const email = this.signInForm.value.email as string
      const { error } = await this.supabase.signIn(email)
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this.signInForm.reset()
      this.loading = false
    }
  }
}
