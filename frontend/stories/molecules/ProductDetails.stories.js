import ProductDetails from "@/components/molecules/ProductDetails.vue";

export default {
    title: "Molecules/ProductDetails",
    component: ProductDetails,
    tags: ["autodocs"],
    argTypes: {
        title: { control: "text" },
        description: { control: "text" },
        author: { control: "text" },
        genres: { control: "array" },
        price: { control: "number" },
    },
};

export const Default = {
    args: {
        title: "The Name of the Rose",
        description: "The year is 1327. Franciscans in a wealthy Italian abbey are suspected of heresy, and Brother William of Baskerville arrives to investigate. When his delicate mission is suddenly overshadowed by seven bizarre deaths, Brother William turns to the logic of Aristotle, the theology of Aquinas, and the empirical insights of Roger Bacon to find the killer. He collects evidence, deciphers secret symbols and coded manuscripts, and digs into the eerie labyrinth of the abbey (“where the most interesting things happen at night”) armed with a wry sense of humor and a ferocious curiosity.",
        author: "Umberto Eco",
        genres: [
            "Fiction",
            "Historical Fiction",
            "Mystery",
            "Historical",
            "Literature",
            "Italy",
            "Crime"
        ],
        price: 5.40,
    },
}