import ProductCard from "@/components/organisms/ProductCard.vue";

export default {
    title: "Organisms/ProductCard",
    component: ProductCard,
    tags: ["autodocs"],
    argTypes: {
        book: { control: "book" },
    }
};

export const Default = {
    args: {
        display: "inline",
        book: {
            "id": 1,
            "imageUrl": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1415375471i/119073.jpg",
            "title": "The Name of the Rose",
            "Author": "Umberto Eco",
            "price": 5.40,
            "rating": 4.14,
            "description": "The year is 1327. Franciscans in a wealthy Italian abbey are suspected of heresy, and Brother William of Baskerville arrives to investigate. When his delicate mission is suddenly overshadowed by seven bizarre deaths, Brother William turns to the logic of Aristotle, the theology of Aquinas, and the empirical insights of Roger Bacon to find the killer. He collects evidence, deciphers secret symbols and coded manuscripts, and digs into the eerie labyrinth of the abbey (“where the most interesting things happen at night”) armed with a wry sense of humor and a ferocious curiosity.",
            "Genres": [
                "Fiction",
                "Historical Fiction",
                "Mystery",
                "Historical",
                "Literature",
                "Italy",
                "Crime"
            ]
        }
    },
}

export const Inline = {
    args: {
        display: "inline",
        book: {
            "id": 1,
            "imageUrl": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1415375471i/119073.jpg",
            "title": "The Name of the Rose",
            "Author": "Umberto Eco",
            "price": 5.40,
            "rating": 4.14,
            "description": "The year is 1327. Franciscans in a wealthy Italian abbey are suspected of heresy, and Brother William of Baskerville arrives to investigate. When his delicate mission is suddenly overshadowed by seven bizarre deaths, Brother William turns to the logic of Aristotle, the theology of Aquinas, and the empirical insights of Roger Bacon to find the killer. He collects evidence, deciphers secret symbols and coded manuscripts, and digs into the eerie labyrinth of the abbey (“where the most interesting things happen at night”) armed with a wry sense of humor and a ferocious curiosity.",
            "Genres": [
                "Fiction",
                "Historical Fiction",
                "Mystery",
                "Historical",
                "Literature",
                "Italy",
                "Crime"
            ]
        }
    },
}

export const Block = {
    args: {
        display: "block",
        book: {
            "id": 1,
            "imageUrl": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1415375471i/119073.jpg",
            "title": "The Name of the Rose",
            "Author": "Umberto Eco",
            "price": 5.40,
            "rating": 4.14,
            "description": "The year is 1327. Franciscans in a wealthy Italian abbey are suspected of heresy, and Brother William of Baskerville arrives to investigate. When his delicate mission is suddenly overshadowed by seven bizarre deaths, Brother William turns to the logic of Aristotle, the theology of Aquinas, and the empirical insights of Roger Bacon to find the killer. He collects evidence, deciphers secret symbols and coded manuscripts, and digs into the eerie labyrinth of the abbey (“where the most interesting things happen at night”) armed with a wry sense of humor and a ferocious curiosity.",
            "Genres": [
                "Fiction",
                "Historical Fiction",
                "Mystery",
                "Historical",
                "Literature",
                "Italy",
                "Crime"
            ]
        }
    },
}