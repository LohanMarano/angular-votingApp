// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { createClient } from '@supabase/supabase-js';

export const environment = {
  production: false,
  supabaseUrl:'https://ybtcgmazyyaozcduonng.supabase.co',
  supabaseKey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlidGNnbWF6eXlhb3pjZHVvbm5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyNzA4MjgsImV4cCI6MTk4Mzg0NjgyOH0.uxAZ5wEHyIFET3ndhV9YwUbBjwWk9CoeRJbWnoMH7qc'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
