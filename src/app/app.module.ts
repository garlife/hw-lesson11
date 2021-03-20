import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material-module';
import { Mod1Module } from './mod1/mod1.module';
import { UsersService } from './users.service';
import { AddrConcatInterceptor } from './addr-concat.interceptor';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    Mod1Module,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule 
  ],
  providers: [UsersService,{provide: HTTP_INTERCEPTORS, useClass: AddrConcatInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
