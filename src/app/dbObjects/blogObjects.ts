 
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