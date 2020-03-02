import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatInputModule, MatListModule, MatSidenavModule, MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule, MatToolbarModule, MatButtonModule, MatInputModule, MatListModule, MatMenuModule,
    MatSidenavModule, BrowserAnimationsModule
  ],
  exports: [
    CommonModule, MatToolbarModule, MatButtonModule, MatInputModule, MatListModule, MatMenuModule,
    MatSidenavModule, BrowserAnimationsModule
  ],
  declarations: []
})
export class AppMaterialModule { }
