import Profile01 from "@/components/kokonutui/profile-01";
import Profile02 from "@/components/kokonutui/profile-02";
import Profile03 from "@/components/kokonutui/profile-03";
import Profile04 from "@/components/kokonutui/profile-04";
import Profile05 from "@/components/kokonutui/profile-05";
import { createComponentPage } from "@/components/page-builder";
import type { PageConfig } from "@/types/component-page";

const PROFILE_CONFIG: PageConfig = {
    title: "Profile",
    description:
        "A collection of profile components to use and customize. Built with Tailwind CSS.",
    folder: "kokonutui/profile",
    viewType: "grid",
    gridClassName: "grid-cols-1 lg:grid-cols-1 gap-8",
    componentClassName: "h-full my-0 mb-4",
    components: [
        {
            id: 1,
            title: "Profile 01",
            component: <Profile01 />,
            fileName: "profile-01.tsx",
        },
        {
            id: 2,
            title: "Profile 02",
            component: <Profile02 />,
            fileName: "profile-02.tsx",
        },
        {
            id: 3,
            title: "Profile 03",
            component: <Profile03 />,
            fileName: "profile-03.tsx",
        },
        {
            id: 4,
            title: "Profile 04",
            component: <Profile04 />,
            fileName: "profile-04.tsx",
        },
        {
            id: 5,
            title: "Profile 05",
            component: <Profile05 />,
            fileName: "profile-05.tsx",
        },
    ],
};

const { default: ProfilePage, metadata } = createComponentPage(PROFILE_CONFIG);

export { metadata };
export default ProfilePage;
