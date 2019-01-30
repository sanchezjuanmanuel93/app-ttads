import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './groups/groups.module#GroupsPageModule' },
  { path: 'group', loadChildren: './group/group.module#GroupPageModule' },
  { path: 'match', loadChildren: './match/match.module#MatchPageModule' },
  { path: 'groups', loadChildren: './groups/groups.module#GroupsPageModule' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
