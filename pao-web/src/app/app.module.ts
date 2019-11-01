import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';
import { FormsModule } from "@angular/forms";
import { DcanvasComponent } from './dcanvas/dcanvas.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    DcanvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MonacoEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
