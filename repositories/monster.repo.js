import Monster from "../models/monster.model.js";

export const getMonstersFromRepo = async (query) => {
  try {
    const monsters = await Monster.find(query);
    return monsters;
  } catch (e) {
    throw Error("Error while fetching monsters!");
  }
}

export const getMonsterFromRepo = async (id) => {
  try {
    const monster = await Monster.findOne({ id: id });
    return monster;
  } catch (e) {
    throw Error(`Error while fetching monster with ID ${id}`);
  }
}

export const updateMonsterInRepo = async (id, update) => {
  try {
    const monster = await Monster.findOneAndUpdate(
      { id: id },
      { ...update },
      { new: true }
    ).lean();
    return monster;
  } catch (e) {
    throw Error("Error while updating monster");
  } 
}

export const deleteMonsterInRepo = async (id) => {
  try {
    const monster = await Monster.findOneAndDelete({ id: id });
    return monster;
  } catch (e) {
    throw Error("Error while deleting a monster");
  }
}

export const createMonsterInRepo = async (payload) => {
  try {
    const newMonster = new Monster(payload);
    const savedMonster = await newMonster.save();
    return savedMonster;
  } catch (e) {
    throw Error("Error while creating a monster");
  }
}