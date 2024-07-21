type Violation = {
    name: string;
    createdAt: string[];
};

export type workers_type = {
    name: string;
    role: string;
    image: string;
    contractor: string;
    contractor_img: string;
    violations: Violation[];
};

export const workers_keys = [
    {
        name: "protective gloves",
        image: "/images/safety_gloves.png",
    },
    {
        name: "safety glasses",
        image: "/images/safety_glasses.png",
    },
    {
        name: "ear protection",
        image: "/images/ear_protection.png",
    },
    {
        name: "mask protection",
        image: "/images/mask_protection.png",
    },
    {
        name: "knee pads",
        image: "/images/knee_pads.png",
    },
    {
        name: "safety shoes",
        image: "/images/safety_shoes.png",
    },
    {
        name: "coverall",
        image: "/images/coverall.png",
    },
    {
        name: "hi-vis jacket",
        image: "/images/Hi-Vis_Jacket.png",
    },
    {
        name: "safety harness",
        image: "/images/safety_harness.png",
    },
    {
        name: "face shield",
        image: "/images/face_shield.png",
    },
    {
        name: "hard hat",
        image: "/images/hard_hat.png",
    },
    {
        name: "welding helmet",
        image: "/images/welding_helmet.png",
    },
];

export const workers_data: workers_type[] = [
    {
        name: "worker1",
        role: "maneger",
        image: "/images/profile.svg",
        contractor: "biowanze",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "protective Gloves",
                createdAt: ["2022-01-01", "2022-01-01"],
            },
            {
                name: "mask protection",
                createdAt: ["2022-01-01", "2022-01-01", "2022-01-01", "2022-01-01"],
            },
            {
                name: "safety shoes",
                createdAt: ["2022-01-01", "2022-01-01", "2022-01-01", "2022-01-01"],
            },
            {
                name: "safety glasses",
                createdAt: ["2022-01-01", "2022-01-01", "2022-01-01", "2022-01-01"],
            },
            {
                name: "ear protection",
                createdAt: ["2022-01-01", "2022-01-01", "2022-01-01", "2022-01-01"],
            },
            {
                name: "knee pads",
                createdAt: ["2022-01-01", "2022-01-01", "2022-01-01", "2022-01-01"],
            },
            {
                name: "coverall",
                createdAt: ["2022-01-01", "2022-01-01", "2022-01-01", "2022-01-01"],
            },
            {
                name: "Hi-Vis Jacket",
                createdAt: ["2022-01-01", "2022-01-01", "2022-01-01", "2022-01-01"],
            },
            {
                name: "Face Shield",
                createdAt: ["2022-01-01", "2022-01-01", "2022-01-01", "2022-01-01"],
            },
            {
                name: "Welding Helmet",
                createdAt: ["2022-01-01", "2022-01-01", "2022-01-01", "2022-01-01"],
            },
        ],
    },

    // ...
];
