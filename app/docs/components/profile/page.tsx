import Profile01 from "@/components/kokonutui/profile-01";
import Profile02 from "@/components/kokonutui/profile-02";
import Profile03 from "@/components/kokonutui/profile-03";
import { createComponentPage } from "@/components/page-builder";

const { default: ProfilePage, metadata } = createComponentPage({
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
            title: "Profile",
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
    ],
});

export { metadata };
export default ProfilePage;
