import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../../explore-container/explore-container.component';
import { TopHeadingsComponent } from "src/app/shared/top-headings/top-headings.component";
import { SubHeadingsComponent } from "src/app/shared/sub-headings/sub-headings.component";

@Component({
  selector: 'app-invest',
  templateUrl: 'invest.page.html',
  styleUrls: ['invest.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, TopHeadingsComponent, SubHeadingsComponent],
})
export class InvestPage {
  constructor() {}
}
