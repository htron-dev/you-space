import ysDashboard from "./../ys-dashboard/ys-dashboard";
import chai from "chai";
import { request } from 'http';

describe("@youspace/dashboard", () => {
    it("should init the dashborad", () => {
        const dashboard = new ysDashboard();
        console.log(dashboard.app._router)
    })
})