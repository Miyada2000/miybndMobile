import {Page} from 'ionic-angular';
import {Page1} from '../../pages/page1/page1';
import {Page2} from '../../pages/page2/page2';
import {Page3} from '../../pages/page3/page3';


@Page({
  templateUrl: 'build/core/tabs/tabs.html'
})
export class TabsPage {
  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    console.log('tabs;');
    this.tab1Root = Page1;
    this.tab2Root = Page2;
    this.tab3Root = Page3;
  }
}
