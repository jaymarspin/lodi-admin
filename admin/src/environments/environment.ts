// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  apiUrl: "http://localhost/lodiserver/v1/",
  baselink: "http://localhost/lodiserver",
  slsDeployed: "https://j9ky1won93.execute-api.ap-southeast-1.amazonaws.com/dev/",
  beanstalk: "http://lodiserverphp-env.eba-vsrebp3p.ap-southeast-1.elasticbeanstalk.com/v1/",
  server2: 'https://ec2-18-136-100-47.ap-southeast-1.compute.amazonaws.com/lodiserver/v1/'

};

// export const HOST_URL = 'http://192.168.1.16/lodiserver/lodi-admin/'; 
 
export const HOST_URL = "http://lodiserverphp-env.eba-vsrebp3p.ap-southeast-1.elasticbeanstalk.com/v1/"
export const apiURL = "http://localhost/lodiserver/v1/"
 
 
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
