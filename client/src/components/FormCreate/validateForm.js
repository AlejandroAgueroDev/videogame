export const validateForm = (fields) => {
    const errors = {};
    const ratingAsNumber = Number(fields.rating);

    if (!fields.name.trim()) {
        errors.name = "El campo nombre es obligatorio";

    }else if (fields.name.trim().length > 20) {
        errors.name = "El campo name no debe exceder los 20 caracteres";

    } else if (!fields.description_raw.trim()) {
        errors.description_raw = "El campo descripción es obligatorio";

    } else if (fields.description_raw.trim().length > 200) {
        errors.description_raw = "El campo descripción no debe exceder los 200 caracteres";

    } else if (!fields.platforms.trim()) {
        errors.platforms = "El campo plataformas es obligatorio";

    } else if (fields.platforms.trim().length > 20) {
        errors.platforms = "El campo nombre no debe exceder los 20 caracteres";

    } else if (!fields.background_image.trim()) {
        errors.background_image = "El campo URL de imagen es obligatorio";

    } else if (!/\.(jpg|png)$/.test(fields.background_image)) {
        errors.background_image = "Debe ser una URL valida";

    } else if (!fields.releaseDate) {
        errors.releaseDate = "El campo fecha de creación es obligatorio";

    } else if (!ratingAsNumber) {
        errors.rating = "El campo rating es obligatorio";

    } else if (
        isNaN(ratingAsNumber) ||
        ratingAsNumber <= 0 ||
        ratingAsNumber >= 6
    ) {
        errors.rating = "El rating debe ser un número entre 1 y 5";

    } else if (!fields.genres) {
        errors.genres = "Debes seleccionar un género";

    }

    return errors;
};