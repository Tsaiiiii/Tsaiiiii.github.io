const videoFiles = {
    "Lesson 2: Hello! I'm Anna!": {
        "src": "mp4/video2.mp4",
        "audioSrc": "wav/2_wav.wav",
        "subtitlesSrc": {
            "Jonathan": "subtitles/subtitles2_jonathan.vtt",
            "Pete": "subtitles/subtitles2_pete.vtt",
            "Anna": "subtitles/subtitles2_anna.vtt"
        },
        "muteSegments": {
            "Jonathan": [
                { "start": 1.25, "end": 3.806 },
                { "start": 6.85, "end": 7.966 },
                { "start": 10.93, "end": 12.106 },
                { "start": 13.092, "end": 16.414 },
                { "start": 21.57, "end": 24.32 },
                { "start": 38.06, "end": 39.590 }
            ],
            "Pete": [
                { "start": 3.988, "end": 6.510 },
                { "start": 25.05, "end": 34.918 }
            ],
            "Anna": [
                { "start": 8.068, "end": 10.19 },
                { "start": 12.218, "end": 12.974 },
                { "start": 16.612, "end": 21.15 },
                { "start": 35.004, "end": 37.99 },
                { "start": 42.01, "end": 44.92 }
            ]
        }
    },
    "Lesson 3: I'm Here!": {
        "src": "mp4/video3.mp4",
        "audioSrc": "wav/3_wav.wav",
    },
    "Lesson 4: What Is It?": {
        "src": "mp4/video4.mp4",
        "audioSrc": "wav/4_wav.wav",
    },
    "Lesson 5: Where Are You?": {
        "src": "mp4/video5.mp4",
        "audioSrc": "wav/5_wav.wav",
    },
    "Lesson 6: Where Is the Gym?": {
        "src": "mp4/video6.mp4",
        "audioSrc": "wav/6_wav.wav",
    },
    "Lesson 7: What Are You Doing?": {
        "src": "mp4/video7.mp4",
        "audioSrc": "wav/7_wav.wav",
    },
    "Lesson 8: Are You Busy?": {
        "src": "mp4/video8.mp4",
        "audioSrc": "wav/8_wav.wav",
    },
    "Lesson 9: Is It Cold?": {
        "src": "mp4/video9.mp4",
        "audioSrc": "wav/9_wav.wav",
    },
    "Lesson 10: Come Over to My Place": {
        "src": "mp4/video10.mp4",
        "audioSrc": "wav/10_wav.wav",
        "subtitlesSrc": {
            "Anna": "subtitles/10_A.vtt",
            "Ashley": "subtitles/10_B.vtt",
        },
        "muteSegments": {
        "Anna": [
            {
                "start": 1,
                "end": 14.395
            },
            {
                "start": 19.126,
                "end": 22.93
            },
            {
                "start": 25.87,
                "end": 33.42
            },
            {
                "start": 40.44,
                "end": 43.896
            },
            {
                "start": 46.008,
                "end": 46.976
            },
            {
                "start": 52.584,
                "end": 57.138
            },
            {
                "start": 60.496,
                "end": 62.58
            },
            {
                "start": 65.815,
                "end": 71.52
            },
            {
                "start": 72.445,
                "end": 78.303
            }
        ],
        "Ashley": [
            {
                "start": 14.395,
                "end": 19.022
            },
            {
                "start": 23.23,
                "end": 25.74
            },
            {
                "start": 33.84,
                "end": 39.58
            },
            {
                "start": 44.048,
                "end": 45.816
            },
            {
                "start": 47.048,
                "end": 52.137
            },
            {
                "start": 57.138,
                "end": 60.352
            },
            {
                "start": 63.04,
                "end": 65.815
            },
            {
                "start": 71.52,
                "end": 72
            },
            {
                "start": 78.303,
                "end": 78.92
            }
        ]
    }
    },
    "Lesson 11: This Is My Neighborhood": {
        "src": "mp4/video11.mp4",
        "audioSrc": "wav/11_wav.wav",
    },
    "Lesson 12: Meet My Family": {
        "src": "mp4/video12.mp4",
        "audioSrc": "wav/12_wav.wav",
    },
    "Lesson 13: Happy Birthday! William Shakespeare!": {
        "src": "mp4/video13.mp4",
        "audioSrc": "wav/13_wav.wav",
    },
    "Lesson 14: How About This?": {
        "src": "mp4/video14.mp4",
        "audioSrc": "wav/14_wav.wav",
    },
    "Lesson 15: I Love People-Watching!": {
        "src": "mp4/video15.mp4",
        "audioSrc": "wav/15_wav.wav",
    },
    "Lesson 16: Where Are You From?": {
        "src": "mp4/video16.mp4",
        "audioSrc": "wav/16_wav.wav",
    },
    "Lesson 17: Are You Free on Friday?": {
        "src": "mp4/video17.mp4",
        "audioSrc": "wav/17_wav.wav",
    },
    "Lesson 18: She Always Does That": {
        "src": "mp4/video18.mp4",
        "audioSrc": "wav/18_wav.wav",
    },
    "Lesson 19: When Do I Start?": {
        "src": "mp4/video19.mp4",
        "audioSrc": "wav/19_wav.wav",
    },
    "Lesson 20: What Can You Do?": {
        src: "mp4/video20.mp4",
        audioSrc: "wav/20_wav.wav",
        muteSegments: {
            "Anna": [
                { start: 5.8, end: 29.9 },
                { start: 32.5, end: 37.7 },
                { start: 40.7, end: 54.2 },
                { start: 57.3, end: 59.0 },
                { start: 65.3, end: 70.8 },
                { start: 73.6, end: 79.8 },
                { start: 104.1, end: 114.8 },
                { start: 122.8, end: 131.1 },
                { start: 133.6, end: 138.1 },
                { start: 151.1, end: 157.8 },
                { start: 162.2, end: 168.5 },
                { start: 171.9, end: 176.9 },
                { start: 204.9, end: 217.9 }
            ],
            "Pete": [
                { start: 30.9, end: 32.5 },
                { start: 37.7, end: 40.7 },
                { start: 46.7, end: 49.2 },
                { start: 51.2, end: 57.3 },
                { start: 59.0, end: 64.2 },
                { start: 70.8, end: 73.6 },
                { start: 76.8, end: 82.8 },
                { start: 89.1, end: 99.8 },
                { start: 107.6, end: 114.8 },
                { start: 118.8, end: 122.8 },
                { start: 157.8, end: 162.2 },
                { start: 168.5, end: 171.9 },
                { start: 176.9, end: 185.2 },
                { start: 187.6, end: 198.3 }
            ],
            "Marsha": [
                { start: 185.2, end: 187.6 },
                { start: 198.3, end: 204.9 }
            ]
        }
    },
    "Lesson 21: Can You Come to the Party?": {
        "src": "mp4/video21.mp4",
        "audioSrc": "wav/21_wav.wav",
    },
    "Lesson 22: Next Summer...": {
        "src": "mp4/video22.mp4",
        "audioSrc": "wav/22_wav.wav",
    },
    "Lesson 23: What Do You Want?": {
        "src": "mp4/video23.mp4",
        "audioSrc": "wav/23_wav.wav",
    },
    "Lesson 24: Yesterday Was Amazing!": {
        "src": "mp4/video24.mp4",
        "audioSrc": "wav/24_wav.wav",
    },
    "Lesson 25: Watch Out": {
        src: "mp4/video25.mp4",
        audioSrc: "wav/25_wav.wav",
        muteSegments: {
            "Anna": [
                { start: 2.0, end: 21.2 },
                { start: 24.9, end: 27.9 },
                { start: 38.8, end: 45.0 },
                { start: 55.8, end: 66.0 },
                { start: 68.5, end: 82.5 },
                { start: 93.5, end: 101.5 },
                { start: 110.3, end: 137.9 }
            ],
            "Stranger": [
                { start: 22.3, end: 24.9 },
                { start: 42.5, end: 55.8 },
                { start: 84.8, end: 96.0 },
                { start: 107.0, end: 110.3 }
            ],
            "None": [
                { start: 137.9, end: 142.9 }
            ]
        }
    }
}