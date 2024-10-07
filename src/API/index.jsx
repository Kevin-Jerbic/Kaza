const apiAparts = () => {
    const getAparts = async () => {
        const response = await fetch('/src/datas/logements.json', {
            type: 'GET',
        });
        return response.json();
    };

    /**
     * Récupère les données du fichier JSON et retourne les données d'un appartement avec l'ID, ou une erreur si ce n'est pas correct.
     * @param {string} apartId
     * @returns {object} objet représentant les données d'un appartement du fichier JSON
     */
    const getApart = async apartId => {
        const aparts = await getAparts();
        // find() retourne le premier élément trouvé dans le tableau qui satisfait la condition donnée
        const res = aparts.find(apart => apart.id === apartId);
        if (!res) throw new Error("Pas d'appartement trouvé");
        return res;
    };

    return {
        getAparts,
        getApart,
    };
};

export default apiAparts;
