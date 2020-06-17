import { createServer, Model, Registry, Factory,  } from "miragejs";
import { ModelDefinition, FactoryDefinition } from "miragejs/-types";
import faker from "faker";


interface VideoModel {
    id: number;
    name: string;
    filename: string;
    thubmnailSrc: string;
}


type AppModels = {
    video: ModelDefinition<VideoModel>
}

type AppFactories = {
    video: FactoryDefinition<VideoModel>
}

export function createFakeServer (options = { environment: "test" }) {
    return createServer<AppModels, AppFactories>({
        environment: options.environment,
        models: {
            video: Model,
        },
        factories: {
            video: Factory.extend<any>({
                id () {
                    return faker.random.number();
                },
                name () {
                    return faker.name.title();
                },
                filename () {
                    return faker.system.commonFileName(".mp4");
                },
                thubmnailSrc () {
                    return faker.random.image();
                },
            })
        },
        seeds(server) {
            server.create("video")
            server.createList("video", 20)
        },
        routes() {
            this.namespace = "/api";

            this.get("/admin/videos", (schema) => {
                return schema.all("video");
            })
        }
    })
}