import Vue from "vue";
import Vuex from "vuex";
import { Sections } from "@/types";

Vue.use(Vuex);

type StoreState = {
    sections: Sections[]
}

const state: StoreState = {
    sections: []
};

export default new Vuex.Store({
    state,
    mutations: {
        SET_SECTION(state, sections){
            state.sections = sections;
        }
    },
    actions: {
        async setSections({commit}){
            const request = await fetch("/ys-json/dashboard/sections");
            
            const sections = await request.json();
            
            commit("SET_SECTION", sections);
        }
    },
    modules: {
    }
});
