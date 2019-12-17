import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  @ViewChild('ionTabs', { static: true }) tabs: IonTabs;
  selected: boolean;

  constructor() {
  }

  ionViewDidEnter() {
    this.tabs.ionTabsWillChange.subscribe(tab => console.log(tab));
  }

  changeFan() {
    this.selected = true;
  }
}
