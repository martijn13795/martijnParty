/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'slaapkamer',
                            type: 'image',
                            rect: ['0px', '-250px', '1000px', '1000px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"slaapkamer.png",'0px','0px']
                        },
                        {
                            id: 'wekker-0800',
                            type: 'image',
                            rect: ['805px', '337px', '113px', '70px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"wekker-0800.png",'0px','0px']
                        },
                        {
                            id: 'achtergrond-muziek',
                            display: 'none',
                            volume: '0.4',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['520', '166', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"Happy%20Relaxing%20Guitar%20Music%20For%20Children.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'wekker',
                            display: 'none',
                            volume: '0.7',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['601', '70', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"Wekker%20Geluid.m4a"],
                            preload: 'auto'
                        },
                        {
                            id: 'vlieg',
                            type: 'image',
                            rect: ['1001px', '79px', '200px', '133px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"animaatjes-vliegen-51383.gif",'0px','0px']
                        },
                        {
                            id: 'Wekker',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['235', '337', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"Wekker.wav"],
                            preload: 'auto'
                        },
                        {
                            id: 'Rectangle',
                            display: 'none',
                            type: 'rect',
                            rect: ['260px', '59px', '409px', '81px', 'auto', 'auto'],
                            fill: ["rgba(124,83,46,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'om_het_verhaal',
                            display: 'none',
                            type: 'text',
                            rect: ['268px', '100px', '422px', '70px', 'auto', 'auto'],
                            text: "om het verhaal opnieuw te beginnen",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Klik_hier',
                            display: 'none',
                            type: 'text',
                            rect: ['421px', '70px', '88px', '30px', 'auto', 'auto'],
                            text: "Klik hier",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Tot_ziens',
                            display: 'none',
                            type: 'text',
                            rect: ['392px', '80px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Tot ziens!",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [34, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1000px', '750px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 80013.061,
                    autoPlay: true,
                    data: [
                        [
                            "eid189",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'none'
                        ],
                        [
                            "eid190",
                            "display",
                            29000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid179",
                            "volume",
                            4278,
                            0,
                            "linear",
                            "${wekker}",
                            '0.7',
                            '0.7'
                        ],
                        [
                            "eid188",
                            "display",
                            0,
                            0,
                            "linear",
                            "${om_het_verhaal}",
                            'none',
                            'none'
                        ],
                        [
                            "eid193",
                            "display",
                            30500,
                            0,
                            "linear",
                            "${om_het_verhaal}",
                            'none',
                            'block'
                        ],
                        [
                            "eid187",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Klik_hier}",
                            'none',
                            'none'
                        ],
                        [
                            "eid192",
                            "display",
                            30500,
                            0,
                            "linear",
                            "${Klik_hier}",
                            'none',
                            'block'
                        ],
                        [
                            "eid183",
                            "volume",
                            0,
                            0,
                            "linear",
                            "${achtergrond-muziek}",
                            '0.4',
                            '0.4'
                        ],
                        [
                            "eid186",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Tot_ziens}",
                            'none',
                            'none'
                        ],
                        [
                            "eid191",
                            "display",
                            29000,
                            0,
                            "linear",
                            "${Tot_ziens}",
                            'none',
                            'block'
                        ],
                        [
                            "eid194",
                            "display",
                            30500,
                            0,
                            "linear",
                            "${Tot_ziens}",
                            'block',
                            'none'
                        ],
                        [
                            "eid201",
                            "height",
                            30500,
                            0,
                            "linear",
                            "${Klik_hier}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid17",
                            "rotateZ",
                            500,
                            80,
                            "linear",
                            "${wekker-0800}",
                            '0deg',
                            '15deg'
                        ],
                        [
                            "eid18",
                            "rotateZ",
                            580,
                            80,
                            "linear",
                            "${wekker-0800}",
                            '15deg',
                            '0deg'
                        ],
                        [
                            "eid19",
                            "rotateZ",
                            660,
                            90,
                            "linear",
                            "${wekker-0800}",
                            '0deg',
                            '-15deg'
                        ],
                        [
                            "eid20",
                            "rotateZ",
                            750,
                            80,
                            "linear",
                            "${wekker-0800}",
                            '-15deg',
                            '0deg'
                        ],
                        [
                            "eid21",
                            "rotateZ",
                            830,
                            90,
                            "linear",
                            "${wekker-0800}",
                            '0deg',
                            '15deg'
                        ],
                        [
                            "eid22",
                            "rotateZ",
                            920,
                            80,
                            "linear",
                            "${wekker-0800}",
                            '15deg',
                            '0deg'
                        ],
                        [
                            "eid26",
                            "rotateZ",
                            1000,
                            80,
                            "linear",
                            "${wekker-0800}",
                            '0deg',
                            '-15deg'
                        ],
                        [
                            "eid27",
                            "rotateZ",
                            1080,
                            80,
                            "linear",
                            "${wekker-0800}",
                            '-15deg',
                            '0deg'
                        ],
                        [
                            "eid28",
                            "rotateZ",
                            1160,
                            90,
                            "linear",
                            "${wekker-0800}",
                            '0deg',
                            '15deg'
                        ],
                        [
                            "eid29",
                            "rotateZ",
                            1250,
                            80,
                            "linear",
                            "${wekker-0800}",
                            '15deg',
                            '0deg'
                        ],
                        [
                            "eid30",
                            "rotateZ",
                            1330,
                            90,
                            "linear",
                            "${wekker-0800}",
                            '0deg',
                            '-15deg'
                        ],
                        [
                            "eid31",
                            "rotateZ",
                            1420,
                            80,
                            "linear",
                            "${wekker-0800}",
                            '-15deg',
                            '0deg'
                        ],
                        [
                            "eid36",
                            "rotateZ",
                            1500,
                            80,
                            "linear",
                            "${wekker-0800}",
                            '0deg',
                            '15deg'
                        ],
                        [
                            "eid37",
                            "rotateZ",
                            1580,
                            80,
                            "linear",
                            "${wekker-0800}",
                            '15deg',
                            '0deg'
                        ],
                        [
                            "eid38",
                            "rotateZ",
                            1660,
                            90,
                            "linear",
                            "${wekker-0800}",
                            '0deg',
                            '-15deg'
                        ],
                        [
                            "eid39",
                            "rotateZ",
                            1750,
                            80,
                            "linear",
                            "${wekker-0800}",
                            '-15deg',
                            '0deg'
                        ],
                        [
                            "eid40",
                            "rotateZ",
                            1830,
                            90,
                            "linear",
                            "${wekker-0800}",
                            '0deg',
                            '15deg'
                        ],
                        [
                            "eid41",
                            "rotateZ",
                            1920,
                            80,
                            "linear",
                            "${wekker-0800}",
                            '15deg',
                            '0deg'
                        ],
                        [
                            "eid42",
                            "rotateZ",
                            2000,
                            80,
                            "linear",
                            "${wekker-0800}",
                            '0deg',
                            '-15deg'
                        ],
                        [
                            "eid43",
                            "rotateZ",
                            2080,
                            80,
                            "linear",
                            "${wekker-0800}",
                            '-15deg',
                            '0deg'
                        ],
                        [
                            "eid44",
                            "rotateZ",
                            2160,
                            90,
                            "linear",
                            "${wekker-0800}",
                            '0deg',
                            '15deg'
                        ],
                        [
                            "eid45",
                            "rotateZ",
                            2250,
                            80,
                            "linear",
                            "${wekker-0800}",
                            '15deg',
                            '0deg'
                        ],
                        [
                            "eid46",
                            "rotateZ",
                            2330,
                            90,
                            "linear",
                            "${wekker-0800}",
                            '0deg',
                            '-15deg'
                        ],
                        [
                            "eid47",
                            "rotateZ",
                            2420,
                            80,
                            "linear",
                            "${wekker-0800}",
                            '-15deg',
                            '0deg'
                        ],
                        [
                            "eid56",
                            "rotateZ",
                            2500,
                            80,
                            "linear",
                            "${wekker-0800}",
                            '0deg',
                            '15deg'
                        ],
                        [
                            "eid57",
                            "rotateZ",
                            2580,
                            80,
                            "linear",
                            "${wekker-0800}",
                            '15deg',
                            '0deg'
                        ],
                        [
                            "eid58",
                            "rotateZ",
                            2660,
                            0,
                            "linear",
                            "${wekker-0800}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid195",
                            "font-size",
                            29000,
                            0,
                            "linear",
                            "${Tot_ziens}",
                            '34px',
                            '34px'
                        ],
                        [
                            "eid202",
                            "left",
                            30500,
                            0,
                            "linear",
                            "${Klik_hier}",
                            '421px',
                            '421px'
                        ],
                        [
                            "eid180",
                            "left",
                            0,
                            0,
                            "linear",
                            "${vlieg}",
                            '-200px',
                            '-200px'
                        ],
                        [
                            "eid182",
                            "left",
                            5500,
                            8500,
                            "linear",
                            "${vlieg}",
                            '-200px',
                            '1001px'
                        ],
                        [
                            "eid200",
                            "width",
                            30500,
                            0,
                            "linear",
                            "${Klik_hier}",
                            '88px',
                            '88px'
                        ],
                        [
                            "eid197",
                            "top",
                            29000,
                            0,
                            "linear",
                            "${Tot_ziens}",
                            '80px',
                            '80px'
                        ],
                        [
                            "eid199",
                            "top",
                            30500,
                            0,
                            "linear",
                            "${Klik_hier}",
                            '70px',
                            '70px'
                        ],
                        [
                            "eid196",
                            "left",
                            29000,
                            0,
                            "linear",
                            "${Tot_ziens}",
                            '392px',
                            '392px'
                        ],
                            [ "eid174", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${achtergrond-muziek}', [] ] ],
                            [ "eid176", "trigger", 500, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${wekker}', [] ] ],
                            [ "eid184", "trigger", 3250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Wekker}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("slaapkamer_edgeActions.js");
})("EDGE-230436722");
