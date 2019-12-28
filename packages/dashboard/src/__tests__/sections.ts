import chai from "chai";
import chaiHttp from "chai-http";
import YsDashborad from "..";
chai.use(chaiHttp);

describe("@youspace/dashboard", () => {
    it("should show a test", async () => {
        const dashboard = new YsDashborad();
        dashboard.resgisterSections({otherSection: "teste"})
        const request = await chai.request(dashboard.app).get("/ys-json/dashboard/sections");
        console.log(request.text);
    })
})