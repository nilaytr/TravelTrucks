export const filterTrucks = ({
    trucks,
    location,
    selectedTypes,
    selectedEquipments
}) => {
    return trucks.filter((truck) => {
        const locationMatch = location && typeof location === "string"
            ? truck.location?.toLowerCase().includes(location.toLowerCase())
            : true;
        const typeMatch = selectedTypes.length === 0 || selectedTypes
            .map((type) => type.toLowerCase())
            .includes(truck.form?.toLowerCase());
        const equipmentMatch = selectedEquipments.length === 0 || selectedEquipments.every((equip) => {
            switch (equip) {
                case "ac":
                    return truck.AC;
                case "auto":
                    return truck.transmission === "automatic";
                case "kitchen":
                    return truck.kitchen;
                case "tv":
                    return truck.TV;
                case "bathroom":
                    return truck.bathroom;
                default:
                    return false;
            }
        });
        
        return locationMatch && typeMatch && equipmentMatch;
    });
};