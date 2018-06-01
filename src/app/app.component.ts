import { Component } from '@angular/core';
import {GithubService } from './services/github.service';

@Component({
  selector: 'my-app',
  template: `
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Github Search</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
</nav>
<div class="container">
  <profile></profile>
</div>`,
  providers: [GithubService]
})
export class AppComponent  { }
