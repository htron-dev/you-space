import _serviceController from "./services/index.js";

function boot () {
  

  const serviceController = _serviceController();

  serviceController.initServices();

  
 

  // registerService(sidebarService);

  // function setup () {
  // }
  
  // window.onload = setup();

  // return {
  //   registerService
  // }
}

boot();
