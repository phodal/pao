import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditorComponent} from './components/editor/editor.component';
import {DcanvasComponent} from './components/dcanvas/dcanvas.component';
import {EdititComponent} from './presentation/editit/editit.component';


const routes: Routes = [
  {path: 'editor', component: EditorComponent},
  {path: 'dcanvas', component: DcanvasComponent},
  {path: '', component: EdititComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
