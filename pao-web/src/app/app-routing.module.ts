import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from "./editor/editor.component";
import { DcanvasComponent } from "./dcanvas/dcanvas.component";


const routes: Routes = [
  { path: 'editor', component: EditorComponent },
  { path: 'dcanvas', component: DcanvasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
