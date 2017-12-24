import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
  // Tutuaj dodatkowo przekazywany jest do komponentu obiekt data:, w którym umieszczono nazwy stron
  // do użycia w animacji
  { path: '', component: ProjectsComponent, data: {animation: {page: 'rootPage'}} },
  { path: 'users', component: UsersComponent, data: {animation: {page: 'usersPage'}} }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
