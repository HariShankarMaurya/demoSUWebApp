import{Routes}from '@angular/router';
export const BACKEND_ROUTES:Routes=[
    {path:'student',loadChildren:()=>import('../student/student.module').then(m=>m.StudentModule)},
    {path:'instructor',loadChildren:()=>import('../instructor/instructor.module').then(m=>m.InstructorModule)},
    {path:'publisher',loadChildren:()=>import('../publisher/publisher.module').then(m=>m.PublisherModule)}
]