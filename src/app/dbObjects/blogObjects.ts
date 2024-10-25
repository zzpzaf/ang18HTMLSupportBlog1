import { Type } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { NavrowComponent } from "../navrow/navrow.component";
import { LeftpaneComponent } from "../leftpane/leftpane.component";
import { MainComponent } from "../main/main.component";
import { RightpaneComponent } from "../rightpane/rightpane.component";
import { FooterComponent } from "../footer/footer.component";


export interface Tile {
    cols: number;
    rows: number;
    text: string;
    color: string;
  }
  
  interface DynLayOutComponentsType {
    [key: string]: Type<any>;
  }
  
  export const DynLayOutComponents: DynLayOutComponentsType = {
    header: HeaderComponent,
    navrow: NavrowComponent,
    leftpane: LeftpaneComponent,
    main: MainComponent,
    rightpane: RightpaneComponent,
    footer: FooterComponent,
  };
  
  
  


export interface ICategory {
    categoryId: number;
    categoryTitle: string;
}

export interface IArticle {
    articleId: number;
    categoryId: number;
    articleTitle: string;
    articleSubTitle: string;
    articleContent: string;
}
  
export interface ISiteMenu {
    siteMenuId: number;
    siteMenuTitle: string;
}

export interface IPage {
    PageId: number; 
    PageTitle: string 
    PageContent: string
}
export const Pages: IPage[] = [
    { PageId: 1, PageTitle: 'Home', PageContent: 'This is my Home Page'},
    { PageId: 2, PageTitle: 'About', PageContent: 'This is the About Page' },
    { PageId: 3, PageTitle: 'Contact', PageContent: 'This is the Contact details Page'},
    // { PageId: 11, PageTitle: 'External' },
] 