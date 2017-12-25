// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC5_qZhYA0glxUZvTwSqA25KdEM8VFO2ZY",
    authDomain: "cms-database.firebaseapp.com",
    databaseURL: "https://cms-database.firebaseio.com",
    projectId: "cms-database",
    storageBucket: "cms-database.appspot.com",
    messagingSenderId: "211511509737"
  }
};
