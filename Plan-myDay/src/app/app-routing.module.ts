import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNoteComponent } from './add-note/add-note.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { NotesComponent } from './notes/notes.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {path:'bookmarks', component: BookmarksComponent, data:{tab: 1}},
  {path: 'tasks', component: TasksComponent, data:{tab: 2}},
  {path:'notes', component: NotesComponent,data:{tab: 3}},
  {path:'notes/add',component: AddNoteComponent},
  {path:'notes/:id',component: EditNoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
