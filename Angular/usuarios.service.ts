import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  URL = "http://localhost/api/";

  constructor(private http: HttpClient) { }

  obtenerUsuarios() {
    return this.http.get(`${this.URL}ObtenerUsuarios.php`);
  }

  altaUsuario(usuario) {
    return this.http.post(`${this.URL}AltaUsuario.php`, JSON.stringify(usuario));
  }

  bajaUsuario(idUsuario: number) {
    return this.http.get(`${this.URL}BajaUsuario.php?idUsuario=${idUsuario}`);
  }

  seleccionarUsuario(idUsuario: number) {
    return this.http.get(`${this.URL}SeleccionarUsuario.php?idUsuario=${idUsuario}`);
  }

  editarUsuario(usuario) {
    return this.http.post(`${this.URL}EditarUsuario.php`, JSON.stringify(usuario));
  }
}
