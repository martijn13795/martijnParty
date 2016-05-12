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
            js+"jquery-2.0.3.min.js"
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
                            id: 'Woonkamer',
                            type: 'image',
                            rect: ['0', '375', '1002', '377', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Woonkamer.png",'0px','0px']
                        },
                        {
                            id: 'Joep_de_tv',
                            type: 'image',
                            rect: ['280', '70', '522', '305', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Joep%20de%20tv.png",'0px','0px']
                        },
                        {
                            id: 'berichtje_joep',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['301', '575', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"berichtje%20joep.wav"],
                            preload: 'auto'
                        },
                        {
                            id: 'WiFi_groen',
                            display: 'none',
                            type: 'image',
                            rect: ['805', '-8', '214', '178', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"WiFi%20groen.png",'0px','0px'],
                            transform: [[],['240']]
                        },
                        {
                            id: 'WiFi_groenCopy',
                            display: 'none',
                            type: 'image',
                            rect: ['785', '17', '214', '178', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"WiFi%20groen.png",'0px','0px'],
                            transform: [[],['50']]
                        },
                        {
                            id: 'joep_einde',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1019', '677', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"joep%20einde.wav"],
                            preload: 'auto'
                        },
                        {
                            id: 'Joep_main2',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['-2175', '-3009', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"Joep%20main2.wav"],
                            preload: 'auto'
                        },
                        {
                            id: 'Converted_file_0542a832',
                            volume: '0.300000',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['606', '623', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"Converted_file_0542a832.wav"],
                            preload: 'auto'
                        },
                        {
                            id: 'bord',
                            display: 'none',
                            type: 'image',
                            rect: ['686', '333', '294', '202', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bord.png",'0px','0px'],
                            transform: [[],['-26']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1000', '750', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 93933.333,
                    autoPlay: true,
                    data: [
                        [
                            "eid65",
                            "left",
                            34500,
                            0,
                            "linear",
                            "${WiFi_groenCopy}",
                            '785px',
                            '785px'
                        ],
                        [
                            "eid119",
                            "display",
                            42077,
                            0,
                            "linear",
                            "${bord}",
                            'none',
                            'block'
                        ],
                        [
                            "eid70",
                            "opacity",
                            34500,
                            3500,
                            "linear",
                            "${WiFi_groenCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid71",
                            "opacity",
                            38000,
                            1000,
                            "linear",
                            "${WiFi_groenCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid66",
                            "top",
                            34500,
                            0,
                            "linear",
                            "${WiFi_groenCopy}",
                            '17px',
                            '17px'
                        ],
                        [
                            "eid46",
                            "opacity",
                            21000,
                            2000,
                            "linear",
                            "${WiFi_groen}",
                            '0',
                            '1'
                        ],
                        [
                            "eid47",
                            "opacity",
                            23000,
                            1000,
                            "linear",
                            "${WiFi_groen}",
                            '1',
                            '0'
                        ],
                        [
                            "eid48",
                            "opacity",
                            24000,
                            2000,
                            "linear",
                            "${WiFi_groen}",
                            '0',
                            '1'
                        ],
                        [
                            "eid49",
                            "opacity",
                            26000,
                            1000,
                            "linear",
                            "${WiFi_groen}",
                            '1',
                            '0'
                        ],
                        [
                            "eid117",
                            "volume",
                            0,
                            3429,
                            "linear",
                            "${Converted_file_0542a832}",
                            '0.300000',
                            '0.15714285714286'
                        ],
                        [
                            "eid59",
                            "display",
                            34500,
                            0,
                            "linear",
                            "${WiFi_groenCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid72",
                            "display",
                            39000,
                            0,
                            "linear",
                            "${WiFi_groenCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid121",
                            "opacity",
                            42077,
                            1423,
                            "linear",
                            "${bord}",
                            '0',
                            '1'
                        ],
                        [
                            "eid41",
                            "display",
                            0,
                            0,
                            "linear",
                            "${WiFi_groen}",
                            'none',
                            'none'
                        ],
                        [
                            "eid44",
                            "display",
                            21000,
                            0,
                            "linear",
                            "${WiFi_groen}",
                            'none',
                            'block'
                        ],
                        [
                            "eid50",
                            "display",
                            27000,
                            0,
                            "linear",
                            "${WiFi_groen}",
                            'block',
                            'none'
                        ],
                        [
                            "eid67",
                            "rotateZ",
                            34500,
                            0,
                            "linear",
                            "${WiFi_groenCopy}",
                            '50deg',
                            '50deg'
                        ],
                            [ "eid111", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Joep_main2}', [] ] ],
                            [ "eid118", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Converted_file_0542a832}', [] ] ],
                            [ "eid112", "trigger", 27000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${berichtje_joep}', [] ] ],
                            [ "eid113", "trigger", 39000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${joep_einde}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("v0.9_edgeActions.js");
})("EDGE-3827208");
