import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GroupPage } from './group.page';
import { ScoreComponent } from 'src/app/score/score.component';
import { CreateTeamComponent } from 'src/app/team/create-team/create-team.component';
import { AddGroupComponent } from '../add-group/add-group.component';

const routes: Routes = [
  {
    path: '',
    component: GroupPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GroupPage, ScoreComponent, CreateTeamComponent]
})
export class GroupPageModule { }
