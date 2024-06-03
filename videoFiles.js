const videoFiles = {
    "Lesson 2: Hello! I'm Anna!": {
        "src": "mp4/video2.mp4",
        "audioSrc": "wav/2_wav.wav",
        "subtitlesSrc": "subtitles2.vtt"
        "muteSegments": {
            "Jonathan": [
                { "start": 0.25, "end": 0.80 },
                { "start": 3.988, "end": 6.510 },
                { "start": 13.092, "end": 16.414 },
                { "start": 21.57, "end": 24.32 },
                { "start": 38.06, "end": 39.590 }
            ],
            "Pete": [
                { "start": 1.25, "end": 3.806 },
                { "start": 6.85, "end": 7.966 },
                { "start": 10.93, "end": 12.106 },
                { "start": 25.05, "end": 30.246 },
                { "start": 31.69, "end": 34.918 }
            ],
            "Anna": [
                { "start": 8.068, "end": 10.19 },
                { "start": 12.218, "end": 12.974 },
                { "start": 16.612, "end": 21.15 },
                { "start": 30.428, "end": 31.16 },
                { "start": 35.004, "end": 37.99 },
                { "start": 42.01, "end": 44.92 }
            ]
        },
        // "subtitles": [
        //     { "start": 0.25, "end": 0.80, "text": "Hey, Pete. Who's your friend?" },
        //     { "start": 1.25, "end": 3.806, "text": "She is Anna. She is new to DC." },
        //     { "start": 3.988, "end": 6.510, "text": "Where are you from?" },
        //     { "start": 8.068, "end": 10.19, "text": "I am from a small town." },
        //     { "start": 10.52, "end": 12.974, "text": "Welcome to DC." },
        //     { "start": 12.218, "end": 12.974, "text": "Thank you." },
        //     { "start": 13.092, "end": 16.414, "text": "I'm Jonathan. I'm in apartment B four." },
        //     { "start": 16.612, "end": 21.15, "text": "I am in apartment C two. Marsha is my roommate." },
        //     { "start": 21.57, "end": 24.32, "text": "I know Marsha. She is nice." },
        //     { "start": 25.05, "end": 30.246, "text": "And I am in apartment D. Seven. I have to go now." },
        //     { "start": 30.428, "end": 31.16, "text": "Oh." },
        //     { "start": 31.69, "end": 34.918, "text": "Remember to call Marsha at work. Tell her you're here." },
        //     { "start": 35.004, "end": 37.99, "text": "Right. Thanks, Pete. Nice to meet you." },
        //     { "start": 38.06, "end": 39.590, "text": "You too. Bye." },
        //     { "start": 42.01, "end": 44.92, "text": "Apartment C two. Here I come." }
        // ]
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