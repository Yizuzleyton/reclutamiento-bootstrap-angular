import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';


import { CatAreaComponent } from './catalogos/cat-area/cat-area.component';
import { CatCandidatoComponent } from './catalogos/cat-candidato/cat-candidato.component';
import { CatClienteComponent } from './catalogos/cat-cliente/cat-cliente.component';
import { CatCompcandidatoComponent } from './catalogos/cat-compcandidato/cat-compcandidato.component';
import { CatComphabilidadesComponent } from './catalogos/cat-comphabilidades/cat-comphabilidades.component';
import { CatConsolicitadoComponent } from './catalogos/cat-consolicitado/cat-consolicitado.component';
import { CatContactclienteComponent } from './catalogos/cat-contactcliente/cat-contactcliente.component';
import { CatContactoComponent } from './catalogos/cat-contacto/cat-contacto.component';
import { CatConteccandidatoComponent } from './catalogos/cat-conteccandidato/cat-conteccandidato.component';
import { CatContecnicosComponent } from './catalogos/cat-contecnicos/cat-contecnicos.component';
import { CatDoccandidatoComponent } from './catalogos/cat-doccandidato/cat-doccandidato.component';
import { CatDocumentosComponent } from './catalogos/cat-documentos/cat-documentos.component';
import { CatEntrevistaComponent } from './catalogos/cat-entrevista/cat-entrevista.component';
import { CatEquipoComponent } from './catalogos/cat-equipo/cat-equipo.component';
import { CatEquipsolComponent } from './catalogos/cat-equipsol/cat-equipsol.component';
import { CatEstacandidatoComponent } from './catalogos/cat-estacandidato/cat-estacandidato.component';
import { CatEstasolicitudComponent } from './catalogos/cat-estasolicitud/cat-estasolicitud.component';
import { CatFuncionesComponent } from './catalogos/cat-funciones/cat-funciones.component';
import { CatHabsolicitudComponent } from './catalogos/cat-habsolicitud/cat-habsolicitud.component';
import { CatIdiomaComponent } from './catalogos/cat-idioma/cat-idioma.component';
import { CatIdiomacandidatoComponent } from './catalogos/cat-idiomacandidato/cat-idiomacandidato.component';
import { CatJornadalabComponent } from './catalogos/cat-jornadalab/cat-jornadalab.component';
import { CatPercepcioncndaComponent } from './catalogos/cat-percepcioncnda/cat-percepcioncnda.component';
import { CatPercepcioncndofrComponent } from './catalogos/cat-percepcioncndofr/cat-percepcioncndofr.component';
import { CatPerfilComponent } from './catalogos/cat-perfil/cat-perfil.component';
import { CatPrepercepcionComponent } from './catalogos/cat-prepercepcion/cat-prepercepcion.component';
import { CatPrioridadComponent } from './catalogos/cat-prioridad/cat-prioridad.component';
import { CatProyectoComponent } from './catalogos/cat-proyecto/cat-proyecto.component';
import { CatSeguicandidatoComponent } from './catalogos/cat-seguicandidato/cat-seguicandidato.component';
import { CatSeguisolicitudComponent } from './catalogos/cat-seguisolicitud/cat-seguisolicitud.component';
import { CatSolicitudComponent } from './catalogos/cat-solicitud/cat-solicitud.component';
import { CatSolidiomaComponent } from './catalogos/cat-solidioma/cat-solidioma.component';
import { CatSolpercepcionesComponent } from './catalogos/cat-solpercepciones/cat-solpercepciones.component';
import { CatTipvacanteComponent } from './catalogos/cat-tipvacante/cat-tipvacante.component';
import { CatUsuarioComponent } from './catalogos/cat-usuario/cat-usuario.component';
import { LoginComponent} from './pages/login/login.component';
import { EditAreaComponent} from './catalogos/cat-area/edit.component';
import { EditPrioridadComponent } from './catalogos/cat-prioridad/edit-prioridad.component';
import { CreateAreaComponent } from './catalogos/cat-area/create-area.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { CandidatoComponent } from './pages/candidato/candidato.component';
import { SolicitudComponent } from './pages/solicitud/solicitud.component';
import { CrearContactoComponent } from './catalogos/cat-contactcliente/crear-contacto.component';
import { EditContactoComponent } from './catalogos/cat-contactcliente/edit-contacto.component';
import { EditClienteComponent } from './catalogos/cat-cliente/edit-cliente.component';
import { EditJornadaComponent } from './catalogos/cat-jornadalab/edit.component';
import { AuthGuard } from './Guard/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { EditTipvacanteComponent } from './catalogos/cat-tipvacante/edit-tipvacante.component';
import { CreateTipvacanteComponent } from './catalogos/cat-tipvacante/create-tipvacante.component';
import { EditPerfilComponent } from './catalogos/cat-perfil/edit-perfil.component';
import { EditEquipoComponent } from './catalogos/cat-equipo/edit-equipo.component';
import { EditUsuarioComponent } from './catalogos/cat-usuario/edit-usuario.component';
import { EditPrepercepcionComponent } from './catalogos/cat-prepercepcion/edit-prepercepcion.component';
import { CreatePrepercepcionComponent } from './catalogos/cat-prepercepcion/create-prepercepcion.component';
import { EditEstasolicitudComponent } from './catalogos/cat-estasolicitud/edit-estasolicitud.component';
import { CreateEstacandidatoComponent } from './catalogos/cat-estacandidato/create-estacandidato.component';
import { EditContecnicosComponent } from './catalogos/cat-contecnicos/edit-contecnicos.component';





 const appRoutes: Routes = [
  {path: 'Home', component: HomeComponent },
  {path: 'Login', component: LoginComponent},

  {path: 'Area', component: CatAreaComponent},
  {path: 'Create-area', component: CreateAreaComponent, },
  {path: 'Edit/:id', component: EditAreaComponent},
  {path: 'EditPerfil/:id', component: EditPerfilComponent},
  {path: 'EditEquipo/:id', component: EditEquipoComponent},
  {path: 'EditUser/:id', component: EditUsuarioComponent},
  {path: 'EditPerfil/:id', component: EditPerfilComponent},
  {path: 'EditEquipo/:id', component: EditEquipoComponent},
  {path: 'EditUser/:id', component: EditUsuarioComponent},
  {path: 'Edit-tipvacante/:id', component: EditTipvacanteComponent},
  {path: 'Edit-prepercepcion/:id', component: EditPrepercepcionComponent},
  {path: 'Candidato', component: CatCandidatoComponent },
  {path: 'Cliente', component: CatClienteComponent },
  {path: 'Competencia-candidato', component: CatCompcandidatoComponent },
  {path: 'Habilidades', component: CatComphabilidadesComponent },
  {path: 'Conocimiento-solicitado', component: CatConsolicitadoComponent },
  {path: 'Contacto-cliente', component: CatContactclienteComponent },
  {path: 'Contacto', component: CatContactoComponent },
  {path: 'Conocimiento-tecnico-candidato', component: CatConteccandidatoComponent },
  {path: 'Conocimientos-tecnicos', component: CatContecnicosComponent },
  {path: 'Edit-estasolicitud/:id', component: EditEstasolicitudComponent },
  {path: 'Documento-candidatos', component: CatDoccandidatoComponent },
  {path: 'Documentos', component: CatDocumentosComponent },
  {path: 'Entrevista', component: CatEntrevistaComponent },
  {path: 'Equipo', component: CatEquipoComponent },
  {path: 'Equipo-solicitud', component: CatEquipsolComponent },
  {path: 'Estatus-candidato', component: CatEstacandidatoComponent },
  {path: 'Estatus-solicitud', component: CatEstasolicitudComponent },
  {path: 'Edit-estasolicitud/:id', component: EditEstasolicitudComponent },
  {path: 'Create-estasolicitud', component: CreateEstacandidatoComponent },
  {path: 'Funciones', component: CatFuncionesComponent },
  {path: 'Habilidad-solicitada', component: CatHabsolicitudComponent },
  {path: 'Idioma', component: CatIdiomaComponent },
  {path: 'Idioma-candidato', component: CatIdiomacandidatoComponent },
  {path: 'Jornada-laboral', component: CatJornadalabComponent },
  {path: 'Percepcion-candidato', component: CatPercepcioncndaComponent },
  {path: 'Percepcion-candidato-fr', component: CatPercepcioncndofrComponent },
  {path: 'Perfil', component: CatPerfilComponent },
  {path: 'Pre-percepcion', component: CatPrepercepcionComponent },
  {path: 'Edit-prepercepcion/:id', component: EditPrepercepcionComponent },
  {path: 'Create-prepercepcion', component: CreatePrepercepcionComponent },
  {path: 'Prioridad', component: CatPrioridadComponent },
  {path: 'Proyecto', component: CatProyectoComponent },
  {path: 'Seguimiento-candidato', component: CatSeguicandidatoComponent },
  {path: 'Seguimiento-solicitud', component: CatSeguisolicitudComponent },
  {path: 'Solicitud', component: CatSolicitudComponent },
  {path: 'Idioma-solicitud', component: CatSolidiomaComponent },
  {path: 'Solicitud-percepciones', component: CatSolpercepcionesComponent },
  {path: 'Tipo-vacante', component: CatTipvacanteComponent },
  {path: 'Edit-tipvacante/:id', component: EditTipvacanteComponent },
  {path: 'Create-tipvac', component: CreateTipvacanteComponent },
  {path: 'Usuarios', component: CatUsuarioComponent },
  {path: 'New-candidato', component: CandidatoComponent},
  {path: 'AddContacto/:id', component: CrearContactoComponent},
  {path: 'EditContacto/:id', component: EditContactoComponent},
  {path: 'EditCliente/:id', component: EditClienteComponent},
  {path: 'EditPrioridad/:id', component: EditPrioridadComponent},
  {path: 'EditJornada/:id', component: EditJornadaComponent},
  {path: 'Edit-contecnicos/:id', component: EditContecnicosComponent },
  {path: '**', component: NotfoundComponent}
  ];

 export const appRoutingProviders: any[] = [];
 export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
