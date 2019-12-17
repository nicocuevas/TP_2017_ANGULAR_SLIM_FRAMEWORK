// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const api ={
    auth:'token',
    brand:'brand',
    user:'user',
    userGroup:'user-group',
    userAudit:'user-audit',
    parking: 'parking',
    customer: 'customer',
    vehicle:'vehicle',
    vehicleType:'vehicle-type',
    lot:'lot',
    section:'section',
    rentLot:'rentlot',
    rentType:'rent-type',
    rentStatus:'rent-status'
};
export const environment = {
  production: false,
  filesUrlBase:'http://192.168.50.10/TPProgramcion-laboratorioIII2017/parking/src/public/files/',
  apiUrlBase:'http://192.168.50.10/TPProgramcion-laboratorioIII2017/parking/src/public/api/',
  apiPaths: api
};
