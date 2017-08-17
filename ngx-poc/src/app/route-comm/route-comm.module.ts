import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//route-comm
import { RouteComponent } from './route.component';
import { UpdateComponent } from './update.component';
import { HistoryComponent } from './history.component';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
    { path: '', component: UpdateComponent, },
    { path: 'update', component: UpdateComponent  },
    { path: 'history', component: HistoryComponent, pathMatch: 'full' },
    { path: 'history/:positionID', component: HistoryComponent },
];

@NgModule({
    declarations: [
        UpdateComponent, HistoryComponent
    ],
    imports: [
        BrowserModule, RouterModule, FormsModule,
        ReactiveFormsModule, HttpModule, CommonModule
    ],
    exports: [UpdateComponent, HistoryComponent],
    providers: [],
})
export class RouteCommModule { }

