import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { SharedModule } from "../../shared/shared.module";
import { SearchPage } from "./search.page";
import { SEARCH_ROUTES } from "./search.routes";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(SEARCH_ROUTES),
    SharedModule
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
