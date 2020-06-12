import { createLibrary } from "@youspace/library";
import path from "path";

const library = createLibrary(path.resolve(__dirname, "..", "tmp", "upload"));

export default library;