import Genre from "@/components/atoms/Genre.vue";

export default {
    title: "Atoms/Genre",
    component: Genre,
    tags: ["autodocs"],
    argTypes: {
        text: { control: "text" },
    },
};

export const Default = {
    args: {
        text: "Comedy",
    }
}