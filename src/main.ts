import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app-module';
// src/main.ts
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
