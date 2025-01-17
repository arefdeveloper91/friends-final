import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
loginForm! : FormGroup;
constructor(

private router: Router,
private LoginService:LoginService,
private toastr: ToastrService


){
  this.loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)])

  })
}
}

Submit() {
  this.LoginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe
  (response => {
    if(response.sucesso ==true){
      this.toastr.success('login efetuado com sucesso')
      this.router.navigate(["/home"])
    }else{
      this.toastr.error("falha no login, tentar novamente")
    }
  });
navigate(){
  this.router.navigate(["signup"])
}
navigateForgot(){
  this.router.navigate(["forgot-password"])
}
}

