const videoFiles = {
    // "Lesson 10": {
    //     "src": "mp4/video10.mp4",
    //     "audioSrc": "wav/10_wav.wav",
    //     "subtitlesSrc": {
    //         "Anna": "subtitles/10_A.vtt",
    //         "Ashley": "subtitles/10_B.vtt",
    //         "default": "subtitles/10_practice.vtt"
    //     },
    //     "muteSegments": {
    //         "Anna": [
    //             { "start": 1.27 , "end": 14.215 },
    //             { "start": 18.63 , "end": 22.93 },
    //             { "start": 25.87 , "end": 33.42 },
    //             { "start": 40.44 , "end": 43.896 },
    //             { "start": 46.008 , "end": 46.976 },
    //             { "start": 51.82 , "end": 56.376 },
    //             { "start": 60.496 , "end": 62.58 },
    //             { "start": 65.15 , "end": 71.349 },
    //             { "start": 74.53 , "end": 78.828 }
    //         ],
    //         "Ashley": [
    //             { "start": 14.368 , "end": 18.964 },
    //             { "start": 23.23 , "end": 25.74 },
    //             { "start": 33.84 , "end": 39.58 },
    //             { "start": 44.048 , "end": 45.816 },
    //             { "start": 47.048 , "end": 51.857 },
    //             { "start": 56.692 , "end": 60.075 },
    //             { "start": 62.761 , "end": 65.045 },
    //             { "start": 71.921 , "end": 74.145 },
    //             { "start": 78.8 , "end": 79.522 }
    //         ]
    //     }
    // },
    // "Lesson 11": {
    //     "src": "mp4/video11.mp4",
    //     "audioSrc": "wav/11_wav.wav",
    //     "subtitlesSrc": {
    //         "Anna": "subtitles/11_A.vtt",
    //         "Marsha": "subtitles/11_B.vtt",
    //         "default": "subtitles/11_practice.vtt"
    //     },
    //     "muteSegments": {
    //         "Anna": [
    //             { "start": 0.500 , "end": 16.725 },
    //             { "start": 20.577 , "end": 21.161 },
    //             { "start": 24.505 , "end": 27.605 },
    //             { "start": 34.226 , "end": 44.165 },
    //             { "start": 51.500 , "end": 63.015 },
    //             { "start": 64.599 , "end": 67.431 },
    //             { "start": 70.095 , "end": 82.577 },
    //             { "start": 85.457 , "end": 89.505 },
    //             { "start": 92.265 , "end": 100.685 },
    //             { "start": 107.545 , "end": 108.485 },
    //             { "start": 113.785 , "end": 123.585 }
    //         ],
    //         "Marsha": [
    //             { "start": 17.065 , "end": 20.449 },
    //             { "start": 21.273 , "end": 22.165 },
    //             { "start": 30.025 , "end": 33.566 },
    //             { "start": 44.745 , "end": 51.697 },
    //             { "start": 63.095 , "end": 64.423 },
    //             { "start": 67.623 , "end": 69.475 },
    //             { "start": 82.761 , "end": 85.329 },
    //             { "start": 89.625 , "end": 91.325 },
    //             { "start": 105.585 , "end": 107.205 },
    //             { "start": 109.705 , "end": 110.885 }
    //         ]
    //     }
    // },
    // "Lesson 16": {
    //     "src": "mp4/video16.mp4",
    //     "audioSrc": "wav/16_wav.wav",
    //     "subtitlesSrc": {
    //         "Interviewer": "subtitles/16_A.vtt",
    //         "Interviewee": "subtitles/16_B.vtt",
    //         "default": "subtitles/16_practice.vtt"
    //     },
    //     "muteSegments": {
    //         "Interviewer": [
    //             { "start": 2 , "end": 27.531 },
    //             { "start": 29.010 , "end": 31.495 },
    //             { "start": 33.860 , "end": 35.939 },
    //             { "start": 37.600 , "end": 40.195 },
    //             { "start": 44.915 , "end": 47.411 },
    //             { "start": 51.290 , "end": 54.794 },
    //             { "start": 67.460 , "end": 77.145 },
    //             { "start": 87.845 , "end": 91.421 },
    //             { "start": 93.440 , "end": 105.835 },
    //             { "start": 108.135 , "end": 110.395 },
    //             { "start": 112.367 , "end": 114.991 },
    //             { "start": 118.167 , "end": 120.183 },
    //             { "start": 122.935 , "end": 126.103 },
    //             { "start": 130.670 , "end": 132.935 },
    //             { "start": 135.035 , "end": 137.107 },
    //             { "start": 140.475 , "end": 152.755 },
    //             { "start": 154.035 , "end": 156.707 },
    //             { "start": 160.860 , "end": 164.695 },
    //             { "start": 166.460 , "end": 170.74 },
    //             { "start": 175.451 , "end": 177.963 },
    //             { "start": 181.270 , "end": 183.327 },
    //             { "start": 183.990 , "end": 184.783 },
    //             { "start": 188.295 , "end": 214.863 }
    //         ],
    //         "Interviewee": [
    //             { "start": 27.460 , "end": 29.055 },
    //             { "start": 31.835 , "end": 33.335 },
    //             { "start": 36.107 , "end": 37.739 },
    //             { "start": 40.355 , "end": 44.175 },
    //             { "start": 47.603 , "end": 50.655 },
    //             { "start": 54.826 , "end": 66.785 },
    //             { "start": 77.845 , "end": 87.065 },
    //             { "start": 91.573 , "end": 92.745 },
    //             { "start": 106.430 , "end": 107.435 },
    //             { "start": 110.370 , "end": 112.199 },
    //             { "start": 115.030 , "end": 117.999 },
    //             { "start": 120.070 , "end": 122.315 },
    //             { "start": 126.239 , "end": 130.131 },
    //             { "start": 133.395 , "end": 134.695 },
    //             { "start": 137.251 , "end": 139.015 },
    //             { "start": 152.810 , "end": 153.535 },
    //             { "start": 156.891 , "end": 160.947 },
    //             { "start": 165.115 , "end": 166.615 },
    //             { "start": 170.515 , "end": 175.307 },
    //             { "start": 178.139 , "end": 181.251 },
    //             { "start": 183.270 , "end": 184.063 },
    //             { "start": 184.710 , "end": 185.555 }
    //         ]
    //     }
    // },
    // "Lesson 17": {
    //     "src": "mp4/video17.mp4",
    //     "audioSrc": "wav/17_wav.wav",
    //     "subtitlesSrc": {
    //         "Anna": "subtitles/17_A.vtt",
    //         "Marsha": "subtitles/17_B.vtt",
    //         "default": "subtitles/17_practice.vtt"
    //     },
    //     "muteSegments": {
    //         "Anna": [
    //             { "start": 2.057 , "end": 17.969 },
    //             { "start": 20.260 , "end": 22.393 },
    //             { "start": 26.750 , "end": 31.754 },
    //             { "start": 35.550 , "end": 44.497 },
    //             { "start": 47.145 , "end": 52.805 },
    //             { "start": 57.209 , "end": 59.537 },
    //             { "start": 64.889 , "end": 70.265 },
    //             { "start": 72.625 , "end": 75.765 },
    //             { "start": 83.655 , "end": 96.319 },
    //             { "start": 102.410 , "end": 109.445 },
    //             { "start": 111.010 , "end": 114.565 },
    //             { "start": 118.540 , "end": 128.685 },
    //             { "start": 134.480 , "end": 140.315 },
    //             { "start": 145.095 , "end": 153.847 }
    //         ],
    //         "Marsha": [
    //             { "start": 17.920 , "end": 20.385 },
    //             { "start": 22.370 , "end": 26.793 },
    //             { "start": 31.953 , "end": 35.605 },
    //             { "start": 44.601 , "end": 47.025 },
    //             { "start": 52.890 , "end": 57.033 },
    //             { "start": 59.520 , "end": 64.713 },
    //             { "start": 70.230 , "end": 72.245 },
    //             { "start": 76.385 , "end": 83.495 },
    //             { "start": 96.487 , "end": 102.511 },
    //             { "start": 109.825 , "end": 110.985 },
    //             { "start": 115.050 , "end": 118.529 },
    //             { "start": 129.585 , "end": 134.519 },
    //             { "start": 140.775 , "end": 143.875 },
    //         ]
    //     }
    // },
    // "Lesson 18": {
    //     "src": "mp4/video18.mp4",
    //     "audioSrc": "wav/18_wav.wav",
    //     "subtitlesSrc": {
    //         "Anna": "subtitles/18_A.vtt",
    //         "Caty": "subtitles/18_B.vtt",
    //         "default": "subtitles/18_practice.vtt"
    //     },
    //     "muteSegments": {
    //         "Anna": [
    //             { "start": 0.0 , "end": 13.603 },
    //             { "start": 22.610 , "end": 24.425 },
    //             { "start": 28.995 , "end": 29.723 },
    //             { "start": 35.150 , "end": 53.407 },
    //             { "start": 62.775 , "end": 63.791 },
    //             { "start": 66.620 , "end": 71.231 },
    //             { "start": 77.335 , "end": 97.407 },
    //             { "start": 102.055 , "end": 104.835 },
    //             { "start": 111.837 , "end": 125.325 },
    //             { "start": 132.141 , "end": 138.627 },
    //             { "start": 142.180 , "end": 168.845 },
    //             { "start": 175.525 , "end": 176.805 },
    //             { "start": 178.610 , "end": 179.385 },
    //             { "start": 188.465 , "end": 191.005 },
    //             { "start": 198.561 , "end": 219.729 },
    //             { "start": 226.625 , "end": 233.177 },
    //             { "start": 241.310 , "end": 246.493 }
    //         ],
    //         "Caty": [
    //             { "start": 13.18 , "end": 22.801 },
    //             { "start": 24.410 , "end": 26.495 },
    //             { "start": 29.770 , "end": 32.415 },
    //             { "start": 53.430 , "end": 62.435 },
    //             { "start": 63.360 , "end": 66.743 },
    //             { "start": 71.423 , "end": 74.315 },
    //             { "start": 97.470 , "end": 100.955 },
    //             { "start": 105.575 , "end": 111.709 },
    //             { "start": 125.210 , "end": 131.957 },
    //             { "start": 138.500 , "end": 141.415 },
    //             { "start": 168.700 , "end": 175.105 },
    //             { "start": 176.700 , "end": 178.605 },
    //             { "start": 179.730 , "end": 187.365 },
    //             { "start": 193.425 , "end": 198.377 },
    //             { "start": 219.597 , "end": 226.505 },
    //             { "start": 233.080 , "end": 240.405 }
    //         ]
    //     }
    // },
    // "Lesson 19": {
    //     "src": "mp4/video19.mp4",
    //     "audioSrc": "wav/19_wav.wav",
    //     "subtitlesSrc": {
    //         "Anna": "subtitles/19_A.vtt",
    //         "Caty": "subtitles/19_B.vtt",
    //         "default": "subtitles/19_practice.vtt"
    //     },
    //     "muteSegments": {
    //         "Anna": [
    //             { "start": 0.21 , "end": 27.070 },
    //             { "start": 30.590 , "end": 32.021 },
    //             { "start": 37.800 , "end": 51.861 },
    //             { "start": 58.669 , "end": 62.995 },
    //             { "start": 68.300 , "end": 72.095 },
    //             { "start": 78.910 , "end": 83.645 },
    //             { "start": 91.020 , "end": 99.185 },
    //             { "start": 115.580 , "end": 119.835 },
    //             { "start": 131.410 , "end": 140.497 },
    //             { "start": 145.540 , "end": 152.077 },
    //             { "start": 152.722 , "end": 154.73 },
    //             { "start": 160.643 , "end": 178.885 }
    //         ],
    //         "Caty": [
    //             { "start": 26.780 , "end": 30.493 },
    //             { "start": 31.940 , "end": 38.021 },
    //             { "start": 52.013 , "end": 58.723 },
    //             { "start": 62.890 , "end": 67.815 },
    //             { "start": 72.030 , "end": 77.735 },
    //             { "start": 83.690 , "end": 90.969 },
    //             { "start": 99.345 , "end": 114.275 },
    //             { "start": 120.000 , "end": 130.635 },
    //             { "start": 140.641 , "end": 145.617 },
    //             { "start": 152.071 , "end": 152.648 },
    //             { "start": 154.937 , "end": 161.075 }
    //         ]
    //     }
    // },
    // "Lesson 20": {
    //     "src": "mp4/video20.mp4",
    //     "audioSrc": "wav/20_wav.wav",
    //     "subtitlesSrc": {
    //         "Anna": "subtitles/20_A.vtt",
    //         "Pete": "subtitles/20_B.vtt",
    //         "default": "subtitles/20_practice.vtt"
    //     },
    //     "muteSegments": {
    //         "Anna": [
    //             { "start": 0.96 , "end": 23.057 },
    //             { "start": 24.200 , "end": 29.733 },
    //             { "start": 31.890 , "end": 38.945 },
    //             { "start": 42.130 , "end": 44.185 },
    //             { "start": 47.765 , "end": 50.501 },
    //             { "start": 52.390 , "end": 56.751 },
    //             { "start": 58.079 , "end": 62.775 },
    //             { "start": 65.370 , "end": 67.463 },
    //             { "start": 70.511 , "end": 72.719 },
    //             { "start": 78.260 , "end": 88.923 },
    //             { "start": 91.940 , "end": 94.851 },
    //             { "start": 100.480 , "end": 104.447 },
    //             { "start": 107.631 , "end": 115.835 },
    //             { "start": 118.470 , "end": 122.287 },
    //             { "start": 132.865 , "end": 134.665 },
    //             { "start": 136.230 , "end": 138.521 },
    //             { "start": 141.470 , "end": 146.769 },
    //             { "start": 149.740 , "end": 154.089 },
    //             { "start": 175.785 , "end": 187.025 }
    //         ],
    //         "Pete": [
    //             { "start": 23.241 , "end": 24.285 },
    //             { "start": 29.909 , "end": 31.925 },
    //             { "start": 39.765 , "end": 41.225 },
    //             { "start": 43.930 , "end": 47.145 },
    //             { "start": 50.693 , "end": 52.145 },
    //             { "start": 56.840 , "end": 57.983 },
    //             { "start": 62.935 , "end": 65.367 },
    //             { "start": 67.490 , "end": 70.367 },
    //             { "start": 72.740 , "end": 78.515 },
    //             { "start": 88.930 , "end": 92.035 },
    //             { "start": 94.870 , "end": 100.643 },
    //             { "start": 104.400 , "end": 107.527 },
    //             { "start": 115.920 , "end": 118.395 },
    //             { "start": 122.050 , "end": 132.315 },
    //             { "start": 134.825 , "end": 136.209 },
    //             { "start": 138.673 , "end": 141.849 },
    //             { "start": 146.760 , "end": 149.729 },
    //             { "start": 154.257 , "end": 159.905 },
    //             { "start": 161.980 , "end": 165.017 },
    //             { "start": 166.433 , "end": 169.145 }
    //         ]
    //     }
    // },
    // "Lesson 22": {
    //     "src": "mp4/video22.mp4",
    //     "audioSrc": "wav/22_wav.wav",
    //     "subtitlesSrc": {
    //         "Anna": "subtitles/22_A.vtt",
    //         "Amelia": "subtitles/22_B.vtt",
    //         "default": "subtitles/22_practice.vtt"
    //     },
    //     "muteSegments": {
    //         "Anna": [
    //             { "start": 0.001 , "end": 35.753 },
    //             { "start": 40.920 , "end": 44.205 },
    //             { "start": 48.190 , "end": 50.885 },
    //             { "start": 52.609 , "end": 58.751 },
    //             { "start": 61.590 , "end": 68.635 },
    //             { "start": 71.031 , "end": 75.435 },
    //             { "start": 77.890 , "end": 84.905 },
    //             { "start": 86.820 , "end": 94.105 },
    //             { "start": 99.125 , "end": 115.785 },
    //             { "start": 120.080 , "end": 126.861 },
    //             { "start": 130.333 , "end": 140.273 },
    //             { "start": 147.710 , "end": 153.125 },
    //             { "start": 156.370 , "end": 161.885 },
    //             { "start": 164.305 , "end": 173.621 },
    //             { "start": 177.093 , "end": 179.400 }
    //         ],
    //         "Amelia": [
    //             { "start": 35.889 , "end": 41.125 },
    //             { "start": 44.545 , "end": 48.225 },
    //             { "start": 51.185 , "end": 52.473 },
    //             { "start": 58.943 , "end": 61.703 },
    //             { "start": 69.015 , "end": 70.887 },
    //             { "start": 75.855 , "end": 78.035 },
    //             { "start": 84.870 , "end": 86.885 },
    //             { "start": 94.485 , "end": 98.745 },
    //             { "start": 116.125 , "end": 120.285 },
    //             { "start": 126.810 , "end": 130.141 },
    //             { "start": 140.449 , "end": 147.793 },
    //             { "start": 154.265 , "end": 156.329 },
    //             { "start": 162.265 , "end": 164.005 },
    //             { "start": 173.650 , "end": 176.901 }
    //         ]
    //     }
    // },
    // "Lesson 25": {
    //     "src": "mp4/video25.mp4",
    //     "audioSrc": "wav/25_wav.wav",
    //     "subtitlesSrc": {
    //         "Anna": "subtitles/25_A.vtt",
    //         "Dan": "subtitles/25_B.vtt",
    //         "default": "subtitles/25_practice.vtt"
    //     },
    //     "muteSegments": {
    //         "Anna": [
    //             { "start": 0.100 , "end": 22.008 },
    //             { "start": 24.496 , "end": 27.862 },
    //             { "start": 32.958 , "end": 34.614 },
    //             { "start": 38.67 , "end": 41.89 },
    //             { "start": 44.414 , "end": 48.47 },
    //             { "start": 49.34 , "end": 54.73 },
    //             { "start": 65.47 , "end": 67.65 },
    //             { "start": 82.38 , "end": 84.5 },
    //             { "start": 93.74 , "end": 95.64 },
    //             { "start": 103.172 , "end": 108.204 },
    //             { "start": 110.200 , "end": 137.994 },
    //             { "start": 142.858 , "end": 148.9 }
    //         ],
    //         "Dan": [
    //             { "start": 22.144 , "end": 24.312 },
    //             { "start": 28.006 , "end": 32.806 },
    //             { "start": 34.782 , "end": 38.37 },
    //             { "start": 41.79 , "end": 44.278 },
    //             { "start": 48.63 , "end": 49.43 },
    //             { "start": 55.15 , "end": 65.17 },
    //             { "start": 68.11 , "end": 82.05 },
    //             { "start": 84.62 , "end": 93.24 },
    //             { "start": 97.42 , "end": 103.044 },
    //             { "start": 108.372 , "end": 109.8 }
    //         ]
    //     }
    // },
    // "Lesson 27": {
    //     "src": "mp4/video27.mp4",
    //     "audioSrc": "wav/27_wav.wav",
    //     "subtitlesSrc": {
    //         "Anna": "subtitles/27_A.vtt",
    //         "Others": "subtitles/27_B.vtt",
    //         "default": "subtitles/27_practice.vtt"
    //     },
    //     "muteSegments": {
    //         "Anna": [
    //             { "start": 0.4 , "end": 19.317 },
    //             { "start": 20.930 , "end": 24.839 },
    //             { "start": 27.000 , "end": 37.68 },
    //             { "start": 42.070 , "end": 46.468 },
    //             { "start": 52.540 , "end": 53.94 },
    //             { "start": 60.140 , "end": 61.28 },
    //             { "start": 65.310 , "end": 70.163 },
    //             { "start": 77.150 , "end": 79.984 },
    //             { "start": 82.770 , "end": 84.672 },
    //             { "start": 88.970 , "end": 92.048 },
    //             { "start": 93.92 , "end": 96.08 },
    //             { "start": 98.430 , "end": 108.016 },
    //             { "start": 113.024 , "end": 117.85 },
    //             { "start": 119.600 , "end": 123.642 },
    //             { "start": 127.17 , "end": 131.45 },
    //             { "start": 139.880 , "end": 146.028 },
    //             { "start": 148.600 , "end": 153.708 },
    //             { "start": 157.130 , "end": 179.302 }
    //         ],
    //         "Others": [
    //             { "start": 19.990 , "end": 20.663 },
    //             { "start": 24.920 , "end": 26.92 },
    //             { "start": 37.860 , "end": 42.004 },
    //             { "start": 46.350 , "end": 52.468 },
    //             { "start": 54.06 , "end": 60.12 },
    //             { "start": 61.200 , "end": 65.248 },
    //             { "start": 70.104 , "end": 77.312 },
    //             { "start": 79.960 , "end": 82.864 },
    //             { "start": 84.710 , "end": 89.184 },
    //             { "start": 92.100 , "end": 93.76 },
    //             { "start": 96.110 , "end": 98.56 },
    //             { "start": 108.208 , "end": 113.222 },
    //             { "start": 117.800 , "end": 119.61 },
    //             { "start": 123.660 , "end": 126.11 },
    //             { "start": 131.670 , "end": 139.912 },
    //             { "start": 146.020 , "end": 148.446 },
    //             { "start": 153.730 , "end": 157.1 }
    //         ]
    //     }
    // },
    "Lesson 29": {
        "src": "mp4/video29.mp4",
        "audioSrc": "wav/29_wav.wav",
        "subtitlesSrc": {
            "Anna": "subtitles/29_A.vtt",
            "Marsha": "subtitles/29_B.vtt",
            "default": "subtitles/29_practice.vtt"
        },
        "muteSegments": {
            "Anna": [
                { "start": 0.2 , "end": 14.808 },
                { "start": 17.176 , "end": 22.696 },
                { "start": 25.06 , "end": 32.11 },
                { "start": 34.474 , "end": 35.89 },
                { "start": 39.418 , "end": 43.906 },
                { "start": 48.794 , "end": 52.29 },
                { "start": 56.430 , "end": 62.984 },
                { "start": 65.170 , "end": 72.024 },
                { "start": 74.530 , "end": 108.774 },
                { "start": 114.020 , "end": 114.736 },
                { "start": 122.424 , "end": 125.9 },
                { "start": 129.560 , "end": 132.848 },
                { "start": 134.152 , "end": 138.448 },
                { "start": 141.951 , "end": 150.246 },
                { "start": 154.054 , "end": 158.89 },
                { "start": 160.150 , "end": 175.29 }
            ],
            "Marsha": [
                { "start": 14.670 , "end": 17.032 },
                { "start": 22.888 , "end": 25.06 },
                { "start": 32.109 , "end": 34.338 },
                { "start": 35.940 , "end": 39.266 },
                { "start": 43.740 , "end": 48.658 },
                { "start": 52.45 , "end": 56.504 },
                { "start": 63.152 , "end": 65.288 },
                { "start": 72.192 , "end": 74.536 },
                { "start": 108.820 , "end": 114.0 },
                { "start": 114.560 , "end": 122.288 },
                { "start": 126.380 , "end": 129.68 },
                { "start": 132.910 , "end": 133.984 },
                { "start": 138.624 , "end": 141.847 },
                { "start": 150.170 , "end": 153.878 },
                { "start": 158.990 , "end": 160.214 }
            ]
        }
    },
    "Lesson 30": {
        "src": "mp4/video30.mp4",
        "audioSrc": "wav/30_wav.wav",
        "subtitlesSrc": {
            "Anna": "subtitles/30_A.vtt",
            "Pete": "subtitles/30_B.vtt",
            "default": "subtitles/30_practice.vtt"
        },
        "muteSegments": {
            "Anna": [
                { "start": 0.001 , "end": 29.466 },
                { "start": 31.380 , "end": 32.199 },
                { "start": 33.040 , "end": 35.082 },
                { "start": 39.978 , "end": 42.811 },
                { "start": 52.370 , "end": 59.058 },
                { "start": 65.682 , "end": 68.71 },
                { "start": 71.270 , "end": 74.87 },
                { "start": 81.140 , "end": 84.68 },
                { "start": 88.860 , "end": 93.6 },
                { "start": 106.350 , "end": 109.692 },
                { "start": 114.000 , "end": 118.92 },
                { "start": 120.800 , "end": 130.64 },
                { "start": 133.83 , "end": 134.59 },
                { "start": 139.130 , "end": 140.41 },
                { "start": 145.930 , "end": 152.17 },
                { "start": 154.620 , "end": 158.45 },
                { "start": 165.630 , "end": 172.324 },
                { "start": 179.18 , "end": 192.28 }
            ],
            "Pete": [
                { "start": 29.220 , "end": 31.216 },
                { "start": 32.160 , "end": 33.181 },
                { "start": 35.190 , "end": 39.866 },
                { "start": 42.730 , "end": 52.45 },
                { "start": 59.194 , "end": 65.554 },
                { "start": 69.050 , "end": 71.23 },
                { "start": 75.050 , "end": 81.08 },
                { "start": 84.970 , "end": 87.44 },
                { "start": 93.94 , "end": 106.68 },
                { "start": 109.680 , "end": 114.172 },
                { "start": 119.140 , "end": 120.908 },
                { "start": 130.900 , "end": 133.71 },
                { "start": 134.480 , "end": 139.118 },
                { "start": 140.500 , "end": 146.014 },
                { "start": 152.650 , "end": 154.29 },
                { "start": 158.710 , "end": 165.924 },
                { "start": 172.492 , "end": 177.64 }
            ]
        }
    },
    "Lesson 31": {
        "src": "mp4/video31.mp4",
        "audioSrc": "wav/31_wav.wav",
        "subtitlesSrc": {
            "Anna": "subtitles/31_A.vtt",
            "Others": "subtitles/31_B.vtt",
            "default": "subtitles/31_practice.vtt"
        },
        "muteSegments": {
            "Anna": [
                { "start": 0.24 , "end": 14.424 },
                { "start": 16.780 , "end": 20.776 },
                { "start": 25.264 , "end": 30.366 },
                { "start": 32.406 , "end": 36.062 },
                { "start": 38.480 , "end": 55.102 },
                { "start": 55.246 , "end": 56.676 },
                { "start": 56.798 , "end": 58.456 },
                { "start": 58.568 , "end": 59.261 },
                { "start": 62.776 , "end": 64.776 },
                { "start": 66.008 , "end": 66.76 },
                { "start": 68.048 , "end": 71.208 },
                { "start": 73.04 , "end": 74.056 },
                { "start": 75.528 , "end": 76.52 },
                { "start": 81.096 , "end": 84.27 },
                { "start": 90.864 , "end": 97.872 },
                { "start": 106.304 , "end": 109.22 },
                { "start": 113.020 , "end": 117.64 },
                { "start": 130.88 , "end": 132.904 },
                { "start": 133.896 , "end": 154.0 },
                { "start": 153.970 , "end": 157.690 },
                { "start": 157.690 , "end": 163.96 },
                { "start": 167.58 , "end": 178.96 }
            ],
            "Others": [
                { "start": 14.552 , "end": 15.528 },
                { "start": 15.624 , "end": 16.776 },
                { "start": 20.928 , "end": 25.128 },
                { "start": 30.240 , "end": 32.302 },
                { "start": 36.166 , "end": 38.718 },
                { "start": 59.310 , "end": 62.712 },
                { "start": 64.888 , "end": 65.896 },
                { "start": 66.720 , "end": 67.896 },
                { "start": 71.344 , "end": 72.92 },
                { "start": 74.168 , "end": 75.416 },
                { "start": 76.64 , "end": 80.952 },
                { "start": 83.560 , "end": 90.768 },
                { "start": 98.016 , "end": 106.208 },
                { "start": 109.920 , "end": 113.176 },
                { "start": 117.76 , "end": 130.76 },
                { "start": 132.810 , "end": 133.832 },
                { "start": 162.920 , "end": 167.28 }
            ]
        }
    },
    "Lesson 35": {
        "src": "mp4/video35.mp4",
        "audioSrc": "wav/35_wav.wav",
        "subtitlesSrc": {
            "Anna": "subtitles/35_A.vtt",
            "Marsha": "subtitles/35_B.vtt",
            "default": "subtitles/35_practice.vtt"
        },
        "muteSegments": {
            "Anna": [
                { "start": 0.72 , "end": 22.808 },
                { "start": 25.590 , "end": 30.83 },
                { "start": 38.282 , "end": 40.19 },
                { "start": 44.33 , "end": 62.92 },
                { "start": 69.060 , "end": 73.32 },
                { "start": 89.630 , "end": 102.318 },
                { "start": 106.478 , "end": 113.038 },
                { "start": 124.880 , "end": 131.118 },
                { "start": 137.980 , "end": 140.28 },
                { "start": 144.08 , "end": 147.576 },
                { "start": 149.36 , "end": 149.859 }
            ],
            "Marsha": [
                { "start": 22.984 , "end": 25.848 },
                { "start": 31.0 , "end": 38.114 },
                { "start": 40.65 , "end": 43.99 },
                { "start": 64.34 , "end": 69.116 },
                { "start": 73.94 , "end": 89.646 },
                { "start": 102.060 , "end": 106.286 },
                { "start": 112.870 , "end": 125.006 },
                { "start": 131.294 , "end": 138.024 },
                { "start": 140.290 , "end": 143.5 },
                { "start": 147.728 , "end": 149.06 }
            ]
        }
    },
    "Lesson 36": {
        "src": "mp4/video36.mp4",
        "audioSrc": "wav/36_wav.wav",
        "subtitlesSrc": {
            "Anna": "subtitles/36_A.vtt",
            "Marsha": "subtitles/36_B.vtt",
            "default": "subtitles/36_practice.vtt"
        },
        "muteSegments": {
            "Anna": [
                { "start": 0.24 , "end": 21.34 },
                { "start": 26.52 , "end": 29.18 },
                { "start": 31.07 , "end": 37.142 },
                { "start": 37.326 , "end": 38.33 },
                { "start": 38.83 , "end": 42.33 },
                { "start": 45.63 , "end": 49.69 },
                { "start": 54.99 , "end": 65.198 },
                { "start": 68.878 , "end": 70.81 },
                { "start": 78.63 , "end": 84.45 },
                { "start": 87.378 , "end": 91.714 },
                { "start": 103.52 , "end": 104.703 },
                { "start": 106.046 , "end": 119.041 }
            ],
            "Marsha": [
                { "start": 21.92 , "end": 26.44 },
                { "start": 29.79 , "end": 30.53 },
                { "start": 42.67 , "end": 45.29 },
                { "start": 49.896 , "end": 54.45 },
                { "start": 65.374 , "end": 68.686 },
                { "start": 71.35 , "end": 78.21 },
                { "start": 84.97 , "end": 87.186 },
                { "start": 92.283 , "end": 102.75 },
                { "start": 105.169 , "end": 106.091 }
            ]
        }
    },
    "Lesson 37": {
        "src": "mp4/video37.mp4",
        "audioSrc": "wav/37_wav.wav",
        "subtitlesSrc": {
            "Anna": "subtitles/37_A.vtt",
            "Marsha": "subtitles/37_B.vtt",
            "default": "subtitles/37_practice.vtt"
        },
        "muteSegments": {
            "Anna": [
                { "start": 0.72 , "end": 18.36 },
                { "start": 21.864 , "end": 26.056 },
                { "start": 29.264 , "end": 32.974 },
                { "start": 39.846 , "end": 43.486 },
                { "start": 51.03 , "end": 60.04 },
                { "start": 64.228 , "end": 66.892 },
                { "start": 67.908 , "end": 83.674 },
                { "start": 108.99 , "end": 117.724 },
                { "start": 128.332 , "end": 136.216 },
                { "start": 137.976 , "end": 142.032 },
                { "start": 144.552 , "end": 150.86 },
                { "start": 152.584 , "end": 158.32 },
                { "start": 166.042 , "end": 183.2 }
            ],
            "Marsha": [
                { "start": 18.52 , "end": 21.688 },
                { "start": 26.248 , "end": 29.128 },
                { "start": 33.102 , "end": 39.742 },
                { "start": 43.678 , "end": 50.91 },
                { "start": 60.34 , "end": 64.076 },
                { "start": 67.076 , "end": 67.756 },
                { "start": 83.852 , "end": 108.83 },
                { "start": 117.892 , "end": 128.204 },
                { "start": 136.348 , "end": 137.792 },
                { "start": 142.216 , "end": 144.384 },
                { "start": 151.16 , "end": 152.448 },
                { "start": 158.48 , "end": 165.914 }
            ]
        }
    }
}