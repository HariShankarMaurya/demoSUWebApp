import{Routes}from '@angular/router';
export const DEFAULT_ROUTES:Routes=[
    {path:'',loadChildren:()=>import("../cms/cms.module").then(m=>m.CmsModule)},
    ]