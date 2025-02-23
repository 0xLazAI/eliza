import { ActionExample } from "@elizaos/core";

export const getMarsRoverExamples: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content:{
                text:"I wonder what mars looks like today?",
            }
        },
        {
            user: "{{agent}}",
            content:{
                text:"Let me fetch a picture from mars rover.",
                action: "NASA_GET_MARS_ROVER_PHOTO",
            }
        },
    ],
    [
        {
            user: "{{user1}}",
            content:{
                text:"Can you fetch a random picture of Mars?",
            }
        },
        {
            user: "{{agent}}",
            content:{
                text:"Let me fetch a picture from mars rover.",
                action: "NASA_GET_MARS_ROVER_PHOTO",
            }
        },
    ]
];

export const getAPODExamples: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content:{
                text:"what's the nasa Astronomy picture of the day?",
            }
        },
        {
            user: "{{agent}}",
            content:{
                text:"Let me fetch a nasa image of the day.",
                action: "NASA_GET_APOD",
            }
        },
    ],
    [
        {
            user: "{{user1}}",
            content:{
                text:"I love space.",
            }
        },
        {
            user: "{{agent}}",
            content:{
                text:"Oh really,then let me get the nasa image of the day to make your day even better.",
                action: "NASA_GET_APOD",
            }
        },
    ]
];

