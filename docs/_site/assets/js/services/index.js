import sidebarService from "./sidebar.service.js";

export default function () {
    const services = [
        sidebarService
    ];

    function initServices(){
        services.forEach(service => service());
    }

    return {
        services,
        initServices
    }
}