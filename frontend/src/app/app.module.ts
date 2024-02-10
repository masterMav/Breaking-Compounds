import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CompoundsComponent } from './components/compounds/compounds.component';
import { CompItemComponent } from './components/comp-item/comp-item.component';
import { AboutComponent } from './components/about/about.component';
import { DetailsComponent } from './components/details/details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddCompComponent } from './components/add-comp/add-comp.component';

const appRoutes: Routes = [
  { path: '', component: CompoundsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'add', component: AddCompComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompoundsComponent,
    CompItemComponent,
    AboutComponent,
    DetailsComponent,
    AddCompComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
