import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';

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
    },
    {
        path: 'home',
        title: 'main page',
        component: HomeComponent
    }
];
