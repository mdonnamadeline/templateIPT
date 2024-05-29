const posterSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    releaseYear: {
        type: String,
        required: true,
    },
    logline: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

const Poster = mongoose.model("Poster", posterSchema);