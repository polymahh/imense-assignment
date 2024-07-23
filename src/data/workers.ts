export type Violation = {
    name: string;
    img: string;
    comment: string;
    date: string;
    time: string;
    number: string;
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
        image: "/images/safety-gloves.png",
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
        image: "/images/hi-vis_jacket.png",
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
        image: "/images/profile2.png",
        contractor: "biowanze",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "protective Gloves",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "protective Gloves",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-04",
                time: "10:34",
                number: "#12",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "coverall",
                date: "2024-07-06",
                time: "10:34",
                number: "#11",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-08",
                time: "10:34",
                number: "#12",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-10",
                time: "10:34",
                number: "#13",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-12",
                time: "10:34",
                number: "#14",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    {
        name: "worker2",
        role: "maneger",
        image: "/images/profile3.webp",
        contractor: "biowanze",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "safety glasses",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety glasses",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },

            {
                name: "safety shoes",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-04",
                time: "10:34",
                number: "#12",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Hi-Vis Jacket",
                date: "2024-07-08",
                time: "10:34",
                number: "#13",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-10",
                time: "10:34",
                number: "#14",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-12",
                time: "10:34",
                number: "#15",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-14",
                time: "10:34",
                number: "#16",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    {
        name: "worker3",
        role: "maneger",
        image: "",
        contractor: "biowanze",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "ear protection",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    // contractor 2 ------------------------------------------------
    {
        name: "worker1",
        role: "maneger",
        image: "/images/profile2.png",
        contractor: "contractor2",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "protective Gloves",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "protective Gloves",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-04",
                time: "10:34",
                number: "#12",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "coverall",
                date: "2024-07-06",
                time: "10:34",
                number: "#11",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-08",
                time: "10:34",
                number: "#12",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-10",
                time: "10:34",
                number: "#13",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-12",
                time: "10:34",
                number: "#14",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    {
        name: "worker2",
        role: "maneger",
        image: "/images/profile3.webp",
        contractor: "contractor2",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "safety glasses",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety glasses",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },

            {
                name: "safety shoes",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-04",
                time: "10:34",
                number: "#12",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Hi-Vis Jacket",
                date: "2024-07-08",
                time: "10:34",
                number: "#13",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-10",
                time: "10:34",
                number: "#14",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-12",
                time: "10:34",
                number: "#15",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-14",
                time: "10:34",
                number: "#16",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    {
        name: "worker3",
        role: "maneger",
        image: "",
        contractor: "contractor2",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "ear protection",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    // contractor 3
    {
        name: "worker1",
        role: "maneger",
        image: "/images/profile2.png",
        contractor: "contractor3",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "protective Gloves",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "protective Gloves",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-04",
                time: "10:34",
                number: "#12",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "coverall",
                date: "2024-07-06",
                time: "10:34",
                number: "#11",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-08",
                time: "10:34",
                number: "#12",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-10",
                time: "10:34",
                number: "#13",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-12",
                time: "10:34",
                number: "#14",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    {
        name: "worker2",
        role: "maneger",
        image: "/images/profile3.webp",
        contractor: "contractor3",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "safety glasses",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety glasses",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },

            {
                name: "safety shoes",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-04",
                time: "10:34",
                number: "#12",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Hi-Vis Jacket",
                date: "2024-07-08",
                time: "10:34",
                number: "#13",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-10",
                time: "10:34",
                number: "#14",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-12",
                time: "10:34",
                number: "#15",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-14",
                time: "10:34",
                number: "#16",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    {
        name: "worker3",
        role: "maneger",
        image: "",
        contractor: "contractor3",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "ear protection",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    {
        name: "worker1",
        role: "maneger",
        image: "/images/profile2.png",
        contractor: "biowanze",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "protective Gloves",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "protective Gloves",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-04",
                time: "10:34",
                number: "#12",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "coverall",
                date: "2024-07-06",
                time: "10:34",
                number: "#11",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-08",
                time: "10:34",
                number: "#12",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-10",
                time: "10:34",
                number: "#13",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-12",
                time: "10:34",
                number: "#14",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    {
        name: "worker2",
        role: "maneger",
        image: "/images/profile3.webp",
        contractor: "biowanze",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "safety glasses",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety glasses",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },

            {
                name: "safety shoes",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-04",
                time: "10:34",
                number: "#12",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Hi-Vis Jacket",
                date: "2024-07-08",
                time: "10:34",
                number: "#13",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-10",
                time: "10:34",
                number: "#14",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-12",
                time: "10:34",
                number: "#15",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-14",
                time: "10:34",
                number: "#16",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    {
        name: "worker3",
        role: "maneger",
        image: "",
        contractor: "biowanze",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "ear protection",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    {
        name: "worker1",
        role: "maneger",
        image: "/images/profile2.png",
        contractor: "biowanze",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "protective Gloves",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "protective Gloves",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-04",
                time: "10:34",
                number: "#12",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "coverall",
                date: "2024-07-06",
                time: "10:34",
                number: "#11",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-08",
                time: "10:34",
                number: "#12",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-10",
                time: "10:34",
                number: "#13",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-12",
                time: "10:34",
                number: "#14",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    {
        name: "worker2",
        role: "maneger",
        image: "/images/profile3.webp",
        contractor: "biowanze",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "safety glasses",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety glasses",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },

            {
                name: "safety shoes",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-04",
                time: "10:34",
                number: "#12",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Hi-Vis Jacket",
                date: "2024-07-08",
                time: "10:34",
                number: "#13",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-10",
                time: "10:34",
                number: "#14",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-12",
                time: "10:34",
                number: "#15",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-14",
                time: "10:34",
                number: "#16",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    {
        name: "worker3",
        role: "maneger",
        image: "",
        contractor: "biowanze",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "ear protection",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    // contractor 2 ------------------------------------------------
    {
        name: "worker1",
        role: "maneger",
        image: "/images/profile2.png",
        contractor: "contractor2",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "protective Gloves",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "protective Gloves",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-04",
                time: "10:34",
                number: "#12",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "coverall",
                date: "2024-07-06",
                time: "10:34",
                number: "#11",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-08",
                time: "10:34",
                number: "#12",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-10",
                time: "10:34",
                number: "#13",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-12",
                time: "10:34",
                number: "#14",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    {
        name: "worker2",
        role: "maneger",
        image: "/images/profile3.webp",
        contractor: "contractor2",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "safety glasses",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety glasses",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },

            {
                name: "safety shoes",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-04",
                time: "10:34",
                number: "#12",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Hi-Vis Jacket",
                date: "2024-07-08",
                time: "10:34",
                number: "#13",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-10",
                time: "10:34",
                number: "#14",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-12",
                time: "10:34",
                number: "#15",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-14",
                time: "10:34",
                number: "#16",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    {
        name: "worker3",
        role: "maneger",
        image: "",
        contractor: "contractor2",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "ear protection",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    // contractor 3
    {
        name: "worker1",
        role: "maneger",
        image: "/images/profile2.png",
        contractor: "contractor3",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "protective Gloves",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "protective Gloves",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-04",
                time: "10:34",
                number: "#12",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "coverall",
                date: "2024-07-06",
                time: "10:34",
                number: "#11",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-08",
                time: "10:34",
                number: "#12",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-10",
                time: "10:34",
                number: "#13",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-12",
                time: "10:34",
                number: "#14",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    {
        name: "worker2",
        role: "maneger",
        image: "/images/profile3.webp",
        contractor: "contractor3",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "safety glasses",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety glasses",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },

            {
                name: "safety shoes",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-04",
                time: "10:34",
                number: "#12",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Hi-Vis Jacket",
                date: "2024-07-08",
                time: "10:34",
                number: "#13",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-10",
                time: "10:34",
                number: "#14",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-12",
                time: "10:34",
                number: "#15",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-14",
                time: "10:34",
                number: "#16",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    {
        name: "worker3",
        role: "maneger",
        image: "",
        contractor: "contractor3",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "ear protection",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    {
        name: "worker1",
        role: "maneger",
        image: "/images/profile2.png",
        contractor: "biowanze",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "protective Gloves",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "protective Gloves",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-04",
                time: "10:34",
                number: "#12",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "coverall",
                date: "2024-07-06",
                time: "10:34",
                number: "#11",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-08",
                time: "10:34",
                number: "#12",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-10",
                time: "10:34",
                number: "#13",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-12",
                time: "10:34",
                number: "#14",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    {
        name: "worker2",
        role: "maneger",
        image: "/images/profile3.webp",
        contractor: "biowanze",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "safety glasses",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety glasses",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },

            {
                name: "safety shoes",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-04",
                time: "10:34",
                number: "#12",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Hi-Vis Jacket",
                date: "2024-07-08",
                time: "10:34",
                number: "#13",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-10",
                time: "10:34",
                number: "#14",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-12",
                time: "10:34",
                number: "#15",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-14",
                time: "10:34",
                number: "#16",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    {
        name: "worker3",
        role: "maneger",
        image: "",
        contractor: "biowanze",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "ear protection",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    {
        name: "worker1",
        role: "maneger",
        image: "/images/profile2.png",
        contractor: "biowanze",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "protective Gloves",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "protective Gloves",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-04",
                time: "10:34",
                number: "#12",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "coverall",
                date: "2024-07-06",
                time: "10:34",
                number: "#11",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-08",
                time: "10:34",
                number: "#12",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-10",
                time: "10:34",
                number: "#13",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-12",
                time: "10:34",
                number: "#14",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    {
        name: "worker2",
        role: "maneger",
        image: "/images/profile3.webp",
        contractor: "biowanze",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "safety glasses",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety glasses",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },

            {
                name: "safety shoes",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-04",
                time: "10:34",
                number: "#12",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Hi-Vis Jacket",
                date: "2024-07-08",
                time: "10:34",
                number: "#13",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-10",
                time: "10:34",
                number: "#14",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-12",
                time: "10:34",
                number: "#15",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-14",
                time: "10:34",
                number: "#16",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    {
        name: "worker3",
        role: "maneger",
        image: "",
        contractor: "biowanze",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "ear protection",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    // contractor 2 ------------------------------------------------
    {
        name: "worker1",
        role: "maneger",
        image: "/images/profile2.png",
        contractor: "contractor2",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "protective Gloves",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "protective Gloves",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-04",
                time: "10:34",
                number: "#12",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "coverall",
                date: "2024-07-06",
                time: "10:34",
                number: "#11",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-08",
                time: "10:34",
                number: "#12",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-10",
                time: "10:34",
                number: "#13",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-12",
                time: "10:34",
                number: "#14",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    {
        name: "worker2",
        role: "maneger",
        image: "/images/profile3.webp",
        contractor: "contractor2",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "safety glasses",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety glasses",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },

            {
                name: "safety shoes",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-04",
                time: "10:34",
                number: "#12",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Hi-Vis Jacket",
                date: "2024-07-08",
                time: "10:34",
                number: "#13",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-10",
                time: "10:34",
                number: "#14",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-12",
                time: "10:34",
                number: "#15",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-14",
                time: "10:34",
                number: "#16",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    {
        name: "worker3",
        role: "maneger",
        image: "",
        contractor: "contractor2",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "ear protection",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    // contractor 3
    {
        name: "worker1",
        role: "maneger",
        image: "/images/profile2.png",
        contractor: "contractor3",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "protective Gloves",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "protective Gloves",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-04",
                time: "10:34",
                number: "#12",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "coverall",
                date: "2024-07-06",
                time: "10:34",
                number: "#11",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-08",
                time: "10:34",
                number: "#12",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-10",
                time: "10:34",
                number: "#13",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-12",
                time: "10:34",
                number: "#14",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    {
        name: "worker2",
        role: "maneger",
        image: "/images/profile3.webp",
        contractor: "contractor3",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "safety glasses",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety glasses",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },

            {
                name: "safety shoes",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-04",
                time: "10:34",
                number: "#12",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Hi-Vis Jacket",
                date: "2024-07-08",
                time: "10:34",
                number: "#13",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-10",
                time: "10:34",
                number: "#14",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-12",
                time: "10:34",
                number: "#15",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-14",
                time: "10:34",
                number: "#16",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    {
        name: "worker3",
        role: "maneger",
        image: "",
        contractor: "contractor3",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "ear protection",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    {
        name: "worker1",
        role: "maneger",
        image: "/images/profile2.png",
        contractor: "biowanze",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "protective Gloves",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "protective Gloves",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "mask protection",
                date: "2024-07-04",
                time: "10:34",
                number: "#12",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "coverall",
                date: "2024-07-06",
                time: "10:34",
                number: "#11",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-08",
                time: "10:34",
                number: "#12",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-10",
                time: "10:34",
                number: "#13",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Face Shield",
                date: "2024-07-12",
                time: "10:34",
                number: "#14",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    {
        name: "worker2",
        role: "maneger",
        image: "/images/profile3.webp",
        contractor: "biowanze",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "safety glasses",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety glasses",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },

            {
                name: "safety shoes",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "safety shoes",
                date: "2024-07-04",
                time: "10:34",
                number: "#12",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Hi-Vis Jacket",
                date: "2024-07-08",
                time: "10:34",
                number: "#13",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-10",
                time: "10:34",
                number: "#14",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-12",
                time: "10:34",
                number: "#15",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "Welding Helmet",
                date: "2024-07-14",
                time: "10:34",
                number: "#16",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
    {
        name: "worker3",
        role: "maneger",
        image: "",
        contractor: "biowanze",
        contractor_img: "/images/profile.svg",
        violations: [
            {
                name: "ear protection",
                date: "2024-07-04",
                time: "10:34",
                number: "#01",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-06",
                time: "10:34",
                number: "#02",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-08",
                time: "10:34",
                number: "#03",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-10",
                time: "10:34",
                number: "#04",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-12",
                time: "10:34",
                number: "#05",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-14",
                time: "10:34",
                number: "#06",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-16",
                time: "10:34",
                number: "#07",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-18",
                time: "10:34",
                number: "#08",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-20",
                time: "10:34",
                number: "#09",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-22",
                time: "10:34",
                number: "#10",
                img: "/images/violation2.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
            {
                name: "ear protection",
                date: "2024-07-24",
                time: "10:34",
                number: "#11",
                img: "/images/violation1.png",
                comment:
                    "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
            },
        ],
    },
];
