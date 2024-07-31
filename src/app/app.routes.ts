import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        title: 'home',
        component: LogInComponent
    }
];
