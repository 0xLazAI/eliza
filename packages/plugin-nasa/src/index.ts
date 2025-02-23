import { Plugin } from "@elizaos/core";
import { getAPODAction} from "./actions/getAPOD";
import { getMarsRoverAction } from "./actions/getMarsRoverPhoto";

export const nasaPlugin: Plugin = {
    name: "nasa",
    description: "NASA plugin for Eliza",
    actions: [getAPODAction, getMarsRoverAction],
    evaluators: [],
    providers: [],
};
export default nasaPlugin;