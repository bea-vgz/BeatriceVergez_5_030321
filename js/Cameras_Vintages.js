/* Création d'une classe "Cameras_Vintages" utilisée pour créer et initialiser un objet qui sera appelé tout au long du projet */
class Cameras_Vintages {
    constructor({
        name,
        imageUrl,
        price,
        _id,
        description,
        lenses,
    }) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
        this.id = _id;
        this.description = description;
        this.lenses = lenses;
    }
};
