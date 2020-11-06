import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AideComponent } from './aide/aide.component';

import { HomeDemandeurComponent } from './home-demandeur/home-demandeur.component';
import { HomeOfficierComponent } from './home-officier/home-officier.component';
import { AlertComponent } from './alert/alert.component';
import { PlanningComponent } from './planning/planning.component';
import { HistoryDemandeComponent } from './history-demande/history-demande.component';
import { HomeDeclarationComponent } from './home-declaration/home-declaration.component';
import { DeclarationNaissanceComponent } from './declaration-naissance/declaration-naissance.component';
import { DeclarationDecesComponent } from './declaration-deces/declaration-deces.component';
import { HistoryRvComponent } from './history-rv/history-rv.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { DemandeNaissanceComponent } from './demande-naissance/demande-naissance.component';
import { DelivrerActeComponent } from './delivrer-acte/delivrer-acte.component';
import { DeclarationMariageComponent } from './declaration-mariage/declaration-mariage.component';


const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'aide', component: AideComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'demandeur', component: HomeDemandeurComponent},
  { path: 'home-officier', component: HomeOfficierComponent},
  { path: 'planning', component: PlanningComponent},
  { path: 'compte', component: AlertComponent},
  { path: 'history-demande', component: HistoryDemandeComponent},
  { path: 'history-rv', component: HistoryRvComponent},
  { path: 'home-declaration', component: HomeDeclarationComponent},
  { path: 'rendez-vous', component:RendezVousComponent },
  { path: 'declaration-naissance',component:DeclarationNaissanceComponent},
  { path: 'declaration-mariage',component:DeclarationMariageComponent},
  { path: 'declaration-deces',component:DeclarationDecesComponent},
  { path: 'demande-naissance',component:DemandeNaissanceComponent},
  { path: 'delivre-acte',component:DelivrerActeComponent },
  { path: '', component: HomeComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AuthComponent,
    RegisterComponent,
    AideComponent,

    HomeDemandeurComponent,
    HomeOfficierComponent,
    AlertComponent,
    PlanningComponent,
    HomeDeclarationComponent,
    DeclarationDecesComponent,
    DeclarationNaissanceComponent,
    HistoryDemandeComponent,
    HistoryRvComponent,
    RendezVousComponent,
    DemandeNaissanceComponent,
    DelivrerActeComponent,
    DeclarationMariageComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    MatSliderModule,

    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,

    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
