import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ApiComponent } from './api/api.component';
import { LocalStorageComponent } from './local-storage/local-storage.component';
import { ExternalComponent } from './external/external.component';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ApiComponent,
    LocalStorageComponent,
    ExternalComponent,
    PostComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'api', component: ApiComponent },
      { path: 'local-storage', component: LocalStorageComponent },
      { path: 'external', component: ExternalComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
