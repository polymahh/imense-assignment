import { LucideProps } from "lucide-react";

export const Icons = {
    profile: (props: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M18 20a6 6 0 0 0-12 0" />
            <circle cx="12" cy="10" r="4" />
            <circle cx="12" cy="12" r="10" />
        </svg>
    ),
    home: (props: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="currentColor"
            {...props}
        >
            <path
                d="M17.7952 9.14212L10.1235 1.02349L9.60926 0.479024C9.49209 0.355787 9.33364 0.286621 9.16849 0.286621C9.00334 0.286621 8.84489 0.355787 8.72773 0.479024L0.5418 9.14212C0.421743 9.26874 0.32686 9.41955 0.262752 9.58563C0.198644 9.75172 0.166609 9.92972 0.168539 10.1091C0.176481 10.8491 0.758212 11.4398 1.45708 11.4398H2.30089V18.2866H16.0361V11.4398H16.8978C17.2373 11.4398 17.5569 11.299 17.7972 11.0446C17.9155 10.9198 18.0092 10.7713 18.0729 10.6078C18.1366 10.4444 18.1691 10.2692 18.1684 10.0923C18.1684 9.73494 18.0354 9.39649 17.7952 9.14212ZM10.2803 16.773H8.05665V12.4846H10.2803V16.773ZM14.6066 9.92624V16.773H11.551V11.9801C11.551 11.5155 11.1956 11.1392 10.7568 11.1392H7.58015C7.14137 11.1392 6.78598 11.5155 6.78598 11.9801V16.773H3.7304V9.92624H1.82439L9.17048 2.15446L9.62911 2.64007L16.5146 9.92624H14.6066Z"
                fill="currentColor"
            />
        </svg>
    ),
    violations: (props: LucideProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
            <mask id="mask0_1001_653" maskUnits="userSpaceOnUse" x="3" y="3" width="13" height="13">
                <rect x="3.80933" y="3.80957" width="11.4286" height="11.4286" fill="currentColor" />
            </mask>
            <g mask="url(#mask0_1001_653)">
                <path
                    d="M9.89311 15.2381C10.4725 15.2381 11.0023 15.1289 11.4826 14.9105C11.9626 14.6924 12.3752 14.4008 12.7203 14.0358C13.0657 13.6707 13.3336 13.252 13.5241 12.7796C13.7145 12.3075 13.8098 11.8175 13.8098 11.3096V8.21433C13.8098 8.04767 13.7523 7.90687 13.6374 7.79195C13.5222 7.67671 13.3812 7.61909 13.2145 7.61909C13.0479 7.61909 12.9071 7.67671 12.7922 7.79195C12.6769 7.90687 12.6193 8.04767 12.6193 8.21433V10.9524H12.3812C11.9844 10.9524 11.6471 11.0913 11.3693 11.3691C11.0915 11.6469 10.9526 11.9842 10.9526 12.381H10.4764C10.4764 11.9048 10.6312 11.4862 10.9407 11.1253C11.2503 10.764 11.651 10.5516 12.1431 10.4881V5.35719C12.1431 5.19052 12.0857 5.04957 11.9707 4.93433C11.8555 4.81941 11.7145 4.76195 11.5479 4.76195C11.3812 4.76195 11.2404 4.81941 11.1255 4.93433C11.0103 5.04957 10.9526 5.19052 10.9526 5.35719V9.04767H10.4764V4.40481C10.4764 4.23814 10.4188 4.09719 10.3036 3.98195C10.1887 3.86703 10.0479 3.80957 9.88121 3.80957C9.71454 3.80957 9.57375 3.86703 9.45883 3.98195C9.34359 4.09719 9.28597 4.23814 9.28597 4.40481V9.04767H8.80978V5.11909C8.80978 4.95243 8.75216 4.81148 8.63692 4.69624C8.522 4.58132 8.38121 4.52386 8.21454 4.52386C8.04787 4.52386 7.90708 4.58132 7.79216 4.69624C7.67692 4.81148 7.6193 4.95243 7.6193 5.11909V9.52386H7.14311V6.54767C7.14311 6.381 7.08565 6.24005 6.97073 6.12481C6.85549 6.00989 6.71454 5.95243 6.54787 5.95243C6.38121 5.95243 6.24041 6.00989 6.12549 6.12481C6.01026 6.24005 5.95264 6.381 5.95264 6.54767V11.3096C5.95264 11.8175 6.04994 12.3096 6.24454 12.7858C6.43883 13.262 6.71057 13.6807 7.05978 14.042C7.40899 14.4029 7.82375 14.6924 8.30407 14.9105C8.78407 15.1289 9.31375 15.2381 9.89311 15.2381Z"
                    fill="currentColor"
                />
            </g>
            <circle cx="10" cy="10" r="9.5" stroke="currentColor" />
        </svg>
    ),
    ppes: (props: LucideProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
            <path
                d="M10.2954 1.54524e-06C10.2332 7.05641e-05 10.1732 0.00807672 10.1123 0.0130116L8.3264 2.96081C10.4447 3.14443 11.4936 4.11705 11.8743 5.07486L11.2971 5.30421C11.0311 4.63507 10.3667 3.89539 8.80149 3.64175C9.46276 4.11498 9.959 4.66247 10.2139 5.32926L9.63365 5.55105C9.3623 4.84116 8.69741 4.23631 7.71026 3.69306C7.36303 3.83524 5.58414 4.56177 4.96832 4.77035C3.68646 5.20444 2.98827 6.08488 1.65603 7.63118L1.65151 7.63635L1.64685 7.64136C1.43075 7.87092 1.33992 8.07801 1.31908 8.22906C1.29824 8.38003 1.33578 8.47397 1.40218 8.54413C1.53497 8.68444 1.89145 8.77327 2.41917 8.41534L2.42176 8.41358L5.01138 6.73048L5.38595 7.224L3.61027 8.78763L0.362996 11.7886C-0.0486672 12.1691 -0.042007 12.5389 0.0541364 12.6666C0.102243 12.7304 0.174885 12.7794 0.350331 12.7715C0.525777 12.7636 0.79709 12.6785 1.13649 12.446C2.16256 11.7433 3.11854 11.041 3.95764 10.1939L3.95581 10.1862L3.96847 10.183C3.97441 10.1771 3.98045 10.1712 3.98635 10.1653L3.99843 10.1754C4.11616 10.1444 4.2323 10.1077 4.34642 10.0654C4.55393 9.98786 4.77579 9.84651 4.80212 9.81079C4.8133 9.79561 4.87714 9.57982 4.88805 9.39137C4.89895 9.20291 4.88825 9.04268 4.88825 9.04268L5.50794 9.00017C5.50794 9.00017 5.52164 9.1948 5.50822 9.42722C5.49476 9.65961 5.48561 9.93058 5.30195 10.1795C5.10318 10.449 4.81247 10.5544 4.56373 10.6473C4.49168 10.674 4.41888 10.6987 4.34542 10.7213C3.50436 11.8492 2.43591 12.7082 1.44801 13.6031C1.10623 13.9127 0.964772 14.179 0.933299 14.3426C0.901792 14.5063 0.937923 14.5637 1.02254 14.6249C1.19171 14.7473 1.7529 14.7671 2.33383 14.2319C3.47313 13.1822 4.58461 12.1394 5.43409 10.8941L5.46211 10.9108C5.51194 10.8892 5.60736 10.8468 5.73691 10.7761C5.90842 10.6824 6.09453 10.5339 6.11941 10.4963C6.14305 10.4607 6.20683 10.2347 6.22598 10.0431C6.24513 9.85152 6.24365 9.69094 6.24365 9.69094L6.86475 9.68428C6.86475 9.68428 6.86696 9.87557 6.84404 10.105C6.82109 10.3343 6.7969 10.5986 6.63712 10.8396C6.4761 11.0825 6.23933 11.2096 6.03449 11.3213C5.97202 11.3554 5.9145 11.3844 5.86114 11.4103C5.29267 12.4425 4.47549 13.337 3.60526 14.273C3.41926 14.4731 3.38506 14.6252 3.39607 14.7324C3.40711 14.8397 3.46653 14.9315 3.58318 15.0039C3.81646 15.1489 4.26077 15.1718 4.66791 14.7516C5.13745 14.267 5.56274 13.7605 5.93317 13.2229C6.25403 12.6376 6.58022 12.0466 6.89122 11.4562L6.91137 11.4656C6.94167 11.4557 7.0463 11.4209 7.18286 11.3605C7.34081 11.2907 7.51422 11.1702 7.52978 11.1502C7.54486 11.1308 7.61847 10.9341 7.64701 10.7648C7.66434 10.6613 7.67655 10.557 7.68359 10.4523L8.3039 10.4864C8.3039 10.4864 8.29444 10.6607 8.25955 10.868C8.22463 11.0753 8.18894 11.3143 8.02026 11.5313C7.8511 11.749 7.6272 11.8432 7.43408 11.9286C7.40444 11.9417 7.37746 11.9525 7.34954 11.9639C7.10324 12.523 6.80518 13.0478 6.4653 13.5446C6.34203 13.7696 6.21601 13.9977 6.09785 14.2176C5.98907 14.42 5.98231 14.5664 6.00684 14.665C6.03141 14.7637 6.08684 14.8278 6.17007 14.87C6.33658 14.9545 6.63188 14.9452 6.89926 14.5728C8.88148 11.8123 11.2654 9.04175 12.3209 5.4283C12.3983 5.1633 12.5673 5.03279 12.7693 4.84527C12.9714 4.65778 13.2174 4.45645 13.4585 4.25667C13.6997 4.05686 13.9361 3.85843 14.1083 3.69106C14.2226 3.57994 14.2953 3.47113 14.3312 3.42144C14.2468 3.09267 14.1091 2.76348 13.9297 2.44648C13.5471 2.69215 13.1313 2.91809 12.798 3.10068C13.0111 2.58642 13.1405 2.04431 13.2259 1.4875C13.0469 1.29371 12.8538 1.11342 12.6482 0.94808C11.9153 0.35959 11.0596 -0.000861191 10.2954 1.54524e-06ZM4.55379 0.137832C4.52637 0.137417 4.49894 0.137532 4.47152 0.138177C4.02448 0.148599 3.47751 0.317972 2.95038 0.603123C2.66802 0.755862 2.39377 0.942351 2.14082 1.15027C2.22426 1.81416 2.35919 2.4609 2.61101 3.06865C2.18775 2.83675 1.63167 2.53486 1.17935 2.21144C0.99973 2.49434 0.87553 2.7817 0.827252 3.05523C0.847957 3.15109 0.949242 3.35525 1.13594 3.58198C1.33948 3.82914 1.62114 4.10531 1.91061 4.3728C2.20004 4.64031 2.49692 4.89976 2.73928 5.12838C2.80823 5.1934 2.87221 5.25168 2.9316 5.30814C3.47792 4.80344 4.04132 4.42843 4.76909 4.18199C5.25257 4.01825 6.70977 3.42869 7.26067 3.20472L5.45997 0.557605C5.25526 0.271142 4.9582 0.144044 4.55379 0.137832ZM12.8308 5.88673C12.6727 6.39053 12.4908 6.87753 12.2895 7.34982L13.2997 7.91012L13.3023 7.91167C13.8538 8.23185 14.2033 8.11828 14.3259 7.96903C14.3872 7.89438 14.4181 7.79814 14.3868 7.64895C14.3554 7.49973 14.2504 7.29947 14.0188 7.08558L14.0087 7.07623L13.9995 7.06605C13.5751 6.59831 13.1896 6.21125 12.8308 5.88673ZM11.9056 8.18713C11.4853 9.04596 11.0065 9.85704 10.499 10.6337C11.4286 11.7989 12.5974 12.7511 13.794 13.708C14.411 14.2013 14.9693 14.1424 15.1296 14.0085C15.2096 13.9415 15.2417 13.8817 15.1989 13.7206C15.156 13.5596 14.9963 13.3038 14.6337 13.0188C13.5372 12.157 12.3552 11.3408 11.4156 10.1967L11.8614 9.76683C12.7653 10.5656 13.7788 11.2064 14.8636 11.8429C15.2184 12.0511 15.495 12.117 15.6706 12.1126C15.8461 12.1083 15.9152 12.0543 15.9587 11.9873C16.0457 11.8532 16.0265 11.4838 15.5893 11.1331L12.1403 8.3663L11.9056 8.18713ZM10.1191 11.2023C9.92913 11.48 9.73604 11.7556 9.53982 12.0289C9.73697 12.3379 9.93564 12.6463 10.1328 12.9529C10.54 13.4633 10.9996 13.939 11.5019 14.3896C11.9374 14.7803 12.379 14.7263 12.6016 14.5654C12.713 14.485 12.7659 14.3893 12.7693 14.2816C12.7728 14.1738 12.7281 14.0245 12.5285 13.8379C11.6148 12.9834 10.7545 12.1651 10.1191 11.2023ZM9.11632 12.6114C8.90954 12.8932 8.70181 13.1743 8.49315 13.4548C8.75355 13.7596 9.01141 14.0634 9.2636 14.3672C9.55631 14.72 9.85151 14.7085 10.0117 14.6126C10.0918 14.5647 10.1426 14.497 10.1602 14.3968C10.1778 14.2967 10.1608 14.1512 10.0382 13.9568C9.90486 13.7455 9.76306 13.5266 9.62426 13.3107C9.4452 13.0848 9.27573 12.8515 9.11632 12.6114Z"
                fill="currentColor"
            />
        </svg>
    ),
    contractors: (props: LucideProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none" {...props}>
            <path
                d="M14.4717 3H11.4717V1.5C11.4717 0.6675 10.8042 0 9.97168 0H6.97168C6.13918 0 5.47168 0.6675 5.47168 1.5V3H2.47168C1.63918 3 0.97918 3.6675 0.97918 4.5L0.97168 12.75C0.97168 13.5825 1.63918 14.25 2.47168 14.25H14.4717C15.3042 14.25 15.9717 13.5825 15.9717 12.75V4.5C15.9717 3.6675 15.3042 3 14.4717 3ZM9.97168 3H6.97168V1.5H9.97168V3Z"
                fill="currentColor"
            />
        </svg>
    ),
    workers: (props: LucideProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none" {...props}>
            <path
                d="M7.97168 8C10.1811 8 11.9717 6.20937 11.9717 4C11.9717 1.79063 10.1811 0 7.97168 0C5.7623 0 3.97168 1.79063 3.97168 4C3.97168 6.20937 5.7623 8 7.97168 8ZM10.7717 9H10.2498C9.55605 9.31875 8.78418 9.5 7.97168 9.5C7.15918 9.5 6.39043 9.31875 5.69355 9H5.17168C2.85293 9 0.97168 10.8813 0.97168 13.2V14.5C0.97168 15.3281 1.64355 16 2.47168 16H13.4717C14.2998 16 14.9717 15.3281 14.9717 14.5V13.2C14.9717 10.8813 13.0904 9 10.7717 9Z"
                fill="currentColor"
            />
        </svg>
    ),
    fontsize: (props: LucideProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="30" viewBox="0 0 21 30" fill="none" {...props}>
            <path
                d="M8.46387 18.0205H3.50684L2.46973 21H0.158203L4.99219 8.20312H6.9873L11.8301 21H9.50977L8.46387 18.0205ZM4.13086 16.2275H7.83984L5.98535 10.9189L4.13086 16.2275Z"
                fill="currentColor"
            />
            <path
                d="M17.5 9V15M15 11.5L17.5 9L15 11.5ZM17.5 9L20 11.5L17.5 9Z"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M17.5 21V15M20 18.5L17.5 21L20 18.5ZM17.5 21L15 18.5L17.5 21Z"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    dark: (props: LucideProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none" {...props}>
            <path
                d="M5.6001 0.79253C5.6912 0.903237 5.74702 1.03872 5.76033 1.18148C5.77364 1.32423 5.74383 1.4677 5.67476 1.59334C5.13516 2.58407 4.85336 3.69459 4.85528 4.82273C4.85528 8.57573 7.9148 11.6147 11.6855 11.6147C12.1774 11.6147 12.6562 11.5634 13.1164 11.4654C13.2574 11.4348 13.4043 11.4465 13.5388 11.499C13.6732 11.5514 13.7893 11.6423 13.8724 11.7603C13.9601 11.883 14.0048 12.0312 13.9996 12.182C13.9944 12.3327 13.9395 12.4775 13.8434 12.5938C13.1114 13.493 12.1879 14.2175 11.1403 14.7145C10.0927 15.2115 8.94738 15.4685 7.78787 15.4666C3.48513 15.4666 0 12.0002 0 7.72918C0 4.51473 1.9731 1.75761 4.78248 0.589059C4.92243 0.529915 5.07778 0.517776 5.22522 0.554466C5.37265 0.591155 5.5042 0.674693 5.6001 0.79253ZM4.53421 1.75668C3.45396 2.33613 2.55088 3.19744 1.92096 4.24906C1.29103 5.30068 0.957804 6.50333 0.956683 7.72918C0.956683 11.4812 4.01714 14.5202 7.78787 14.5202C8.69083 14.5218 9.58514 14.3443 10.419 13.9979C11.2529 13.6515 12.0098 13.1432 12.646 12.5023C12.3314 12.5415 12.0113 12.5611 11.6855 12.5611C7.38279 12.5611 3.8986 9.09467 3.8986 4.82367C3.8986 3.73445 4.12447 2.6975 4.53421 1.75668Z"
                fill="currentColor"
            />
        </svg>
    ),
    notifications: (props: LucideProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none" {...props}>
            <path
                d="M13.075 13.5156V13.5363L13.0896 13.551L14.95 15.4113V16.2781H0.05V15.4113L1.91036 13.551L1.925 13.5363V13.5156V8.82812C1.925 5.95816 3.45165 3.58271 6.10532 2.95177L6.14375 2.94263V2.90312V2.26562C6.14375 1.51511 6.74949 0.909375 7.5 0.909375C8.25051 0.909375 8.85625 1.51511 8.85625 2.26562V2.90312V2.94266L8.89472 2.95178C11.5576 3.58271 13.075 5.96739 13.075 8.82812V13.5156ZM11.25 14.5031H11.3V14.4531V8.82812C11.3 7.65582 10.9431 6.58911 10.2886 5.8146C9.63337 5.03929 8.68189 4.55938 7.5 4.55938C6.31811 4.55938 5.36663 5.03929 4.71142 5.8146C4.05689 6.58911 3.7 7.65582 3.7 8.82812V14.4531V14.5031H3.75H11.25ZM9.32432 17.3156C9.29759 18.2964 8.48692 19.0906 7.5 19.0906C6.51308 19.0906 5.70241 18.2964 5.67568 17.3156H9.32432Z"
                fill="currentColor"
                stroke="white"
                strokeWidth="0.1"
            />
        </svg>
    ),
    english: (props: LucideProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none" {...props}>
            <path
                d="M6.53145 18.4016V14.3047L3.47363 16.5609C4.33457 17.3625 5.37363 17.9859 6.53145 18.4016Z"
                fill="#2A5F9E"
            />
            <path
                d="M12.4688 18.4015C13.6266 17.9858 14.6656 17.3624 15.5266 16.5608L12.4688 14.2749V18.4015Z"
                fill="#2A5F9E"
            />
            <path
                d="M1.09863 12.9688C1.1877 13.2656 1.30645 13.5328 1.45488 13.8297L2.6127 12.9688H1.09863Z"
                fill="#2A5F9E"
            />
            <path
                d="M16.3877 12.9688L17.5455 13.8297C17.6643 13.5625 17.783 13.2656 17.9018 12.9688H16.3877Z"
                fill="#2A5F9E"
            />
            <path
                d="M6.97666 11.7812H0.771973C0.861035 12.1969 0.979785 12.5828 1.09854 12.9688H2.6126L1.45479 13.8297C1.69229 14.3344 1.95947 14.7797 2.28604 15.225L5.34385 12.9688H6.53135V13.5625L3.05791 16.1156L3.47354 16.5313L6.53135 14.3047V18.4016C6.91728 18.55 7.30322 18.6391 7.71885 18.7281V11.7812H6.97666Z"
                fill="white"
            />
            <path
                d="M18.2281 11.7812H11.2812V18.7281C11.6969 18.6391 12.0828 18.5203 12.4688 18.4016V14.3047L15.5266 16.5313C15.9422 16.1453 16.2984 15.7297 16.6547 15.2844L13.4781 12.9688H15.4969L17.3078 14.3047C17.3969 14.1563 17.4859 13.9781 17.5453 13.8297L16.3875 12.9688H17.9016C18.0203 12.5828 18.1391 12.1969 18.2281 11.7812Z"
                fill="white"
            />
            <path
                d="M2.28613 15.2251C2.52363 15.5517 2.76113 15.8485 3.02832 16.1454L6.53145 13.5923V12.9985H5.34395L2.28613 15.2251Z"
                fill="#ED4C5C"
            />
            <path
                d="M13.5078 12.9688L16.6844 15.2844C16.8031 15.1359 16.8922 14.9875 17.0109 14.8391C17.0406 14.8094 17.0406 14.7797 17.0703 14.7797C17.1594 14.6312 17.2781 14.4531 17.3672 14.3047L15.4969 12.9688H13.5078Z"
                fill="#ED4C5C"
            />
            <path
                d="M12.4688 1.59863V5.69551L15.5266 3.43926C14.6656 2.6377 13.6266 2.01426 12.4688 1.59863Z"
                fill="#2A5F9E"
            />
            <path
                d="M6.53145 1.59863C5.37363 2.01426 4.33457 2.6377 3.47363 3.43926L6.53145 5.72519V1.59863Z"
                fill="#2A5F9E"
            />
            <path
                d="M17.9018 7.03135C17.8127 6.73447 17.6939 6.46729 17.5455 6.17041L16.3877 7.03135H17.9018Z"
                fill="#2A5F9E"
            />
            <path
                d="M2.6127 7.03135L1.45488 6.17041C1.33613 6.46729 1.21738 6.73447 1.09863 7.03135H2.6127Z"
                fill="#2A5F9E"
            />
            <path
                d="M12.0234 8.21885H18.1984C18.1094 7.80322 17.9906 7.41728 17.8719 7.03135H16.3578L17.5156 6.17041C17.2781 5.66572 17.0109 5.22041 16.6844 4.7751L13.6563 7.03135H12.4688V6.4376L15.9422 3.88447L15.5266 3.46885L12.4688 5.69541V1.59854C12.0828 1.4501 11.6969 1.36104 11.2812 1.27197V8.21885H12.0234Z"
                fill="white"
            />
            <path
                d="M0.771973 8.21885H7.71885V1.27197C7.30322 1.36104 6.91728 1.47979 6.53135 1.59854V5.69541L3.47354 3.46885C3.05791 3.85479 2.70166 4.27041 2.34541 4.71572L5.52197 7.03135H3.50322L1.69229 5.69541C1.60322 5.84385 1.51416 6.02197 1.45479 6.17041L2.6126 7.03135H1.09854C0.979785 7.41728 0.861035 7.80322 0.771973 8.21885Z"
                fill="white"
            />
            <path
                d="M16.7141 4.7748C16.4766 4.44824 16.2391 4.15137 15.9719 3.85449L12.4688 6.40762V7.00137H13.6562L16.7141 4.7748Z"
                fill="#ED4C5C"
            />
            <path
                d="M5.49228 7.03145L2.34541 4.71582C2.22666 4.86426 2.1376 5.0127 2.01885 5.16113C1.98916 5.19082 1.98916 5.22051 1.95947 5.22051C1.87041 5.36895 1.75166 5.54707 1.6626 5.69551L3.47353 7.03145H5.49228Z"
                fill="#ED4C5C"
            />
            <path
                d="M18.2281 8.21875H11.2812V1.27187C10.7172 1.15312 10.1234 1.09375 9.5 1.09375C8.87656 1.09375 8.28281 1.15312 7.71875 1.27187V8.21875H0.771875C0.653125 8.78281 0.59375 9.37656 0.59375 10C0.59375 10.6234 0.653125 11.2172 0.771875 11.7812H7.71875V18.7281C8.28281 18.8469 8.87656 18.9062 9.5 18.9062C10.1234 18.9062 10.7172 18.8469 11.2812 18.7281V11.7812H18.2281C18.3469 11.2172 18.4062 10.6234 18.4062 10C18.4062 9.37656 18.3469 8.78281 18.2281 8.21875Z"
                fill="#ED4C5C"
            />
        </svg>
    ),
    french: (props: LucideProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 24 20" fill="none" {...props}>
            <g clip-path="url(#clip0_1001_726)" filter="url(#filter0_d_1001_726)">
                <path
                    d="M4.59375 10C4.59375 14.0938 7.21875 17.5625 10.8438 18.8438V1.15625C7.21875 2.4375 4.59375 5.90625 4.59375 10Z"
                    fill="#428BC1"
                />
                <path
                    d="M23.3438 10C23.3438 5.90625 20.75 2.4375 17.0938 1.15625V18.8438C20.75 17.5625 23.3438 14.0938 23.3438 10Z"
                    fill="#ED4C5C"
                />
                <path
                    d="M10.8438 18.8438C11.8125 19.1875 12.875 19.375 13.9687 19.375C15.0625 19.375 16.125 19.1875 17.0938 18.8438V1.15625C16.125 0.8125 15.0937 0.625 13.9687 0.625C12.8437 0.625 11.8125 0.8125 10.8438 1.15625V18.8438Z"
                    fill="white"
                />
            </g>
        </svg>
    ),
    nederlands: (props: LucideProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
            <g clip-path="url(#clip0_1001_732)">
                <path
                    d="M10 0.625C5.90625 0.625 2.4375 3.21875 1.15625 6.875H18.8438C17.5625 3.21875 14.0938 0.625 10 0.625Z"
                    fill="#ED4C5C"
                />
                <path
                    d="M10 19.375C14.0938 19.375 17.5625 16.7812 18.8438 13.125H1.15625C2.4375 16.7812 5.90625 19.375 10 19.375Z"
                    fill="#428BC1"
                />
                <path
                    d="M1.15625 6.875C0.8125 7.84375 0.625 8.90625 0.625 10C0.625 11.0938 0.8125 12.1562 1.15625 13.125H18.8438C19.1875 12.1562 19.375 11.0938 19.375 10C19.375 8.90625 19.1875 7.84375 18.8438 6.875H1.15625Z"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_1001_732">
                    <rect width="20" height="20" fill="white" />
                </clipPath>
            </defs>
        </svg>
    ),
    espanol: (props: LucideProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
            <g clip-path="url(#clip0_1001_738)">
                <path
                    d="M0.625 10C0.625 11.8438 1.15625 13.5625 2.0625 15H17.9062C18.8125 13.5625 19.3438 11.8438 19.3438 10C19.3438 8.15625 18.8125 6.4375 17.9062 5H2.0625C1.15625 6.4375 0.625 8.15625 0.625 10Z"
                    fill="#FFCE31"
                />
                <path
                    d="M17.9375 5C16.2813 2.375 13.3438 0.625 10 0.625C6.65625 0.625 3.71875 2.375 2.0625 5H17.9375Z"
                    fill="#ED4C5C"
                />
                <path
                    d="M2.0625 15C3.71875 17.625 6.65625 19.375 10 19.375C13.3438 19.375 16.2813 17.625 17.9375 15H2.0625Z"
                    fill="#ED4C5C"
                />
                <path d="M2.875 8.96875H3.875V9.53125H2.875V8.96875Z" fill="#C8B100" />
                <path d="M2.875 13.0938H3.90625V13.625H2.875V13.0938Z" fill="#C8B100" />
                <path
                    d="M2.78125 12.2188C2.6875 12.2812 2.625 12.3438 2.625 12.375C2.625 12.4062 2.65625 12.4375 2.71875 12.4688C2.78125 12.5 2.84375 12.5625 2.8125 12.625C2.875 12.5625 2.90625 12.5 2.90625 12.4375C2.90625 12.3438 2.84375 12.25 2.78125 12.2188Z"
                    fill="#ED4C5C"
                />
                <path d="M3.03125 9.53125H3.75V13.0938H3.03125V9.53125Z" fill="white" />
                <path
                    d="M4.49987 10.8438C4.34362 10.7813 4.06237 10.7188 3.74987 10.7188C3.65612 10.7188 3.53112 10.7188 3.40612 10.75C2.96862 10.8125 2.62487 11 2.65612 11.125L2.49987 10.7813C2.46862 10.625 2.84362 10.4375 3.31237 10.3437C3.46862 10.3125 3.62487 10.3125 3.74987 10.3125C4.06237 10.3125 4.34362 10.3437 4.49987 10.4062V10.8438Z"
                    fill="#ED4C5C"
                />
                <path
                    d="M3.03125 11.3125C2.84375 11.3125 2.6875 11.25 2.6875 11.1563C2.6875 11.0938 2.75 11 2.875 10.9375H3.0625L3.03125 11.3125Z"
                    fill="#ED4C5C"
                />
                <path
                    d="M3.75 11.0312C3.875 11.0625 3.96875 11.0937 4.03125 11.125C4.0625 11.1562 3.9375 11.2813 3.75 11.375V11.0312Z"
                    fill="#ED4C5C"
                />
                <path
                    d="M2.56255 12C2.5313 11.9375 2.75005 11.8125 3.0313 11.7188C3.1563 11.6875 3.25005 11.625 3.4063 11.5625C3.7813 11.4063 4.0938 11.1875 4.0313 11.125L4.0938 11.5C4.12505 11.5625 3.87505 11.75 3.50005 11.9375C3.37505 12 3.1563 12.0938 3.0313 12.125C2.81255 12.1875 2.62505 12.3125 2.62505 12.3438L2.56255 12Z"
                    fill="#ED4C5C"
                />
                <path d="M9.59375 8.96875H10.5938V9.53125H9.59375V8.96875Z" fill="#C8B100" />
                <path d="M9.5625 13.0938H10.5938V13.625H9.5625V13.0938Z" fill="#C8B100" />
                <path
                    d="M10.6875 12.2188C10.7813 12.2813 10.8438 12.3438 10.8438 12.375C10.8438 12.4063 10.8125 12.4375 10.75 12.4688C10.6875 12.5313 10.625 12.625 10.6562 12.6563C10.5937 12.5938 10.5625 12.5313 10.5625 12.4688C10.5625 12.3438 10.625 12.25 10.6875 12.2188Z"
                    fill="#ED4C5C"
                />
                <path d="M9.71875 9.53125H10.4375V13.0938H9.71875V9.53125Z" fill="white" />
                <path
                    d="M8.96875 10.8438C9.125 10.7813 9.40625 10.7188 9.71875 10.7188C9.8125 10.7188 9.9375 10.7188 10.0625 10.75C10.5 10.8125 10.8437 11 10.8125 11.125L10.9687 10.75C11 10.5938 10.625 10.4063 10.1562 10.3125H9.71875C9.40625 10.3125 9.125 10.3437 8.96875 10.4062V10.8438Z"
                    fill="#ED4C5C"
                />
                <path
                    d="M10.4375 11.3125C10.625 11.3125 10.7812 11.25 10.7812 11.1563C10.7812 11.0938 10.7188 11 10.5938 10.9375H10.4062L10.4375 11.3125Z"
                    fill="#ED4C5C"
                />
                <path
                    d="M9.71865 11.0312C9.59365 11.0625 9.4999 11.0937 9.4374 11.125C9.40615 11.1562 9.53115 11.2813 9.71865 11.375V11.0312Z"
                    fill="#ED4C5C"
                />
                <path
                    d="M10.9064 12C10.9377 11.9375 10.7189 11.8125 10.4377 11.7188C10.3127 11.6875 10.2189 11.625 10.0627 11.5625C9.68769 11.4063 9.37519 11.1875 9.43769 11.125L9.37519 11.5C9.34394 11.5625 9.59394 11.75 9.96894 11.9375C10.0939 12 10.3127 12.0938 10.4377 12.125C10.6564 12.1875 10.8439 12.3438 10.8127 12.375L10.9064 12Z"
                    fill="#ED4C5C"
                />
                <path
                    d="M6.71875 6.96875C7.3125 6.96875 8.53125 7.09375 8.96875 7.53125C8.5 8.65625 7.75 8.1875 6.71875 8.1875C5.71875 8.1875 4.9375 8.65625 4.46875 7.53125C4.90625 7.09375 6.09375 6.96875 6.71875 6.96875Z"
                    fill="#ED4C5C"
                />
                <path
                    d="M8.25 8.21875C7.875 8 7.3125 7.96875 6.71875 7.96875C6.125 7.96875 5.5625 8.03125 5.1875 8.21875L5.3125 8.75C5.65625 8.84375 6.15625 8.90625 6.71875 8.90625C7.28125 8.90625 7.75 8.84375 8.125 8.75L8.25 8.21875Z"
                    fill="#C8B100"
                />
                <path
                    d="M8.78125 6.875C8.65625 6.78125 8.40625 6.6875 8.1875 6.6875C8.09375 6.6875 8 6.6875 7.90625 6.71875C7.90625 6.71875 7.71875 6.46875 7.28125 6.46875C7.125 6.46875 7 6.5 6.875 6.5625V6.53125C6.84375 6.46875 6.78125 6.40625 6.71875 6.40625C6.65625 6.40625 6.5625 6.5 6.5625 6.5625V6.59375C6.4375 6.53125 6.3125 6.5 6.15625 6.5C5.71875 6.5 5.53125 6.78125 5.53125 6.75C5.4375 6.71875 5.34375 6.71875 5.25 6.71875C3.8125 6.71875 4.53125 7.6875 4.53125 7.6875L4.6875 7.5C4.34375 7.0625 4.65625 6.8125 5.28125 6.8125C5.375 6.8125 5.4375 6.8125 5.5 6.84375C5.28125 7.15625 5.6875 7.4375 5.6875 7.4375L5.78125 7.28125C5.5625 7.125 5.53125 6.59375 6.15625 6.59375C6.3125 6.59375 6.4375 6.625 6.5625 6.71875C6.5625 6.75 6.53125 7.1875 6.5 7.25L6.75 7.46875L7 7.25C6.96875 7.15625 6.9375 6.75 6.9375 6.71875C7.03125 6.65625 7.1875 6.59375 7.34375 6.59375C8 6.59375 8 7.125 7.71875 7.28125L7.8125 7.4375C7.8125 7.4375 8.15625 7.15625 8 6.84375C8.0625 6.84375 8.15625 6.8125 8.21875 6.8125C8.96875 6.8125 9 7.375 8.8125 7.5L8.9375 7.6875C8.875 7.6875 9.21875 7.25 8.78125 6.875Z"
                    fill="#C8B100"
                />
                <path
                    d="M6.53125 6.28125C6.53125 6.1875 6.625 6.09375 6.71875 6.09375C6.84375 6.09375 6.90625 6.1875 6.90625 6.28125C6.90625 6.375 6.8125 6.46875 6.71875 6.46875C6.625 6.46875 6.53125 6.375 6.53125 6.28125Z"
                    fill="#005BBF"
                />
                <path
                    d="M6.71875 8.84375C6.21875 8.84375 5.78125 8.78125 5.4375 8.6875C5.78125 8.59375 6.21875 8.53125 6.71875 8.53125C7.21875 8.53125 7.65625 8.59375 8 8.6875C7.6875 8.78125 7.21875 8.84375 6.71875 8.84375Z"
                    fill="#ED4C5C"
                />
                <path
                    d="M6.75 14.25C6.15625 14.25 5.59375 14.0938 5.09375 13.875C4.71875 13.6875 4.5 13.3438 4.5 12.9375V11.4375H9V12.9375C9 13.3438 8.75 13.7188 8.40625 13.875C7.90625 14.125 7.34375 14.25 6.75 14.25Z"
                    fill="white"
                />
                <path d="M6.71875 8.9375H8.96875V11.4375H6.71875V8.9375Z" fill="white" />
                <path
                    d="M6.75 12.9375C6.75 13.5313 6.25 14 5.625 14C5 14 4.5 13.5313 4.5 12.9375V11.4375H6.75V12.9375Z"
                    fill="#ED4C5C"
                />
                <path
                    d="M4.96875 13.8125C5.03125 13.8437 5.125 13.9062 5.25 13.9375V11.375H5L4.96875 13.8125Z"
                    fill="#C8B100"
                />
                <path
                    d="M4.46875 12.9062C4.46875 13.2187 4.59375 13.4687 4.71875 13.5937V11.375H4.46875V12.9062Z"
                    fill="#C8B100"
                />
                <path d="M5.46875 14H5.71875V11.375H5.46875V14Z" fill="#C7B500" />
                <path
                    d="M5.96875 13.9375C6.0625 13.9062 6.1875 13.8437 6.25 13.8125V11.375H6L5.96875 13.9375Z"
                    fill="#C8B100"
                />
                <path d="M4.46875 8.9375H6.71875V11.4375H4.46875V8.9375Z" fill="#ED4C5C" />
                <path d="M6.5 13.5938C6.625 13.5 6.71875 13.2813 6.75 13.0313V11.4062H6.5V13.5938Z" fill="#C8B100" />
                <path
                    d="M9 11.4375V12.9375C9 13.5313 8.5 14 7.875 14C7.25 14 6.75 13.5313 6.75 12.9375V11.4375H9Z"
                    fill="#ED4C5C"
                />
                <path
                    d="M8.18766 9.37503C8.28141 9.56253 8.28141 10.0313 8.00016 9.93753C8.06266 9.96878 8.09391 10.1875 8.18766 10.3125C8.34391 10.5 8.53141 10.3438 8.50016 10.125C8.43766 9.78128 8.46891 9.56253 8.53141 9.21878C8.53141 9.25003 8.68766 9.25003 8.75016 9.18753C8.71891 9.28128 8.68766 9.40628 8.75016 9.40628C8.68766 9.50003 8.53141 9.65628 8.50016 9.75003C8.46891 9.96878 8.81266 10.375 8.43766 10.4688C8.18766 10.5313 8.34391 10.7188 8.43766 10.8125C8.43766 10.8125 8.31266 11.2188 8.37516 11.1875C8.12516 11.2813 8.18766 11.0625 8.18766 11.0625C8.31266 10.6875 7.96891 10.6563 8.00016 10.5938C7.68766 10.5625 8.03141 10.875 7.75016 10.875C7.68766 10.875 7.56266 10.9375 7.56266 10.9375C7.21891 10.9063 7.40641 10.5938 7.53141 10.625C7.62516 10.6563 7.71891 10.8125 7.71891 10.5938C7.71891 10.5938 7.56266 10.3438 7.96891 10.3438C7.81266 10.3438 7.71891 10.2188 7.65641 10.0625C7.59391 10.0938 7.50016 10.25 7.15641 10.2813C7.15641 10.2813 7.06266 9.93753 7.15641 10C7.28141 10.0625 7.34391 10.0625 7.46891 9.93753C7.40641 9.84378 7.03141 9.71878 7.09391 9.50003C7.09391 9.43753 7.28141 9.34378 7.28141 9.34378C7.25016 9.50003 7.34391 9.65628 7.53141 9.65628C7.78141 9.68753 7.68766 9.59378 7.71891 9.53128C7.75016 9.46878 7.93766 9.56253 7.87516 9.40628C7.87516 9.37503 7.65641 9.34378 7.71891 9.25003C7.84391 9.09378 8.03141 9.21878 8.18766 9.37503Z"
                    fill="#ED4C5C"
                />
                <path d="M6.75 13.9375L6.6875 13.7812L6.75 13.5938L6.8125 13.7812L6.75 13.9375Z" fill="#ED4C5C" />
                <path
                    d="M5.15625 9.46875V9.625H5.21875V9.75H5.0625V10.0625H5.15625V10.75H4.96875V11.0938H6.25V10.75H6.09375V10.0625H6.15625V9.75H6V9.625H6.09375V9.46875H5.78125V9.625H5.84375V9.75H5.6875V9.375H5.78125V9.21875H5.4375V9.375H5.53125V9.75H5.375V9.625H5.4375V9.46875H5.15625Z"
                    fill="#C8B100"
                />
                <path
                    d="M8.6875 13.3125V11.75H7.0625V13.3125L7.8125 13.6563H7.90625L8.6875 13.3125ZM7.8125 11.875V12.4063L7.28125 11.875H7.8125ZM7.15625 11.9063L7.78125 12.5313L7.15625 13.1563V11.9063ZM7.21875 13.2813L7.8125 12.6875V13.5625L7.21875 13.2813ZM7.90625 13.5313V12.6563L8.5 13.25L7.90625 13.5313ZM8.5625 13.1563L7.9375 12.5313L8.5625 11.9063V13.1563ZM7.90625 11.875H8.4375L7.90625 12.4063V11.875Z"
                    fill="#C8B100"
                />
                <path
                    d="M6 11.4062C6 10.9375 6.3125 10.5938 6.71875 10.5938C7.125 10.5938 7.4375 10.9687 7.4375 11.4062C7.4375 11.8437 7.125 12.2187 6.71875 12.2187C6.3125 12.2187 6 11.875 6 11.4062Z"
                    fill="#ED4C5C"
                />
                <path
                    d="M6.21875 11.4063C6.21875 11.0625 6.4375 10.8125 6.71875 10.8125C7 10.8125 7.21875 11.0938 7.21875 11.4063C7.21875 11.75 7 12 6.71875 12C6.46875 12.0313 6.21875 11.75 6.21875 11.4063Z"
                    fill="#005BBF"
                />
                <path
                    d="M6.5 11L6.375 11.3437L6.46875 11.375L6.40625 11.5H6.59375L6.53125 11.375L6.625 11.3437L6.5 11Z"
                    fill="#C8B100"
                />
                <path
                    d="M6.96875 11L6.84375 11.3437L6.9375 11.375L6.875 11.5H7.0625L7.03125 11.375L7.125 11.3437L6.96875 11Z"
                    fill="#C8B100"
                />
                <path
                    d="M6.75 11.4062L6.59375 11.75L6.6875 11.7813L6.65625 11.9062H6.8125L6.78125 11.7813L6.875 11.75L6.75 11.4062Z"
                    fill="#C8B100"
                />
            </g>
            <defs>
                <clipPath id="clip0_1001_738">
                    <rect width="20" height="20" fill="white" />
                </clipPath>
            </defs>
        </svg>
    ),
    deutsch: (props: LucideProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
            <g clip-path="url(#clip0_1001_795)">
                <path
                    d="M9.96875 0.625C5.875 0.625 2.40625 3.25 1.125 6.875H18.8125C17.5313 3.25 14.0625 0.625 9.96875 0.625Z"
                    fill="#3E4347"
                />
                <path
                    d="M9.96875 19.375C14.0625 19.375 17.5313 16.7812 18.8125 13.125H1.125C2.40625 16.7812 5.875 19.375 9.96875 19.375Z"
                    fill="#FFE62E"
                />
                <path
                    d="M1.125 6.875C0.78125 7.84375 0.59375 8.90625 0.59375 10C0.59375 11.0938 0.78125 12.1562 1.125 13.125H18.8125C19.1562 12.1562 19.3438 11.0938 19.3438 10C19.3438 8.90625 19.1562 7.84375 18.8125 6.875H1.125Z"
                    fill="#ED4C5C"
                />
            </g>
            <defs>
                <clipPath id="clip0_1001_795">
                    <rect width="20" height="20" fill="white" />
                </clipPath>
            </defs>
        </svg>
    ),
};
