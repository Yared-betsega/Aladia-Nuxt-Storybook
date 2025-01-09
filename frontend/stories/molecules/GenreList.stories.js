import GenreList from "@/components/molecules/GenreList.vue";

export default {
    title: "Molecules/GenreList",
    component: GenreList,
    tags: ["autodocs"],
    argTypes: {
        genres: { control: "genres" },
    },
};

export const Default = {
    args: {
        genres: ["Comedy", "Fiction", "Thriller"],
    }
}