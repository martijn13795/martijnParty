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
                            id: 'Achtergrond-Jaap-lucht',
                            type: 'image',
                            rect: ['0px', '0px', '1000px', '1000px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Achtergrond-Jaap-lucht.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 1, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'son',
                            type: 'image',
                            rect: ['785px', '39px', '182px', '187px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"son3.png",'0px','0px']
                        },
                        {
                            id: 'Achtergrond-Jaap',
                            type: 'image',
                            rect: ['0px', '0px', '1000px', '1000px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Achtergrond-Jaap2.png",'0px','0px']
                        },
                        {
                            id: 'Jaap_het_huis',
                            type: 'image',
                            rect: ['314px', '258px', '433px', '336px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Jaap%20het%20huis%2023.png",'0px','0px']
                        },
                        {
                            id: 'boom',
                            type: 'image',
                            rect: ['31px', '369px', '273px', '232px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"boom2.png",'0px','0px'],
                            transform: [[],['-1']]
                        },
                        {
                            id: 'ogen',
                            display: 'none',
                            type: 'image',
                            rect: ['376px', '428px', '192px', '82px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ogen.png",'0px','0px']
                        },
                        {
                            id: 'mond_jaap',
                            type: 'image',
                            rect: ['375px', '529px', '221px', '36px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mond%20jaap.png",'0px','0px']
                        },
                        {
                            id: 'bloem',
                            type: 'image',
                            rect: ['821px', '633px', '36px', '36px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bloem.png",'0px','0px']
                        },
                        {
                            id: 'bloem1',
                            type: 'image',
                            rect: ['865px', '628px', '36px', '36px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bloem.png",'0px','0px']
                        },
                        {
                            id: 'bloem2',
                            type: 'image',
                            rect: ['847px', '669px', '36px', '36px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bloem.png",'0px','0px']
                        },
                        {
                            id: 'door',
                            type: 'image',
                            rect: ['620px', '464px', '105px', '129px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"door.png",'0px','0px']
                        },
                        {
                            id: 'achtergrond_muziek',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1071', '132', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"achtergrond%20muziek.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'eekhoorn',
                            type: 'image',
                            rect: ['-97px', '660px', '86px', '86px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"eekhoorn.png",'0px','0px'],
                            transform: [[],[],[],['-1.25913','1.03321']]
                        },
                        {
                            id: 'Inleiding',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['-195', '664', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"Inleiding.m4a"],
                            preload: 'auto'
                        },
                        {
                            id: 'balkje_ogen',
                            display: 'block',
                            type: 'image',
                            rect: ['376px', '467px', '79px', '4px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"balkje%20ogen2.png",'0px','0px']
                        },
                        {
                            id: 'balkje_ogen1',
                            display: 'block',
                            type: 'image',
                            rect: ['485px', '467px', '79px', '4px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"balkje%20ogen4.png",'0px','0px']
                        },
                        {
                            id: 'zwart_vlak',
                            type: 'image',
                            rect: ['0px', '0px', '1000px', '750px', 'auto', 'auto'],
                            opacity: '0.7',
                            fill: ["rgba(0,0,0,0)",im+"zwart%20vlak.png",'0px','0px']
                        },
                        {
                            id: 'doorLink',
                            display: 'none',
                            type: 'image',
                            rect: ['620px', '464px', '105px', '129px', 'auto', 'auto'],
                            borderRadius: ["0px", "0px", "0px", "0px 0px"],
                            fill: ["rgba(0,0,0,0)",im+"door.png",'0px','0px'],
                            boxShadow: ["", 0, 0, 0, 0, "rgba(255,255,0,1.00)"]
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
                    duration: 76982.857,
                    autoPlay: true,
                    data: [
                        [
                            "eid179",
                            "display",
                            6750,
                            0,
                            "linear",
                            "${doorLink}",
                            'none',
                            'none'
                        ],
                        [
                            "eid180",
                            "display",
                            23750,
                            0,
                            "linear",
                            "${doorLink}",
                            'none',
                            'block'
                        ],
                        [
                            "eid75",
                            "rotateZ",
                            3000,
                            1000,
                            "linear",
                            "${boom}",
                            '0deg',
                            '1deg'
                        ],
                        [
                            "eid76",
                            "rotateZ",
                            4000,
                            1000,
                            "linear",
                            "${boom}",
                            '1deg',
                            '-1deg'
                        ],
                        [
                            "eid79",
                            "rotateZ",
                            5000,
                            1000,
                            "linear",
                            "${boom}",
                            '-1deg',
                            '1deg'
                        ],
                        [
                            "eid80",
                            "rotateZ",
                            6000,
                            1000,
                            "linear",
                            "${boom}",
                            '1deg',
                            '-1deg'
                        ],
                        [
                            "eid81",
                            "rotateZ",
                            7000,
                            1000,
                            "linear",
                            "${boom}",
                            '-1deg',
                            '1deg'
                        ],
                        [
                            "eid82",
                            "rotateZ",
                            8000,
                            1000,
                            "linear",
                            "${boom}",
                            '1deg',
                            '-1deg'
                        ],
                        [
                            "eid83",
                            "rotateZ",
                            9000,
                            1000,
                            "linear",
                            "${boom}",
                            '-1deg',
                            '0deg'
                        ],
                        [
                            "eid193",
                            "top",
                            3000,
                            750,
                            "linear",
                            "${eekhoorn}",
                            '660px',
                            '640px'
                        ],
                        [
                            "eid194",
                            "top",
                            3750,
                            1250,
                            "linear",
                            "${eekhoorn}",
                            '640px',
                            '660px'
                        ],
                        [
                            "eid195",
                            "top",
                            5000,
                            1000,
                            "linear",
                            "${eekhoorn}",
                            '660px',
                            '640px'
                        ],
                        [
                            "eid196",
                            "top",
                            6000,
                            1000,
                            "linear",
                            "${eekhoorn}",
                            '640px',
                            '660px'
                        ],
                        [
                            "eid197",
                            "top",
                            7000,
                            1000,
                            "linear",
                            "${eekhoorn}",
                            '660px',
                            '640px'
                        ],
                        [
                            "eid198",
                            "top",
                            8000,
                            1000,
                            "linear",
                            "${eekhoorn}",
                            '640px',
                            '660px'
                        ],
                        [
                            "eid199",
                            "top",
                            9000,
                            1000,
                            "linear",
                            "${eekhoorn}",
                            '660px',
                            '640px'
                        ],
                        [
                            "eid200",
                            "top",
                            10000,
                            1000,
                            "linear",
                            "${eekhoorn}",
                            '640px',
                            '660px'
                        ],
                        [
                            "eid201",
                            "top",
                            11000,
                            1000,
                            "linear",
                            "${eekhoorn}",
                            '660px',
                            '640px'
                        ],
                        [
                            "eid202",
                            "top",
                            12000,
                            1000,
                            "linear",
                            "${eekhoorn}",
                            '640px',
                            '660px'
                        ],
                        [
                            "eid203",
                            "top",
                            13000,
                            1000,
                            "linear",
                            "${eekhoorn}",
                            '660px',
                            '640px'
                        ],
                        [
                            "eid204",
                            "top",
                            14000,
                            1000,
                            "linear",
                            "${eekhoorn}",
                            '640px',
                            '660px'
                        ],
                        [
                            "eid205",
                            "top",
                            15000,
                            1000,
                            "linear",
                            "${eekhoorn}",
                            '660px',
                            '640px'
                        ],
                        [
                            "eid206",
                            "top",
                            16000,
                            1000,
                            "linear",
                            "${eekhoorn}",
                            '640px',
                            '660px'
                        ],
                        [
                            "eid207",
                            "top",
                            17000,
                            1000,
                            "linear",
                            "${eekhoorn}",
                            '660px',
                            '640px'
                        ],
                        [
                            "eid208",
                            "top",
                            18000,
                            1000,
                            "linear",
                            "${eekhoorn}",
                            '640px',
                            '660px'
                        ],
                        [
                            "eid209",
                            "top",
                            19000,
                            1000,
                            "linear",
                            "${eekhoorn}",
                            '660px',
                            '640px'
                        ],
                        [
                            "eid210",
                            "top",
                            20000,
                            1000,
                            "linear",
                            "${eekhoorn}",
                            '640px',
                            '660px'
                        ],
                        [
                            "eid211",
                            "top",
                            21000,
                            1000,
                            "linear",
                            "${eekhoorn}",
                            '660px',
                            '640px'
                        ],
                        [
                            "eid212",
                            "top",
                            22000,
                            1000,
                            "linear",
                            "${eekhoorn}",
                            '640px',
                            '660px'
                        ],
                        [
                            "eid213",
                            "top",
                            23000,
                            1000,
                            "linear",
                            "${eekhoorn}",
                            '660px',
                            '640px'
                        ],
                        [
                            "eid281",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${balkje_ogen}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16",
                            "top",
                            0,
                            3000,
                            "linear",
                            "${son}",
                            '617px',
                            '39px'
                        ],
                        [
                            "eid190",
                            "left",
                            3000,
                            2251,
                            "linear",
                            "${eekhoorn}",
                            '-97px',
                            '20px'
                        ],
                        [
                            "eid285",
                            "left",
                            5251,
                            18949,
                            "linear",
                            "${eekhoorn}",
                            '20px',
                            '1016px'
                        ],
                        [
                            "eid225",
                            "display",
                            0,
                            0,
                            "linear",
                            "${ogen}",
                            'none',
                            'none'
                        ],
                        [
                            "eid226",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${ogen}",
                            'none',
                            'block'
                        ],
                        [
                            "eid284",
                            "opacity",
                            0,
                            3000,
                            "linear",
                            "${zwart_vlak}",
                            '0.7',
                            '0'
                        ],
                        [
                            "eid282",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${balkje_ogen1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid21",
                            "filter.grayscale",
                            0,
                            3000,
                            "linear",
                            "${Achtergrond-Jaap-lucht}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid86",
                            "rotateZ",
                            4138,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '0deg',
                            '1deg'
                        ],
                        [
                            "eid87",
                            "rotateZ",
                            4388,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '1deg',
                            '-1deg'
                        ],
                        [
                            "eid88",
                            "rotateZ",
                            4638,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '-1deg',
                            '1deg'
                        ],
                        [
                            "eid89",
                            "rotateZ",
                            4888,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '1deg',
                            '-1deg'
                        ],
                        [
                            "eid95",
                            "rotateZ",
                            5862,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '0deg',
                            '1deg'
                        ],
                        [
                            "eid96",
                            "rotateZ",
                            6112,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '1deg',
                            '-1deg'
                        ],
                        [
                            "eid97",
                            "rotateZ",
                            6362,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '-1deg',
                            '1deg'
                        ],
                        [
                            "eid98",
                            "rotateZ",
                            6612,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '1deg',
                            '-1deg'
                        ],
                        [
                            "eid99",
                            "rotateZ",
                            6862,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '0deg',
                            '1deg'
                        ],
                        [
                            "eid100",
                            "rotateZ",
                            7112,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '1deg',
                            '-1deg'
                        ],
                        [
                            "eid101",
                            "rotateZ",
                            7362,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '-1deg',
                            '1deg'
                        ],
                        [
                            "eid102",
                            "rotateZ",
                            7612,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '1deg',
                            '-1deg'
                        ],
                        [
                            "eid153",
                            "rotateZ",
                            9250,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '0deg',
                            '1deg'
                        ],
                        [
                            "eid154",
                            "rotateZ",
                            9500,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '1deg',
                            '-1deg'
                        ],
                        [
                            "eid155",
                            "rotateZ",
                            9750,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '-1deg',
                            '1deg'
                        ],
                        [
                            "eid156",
                            "rotateZ",
                            10000,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '1deg',
                            '-1deg'
                        ],
                        [
                            "eid157",
                            "rotateZ",
                            10250,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '0deg',
                            '1deg'
                        ],
                        [
                            "eid158",
                            "rotateZ",
                            10500,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '1deg',
                            '-1deg'
                        ],
                        [
                            "eid159",
                            "rotateZ",
                            10750,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '-1deg',
                            '1deg'
                        ],
                        [
                            "eid160",
                            "rotateZ",
                            11000,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '1deg',
                            '-1deg'
                        ],
                        [
                            "eid231",
                            "rotateZ",
                            11250,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '0deg',
                            '1deg'
                        ],
                        [
                            "eid232",
                            "rotateZ",
                            11500,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '1deg',
                            '-1deg'
                        ],
                        [
                            "eid233",
                            "rotateZ",
                            11750,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '-1deg',
                            '1deg'
                        ],
                        [
                            "eid234",
                            "rotateZ",
                            12000,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '1deg',
                            '-1deg'
                        ],
                        [
                            "eid236",
                            "rotateZ",
                            12750,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '0deg',
                            '1deg'
                        ],
                        [
                            "eid237",
                            "rotateZ",
                            13000,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '1deg',
                            '-1deg'
                        ],
                        [
                            "eid238",
                            "rotateZ",
                            13250,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '-1deg',
                            '1deg'
                        ],
                        [
                            "eid239",
                            "rotateZ",
                            13500,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '1deg',
                            '-1deg'
                        ],
                        [
                            "eid241",
                            "rotateZ",
                            13750,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '0deg',
                            '1deg'
                        ],
                        [
                            "eid242",
                            "rotateZ",
                            14000,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '1deg',
                            '-1deg'
                        ],
                        [
                            "eid243",
                            "rotateZ",
                            14250,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '-1deg',
                            '1deg'
                        ],
                        [
                            "eid244",
                            "rotateZ",
                            14500,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '1deg',
                            '-1deg'
                        ],
                        [
                            "eid246",
                            "rotateZ",
                            15592,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '0deg',
                            '1deg'
                        ],
                        [
                            "eid247",
                            "rotateZ",
                            15842,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '1deg',
                            '-1deg'
                        ],
                        [
                            "eid248",
                            "rotateZ",
                            16092,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '-1deg',
                            '1deg'
                        ],
                        [
                            "eid249",
                            "rotateZ",
                            16342,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '1deg',
                            '-1deg'
                        ],
                        [
                            "eid251",
                            "rotateZ",
                            16750,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '0deg',
                            '1deg'
                        ],
                        [
                            "eid252",
                            "rotateZ",
                            17000,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '1deg',
                            '-1deg'
                        ],
                        [
                            "eid253",
                            "rotateZ",
                            17250,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '-1deg',
                            '1deg'
                        ],
                        [
                            "eid254",
                            "rotateZ",
                            17500,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '1deg',
                            '-1deg'
                        ],
                        [
                            "eid256",
                            "rotateZ",
                            17750,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '0deg',
                            '1deg'
                        ],
                        [
                            "eid257",
                            "rotateZ",
                            18000,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '1deg',
                            '-1deg'
                        ],
                        [
                            "eid258",
                            "rotateZ",
                            18250,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '-1deg',
                            '1deg'
                        ],
                        [
                            "eid259",
                            "rotateZ",
                            18500,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '1deg',
                            '-1deg'
                        ],
                        [
                            "eid261",
                            "rotateZ",
                            19134,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '0deg',
                            '1deg'
                        ],
                        [
                            "eid262",
                            "rotateZ",
                            19384,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '1deg',
                            '-1deg'
                        ],
                        [
                            "eid263",
                            "rotateZ",
                            19634,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '-1deg',
                            '1deg'
                        ],
                        [
                            "eid264",
                            "rotateZ",
                            19884,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '1deg',
                            '-1deg'
                        ],
                        [
                            "eid266",
                            "rotateZ",
                            20134,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '0deg',
                            '1deg'
                        ],
                        [
                            "eid267",
                            "rotateZ",
                            20384,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '1deg',
                            '-1deg'
                        ],
                        [
                            "eid268",
                            "rotateZ",
                            20634,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '-1deg',
                            '1deg'
                        ],
                        [
                            "eid269",
                            "rotateZ",
                            20884,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '1deg',
                            '-1deg'
                        ],
                        [
                            "eid271",
                            "rotateZ",
                            21134,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '0deg',
                            '1deg'
                        ],
                        [
                            "eid272",
                            "rotateZ",
                            21384,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '1deg',
                            '-1deg'
                        ],
                        [
                            "eid273",
                            "rotateZ",
                            21634,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '-1deg',
                            '1deg'
                        ],
                        [
                            "eid274",
                            "rotateZ",
                            21884,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '1deg',
                            '-1deg'
                        ],
                        [
                            "eid276",
                            "rotateZ",
                            22134,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '0deg',
                            '1deg'
                        ],
                        [
                            "eid277",
                            "rotateZ",
                            22384,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '1deg',
                            '-1deg'
                        ],
                        [
                            "eid278",
                            "rotateZ",
                            22634,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '-1deg',
                            '1deg'
                        ],
                        [
                            "eid279",
                            "rotateZ",
                            22884,
                            250,
                            "linear",
                            "${mond_jaap}",
                            '1deg',
                            '0deg'
                        ],
                            [ "eid181", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${achtergrond_muziek}', [0] ] ],
                            [ "eid192", "trigger", 3000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Inleiding}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-76873089");
