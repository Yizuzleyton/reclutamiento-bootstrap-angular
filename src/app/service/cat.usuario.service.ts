import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Catusuario } from '../model/catusuario.model';

@Injectable({
  providedIn: 'root'
}
)
export class UsuarioService {
  private url = 'http://localhost:8085/api/v1/Usuario';

  constructor( private clienteHttp: HttpClient) {}

  getUsuarios() {
    return this.clienteHttp.get(this.url + '/fetch');
  }

  addusuario(usrUsername, usrNombreUsuario, usrPassword, usrEmail, usrPerfil, usrTelefono) {
    const obj = {
      usrUsername: usrUsername,
      usrNombreusuario: usrNombreUsuario,
      usrPassword: usrPassword,
      usrEmail: usrEmail,
      usrPerfil: usrPerfil,
      usrTelefono: usrTelefono
    };
    this.clienteHttp.post(this.url + '/add', obj)
     .subscribe(res => console.log('Done'));
  }

//   refresh(): void {
//     // window.location.reload();
//  }

  getArea(id): Observable<Catusuario> {
    return this.clienteHttp.get<Catusuario>(`${this.url}/fetch/${id}`);
  }
  editBusiness(id) {
    return this
            .clienteHttp
            .get(`${this.url}/fetch/${id}`);
    }

  updateBusiness(usrUsername, usrNombreUsuario, usrPassword, usrEmail, usrPerfil, usrTelefono, usrIdusuario) {
    usrIdusuario = usrIdusuario;
    const obj = {
      usrUsername: usrUsername,
      usrNombreusuario: usrNombreUsuario,
      usrPassword: usrPassword,
      usrEmail: usrEmail,
      usrPerfil: usrPerfil,
      usrTelefono: usrTelefono
      };
    this
      .clienteHttp
      .put(`${this.url}/update/${usrIdusuario}`, obj)
      .subscribe(res => console.log('Done editado'));
  }
  deleteBusiness(id) {
    return this
              .clienteHttp
              .delete(`${this.url}/delete/${id}`);
  }



}

