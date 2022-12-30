import { Component, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  usu:string = 'usuario';
  pass:string = '12345678';

  login(usuario:string, password:string){
    if(usuario === this.usu && password === this.pass){
      alert('usuario correcto')
    }else{
      alert('usurio INCORRECTO')
    }
    
  }

}
