import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcessoComponentComponent } from './acesso/acesso.component';
import { BannerComponentComponent } from './acesso/banner/banner.component';
import { LoginComponentComponent } from './acesso/login/login.component';
import { CadastroComponentComponent } from './acesso/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    AcessoComponentComponent,
    BannerComponentComponent,
    LoginComponentComponent,
    CadastroComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
