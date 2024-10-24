import { Component, effect, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ICategory, IPage, ISiteMenu, Pages } from '../dbObjects/blogObjects';
import { ContentService } from '../content.service';


const ComponentName = 'NavrowComponent';

@Component({
  selector: 'app-navrow',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
  ],
  templateUrl: './navrow.component.html',
  styleUrl: './navrow.component.scss',
})
export class NavrowComponent {
  constructor() {
    effect(() => {
      if (this.contentService.$categories().length > 0) {
        this.navMenuItems2 = this.contentService.$categories();
        // console.log('>===>> ' + ComponentName + ' - ' + 'Nav Menu Items - Categories Changed/Received:', this.navMenuItems2);
      }
    });
  }


  private contentService = inject(ContentService);


  navbarName: string = 'Navigation';

  // navMenuItems1: IPage[] = [
  //   { PageId: 1, PageTitle: 'Home' },
  //   { PageId: 2, PageTitle: 'About' },
  //   { PageId: 3, PageTitle: 'Contact' },
  // ];
  navMenuItems1 = Pages;

  navMenuItems2: ICategory[] = [];

  // itemSiteMenuClicked(category: ISiteMenu): void {
  //   console.log('>===>> ' + this.componentName + ' - itemClicked', category);
  //   // this.contentService.getCategoryArticles(category.categoryId);
  // }

  pageClicked(page: IPage): void {
    // console.log('>===>> ' + ComponentName + ' - ' + 'Page Nr Clicked', page.PageTitle);
    this.contentService.signalPageContent(page.PageId);
  }

  postCategoryClicked(category: ICategory): void {
    // console.log('>===>> ' + ComponentName + ' - ' + 'Posts Category Clicked', category);
    this.contentService.signalPageContent(0);
    this.contentService.signalCategoryArticles(category.categoryId);
  }
}
