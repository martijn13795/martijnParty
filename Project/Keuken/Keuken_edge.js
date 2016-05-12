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
                            id: 'Untitled-1',
                            type: 'image',
                            rect: ['-68', '-58', '1202px', '902px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Untitled-1.jpg",'0px','0px']
                        },
                        {
                            id: 'RoundRect2',
                            type: 'rect',
                            rect: ['10px', '448px', '736', '32', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0.000000',
                            fill: ["rgba(209,194,181,1)"],
                            stroke: [2,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle6',
                            type: 'rect',
                            rect: ['430px', '496px', '316', '172px', 'auto', 'auto'],
                            fill: ["rgba(177,110,50,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'Rectangle5',
                            type: 'rect',
                            rect: ['150px', '562px', '280px', '106', 'auto', 'auto'],
                            fill: ["rgba(177,110,50,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'Rectangle4',
                            type: 'rect',
                            rect: ['150px', '496', '280px', '66px', 'auto', 'auto'],
                            fill: ["rgba(177,110,50,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['10px', '496px', '140px', '172px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(177,110,50,1.00)"],
                            stroke: [2,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['10', '470', '730', '26', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [3,"rgba(55,31,14,1.00)","solid"],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'Henk_de_koelkast2',
                            type: 'image',
                            rect: ['764px', '1000px', '213', '507', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Henk%20de%20koelkast2.png",'0px','0px']
                        },
                        {
                            id: 'Woonkamer',
                            display: 'none',
                            type: 'image',
                            rect: ['47', '-463', '352px', '365px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Woonkamer.png",'0px','0px'],
                            transform: [[],['8'],[],[],['50.66%','46.39%']]
                        },
                        {
                            id: 'De_Keuken2',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['407', '347', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"De%20Keuken2.m4a"],
                            preload: 'auto'
                        },
                        {
                            id: 'Keuken_Muziek',
                            volume: '0.8',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['475', '295', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"Keuken%20Muziek.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'HenkZwaar',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['-156', '711', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"HenkZwaar.wav"],
                            preload: 'auto'
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
                    duration: 102949.592,
                    autoPlay: true,
                    data: [
                        [
                            "eid85",
                            "opacity",
                            845,
                            655,
                            "linear",
                            "${RoundRect2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid177",
                            "volume",
                            0,
                            0,
                            "linear",
                            "${Keuken_Muziek}",
                            '0.8',
                            '0.8'
                        ],
                        [
                            "eid45",
                            "border-width",
                            1390,
                            0,
                            "linear",
                            "${Rectangle}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid59",
                            "scaleY",
                            0,
                            1390,
                            "linear",
                            "${Rectangle4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid40",
                            "height",
                            1390,
                            0,
                            "linear",
                            "${Rectangle}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid46",
                            "width",
                            1390,
                            0,
                            "linear",
                            "${Rectangle}",
                            '730px',
                            '730px'
                        ],
                        [
                            "eid47",
                            "border-color",
                            1390,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'rgb(0, 0, 0)',
                            'rgb(0, 0, 0)'
                        ],
                        [
                            "eid28",
                            "skewX",
                            1390,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid63",
                            "scaleY",
                            0,
                            1390,
                            "linear",
                            "${Rectangle5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid51",
                            "scaleY",
                            0,
                            1390,
                            "linear",
                            "${Rectangle2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid38",
                            "scaleX",
                            0,
                            1390,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid170",
                            "left",
                            20695,
                            1190,
                            "linear",
                            "${Woonkamer}",
                            '47px',
                            '35px'
                        ],
                        [
                            "eid67",
                            "scaleX",
                            0,
                            1390,
                            "linear",
                            "${Rectangle6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid50",
                            "scaleX",
                            0,
                            1390,
                            "linear",
                            "${Rectangle2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid54",
                            "background-color",
                            1390,
                            0,
                            "linear",
                            "${Rectangle4}",
                            'rgba(177,110,50,1.00)',
                            'rgba(177,110,50,1.00)'
                        ],
                        [
                            "eid55",
                            "background-color",
                            1455,
                            0,
                            "linear",
                            "${Rectangle4}",
                            'rgba(177,110,50,1.00)',
                            'rgba(177,110,50,1.00)'
                        ],
                        [
                            "eid88",
                            "location",
                            2425,
                            0,
                            "linear",
                            "${RoundRect2}",
                            [[378, 464, 0, 0, 0, 0,0],[378, 464, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid58",
                            "scaleX",
                            0,
                            1390,
                            "linear",
                            "${Rectangle4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid42",
                            "background-image",
                            1390,
                            0,
                            "linear",
                            "${Rectangle}",
                            [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]],
                            [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]
                        ],
                        [
                            "eid1",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]],
                            [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]
                        ],
                        [
                            "eid76",
                            "location",
                            1390,
                            610,
                            "linear",
                            "${Henk_de_koelkast2}",
                            [[870.5, 1253.5, 0, 0, 0, 0,0],[870.5, 343.5, 0, 0, 0, 0,910]]
                        ],
                        [
                            "eid77",
                            "location",
                            2000,
                            425,
                            "linear",
                            "${Henk_de_koelkast2}",
                            [[870.5, 343.5, 0, 0, 0, 0,0],[870.5, 414.5, 0, 0, 0, 0,71]]
                        ],
                        [
                            "eid149",
                            "location",
                            24537,
                            890,
                            "linear",
                            "${Henk_de_koelkast2}",
                            [[870.5, 414.5, 0, 0, 0, 0,0],[872.17, 361.5, 0, 0, 0, 0,53.03]]
                        ],
                        [
                            "eid150",
                            "location",
                            25427,
                            1213,
                            "linear",
                            "${Henk_de_koelkast2}",
                            [[872.17, 361.5, 0, 0, 0, 0,0],[887.17, -318.18, 0, 0, 0, 0,679.85]]
                        ],
                        [
                            "eid70",
                            "opacity",
                            1455,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid61",
                            "scaleX",
                            0,
                            1390,
                            "linear",
                            "${Rectangle5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid86",
                            "height",
                            2425,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid44",
                            "border-color",
                            1390,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(55,31,14,1.00)',
                            'rgba(55,31,14,1.00)'
                        ],
                        [
                            "eid159",
                            "display",
                            20695,
                            0,
                            "linear",
                            "${Woonkamer}",
                            'none',
                            'block'
                        ],
                        [
                            "eid41",
                            "top",
                            1390,
                            0,
                            "linear",
                            "${Rectangle}",
                            '470px',
                            '470px'
                        ],
                        [
                            "eid39",
                            "scaleY",
                            0,
                            1390,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid34",
                            "left",
                            1390,
                            0,
                            "linear",
                            "${Rectangle}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid66",
                            "scaleY",
                            0,
                            1390,
                            "linear",
                            "${Rectangle6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid169",
                            "top",
                            20695,
                            1190,
                            "linear",
                            "${Woonkamer}",
                            '-463px',
                            '369px'
                        ],
                            [ "eid175", "trigger", 250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Keuken_Muziek}', [9] ] ],
                            [ "eid178", "trigger", 2290, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${HenkZwaar}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Keuken_edgeActions.js");
})("EDGE-397104800");
