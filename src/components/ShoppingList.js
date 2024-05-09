import { plantList } from "../datas/plantList";

function ShoppingList() {
  const categories = plantList.reduce(
    (accumulator, plant) =>
      accumulator.includes(plant.category)
        ? accumulator
        : accumulator.concat(plant.category),
    []
  );
  return <ul></ul>;
}

export default ShoppingList;
