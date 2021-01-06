import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const cdkRouters: Routes = [
  { path: 'heroes', redirectTo: '/superheroes' },
  { path: 'hero/:id', redirectTo: '/superhero/:id' }
];

@NgModule({
  imports: [
    RouterModule.forChild(cdkRouters)
  ],
  exports: [
    RouterModule
  ]
})
export class CdkRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/