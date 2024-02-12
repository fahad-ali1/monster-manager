import Monster from "../models/monster.model.js";
import Counter from "../models/counter.model.js";

export const getMonstersFromRepo = async (query) => {
  try {
    const monsters = await Monster.find(query);
    return monsters;
  } catch (e) {
    throw Error("Error while fetching monsters!");
  }
}

export const getMonsterFromRepo = async (query) => {
  try {
    const monster = await Monster.findOne(query);
    return monster;
  } catch (e) {
    throw Error(`Error while fetching monster: ${id}`);
  }
}

export const updateMonsterInRepo = async (id, update) => {
  try {
    const monster = await Monster.findOneAndUpdate({ id:id }, { ...update }, { new: true } ).lean();
    return monster;
  } catch (e) {
    throw Error(`Error while updating monster: ${id}`);
  } 
}

export const deleteMonsterInRepo = async (query) => {
  try {
    const monster = await Monster.findOneAndDelete({ ...query });
    return monster;
  } catch (e) {
    throw Error(`Error while deleting a monster: ${id}`);
  }
}

export const createMonsterInRepo = async (payload) => {
  try {
    // create a new monster object and save to database
    const newMonster = new Monster({ ...payload });
    const savedMonster = await newMonster.save();

    // get highest ID in current dataset
    const maxIdMonster = await Monster.findOne().sort({ id: -1 });
    let nextId = 1; // default value

    if (maxIdMonster) {
      nextId = maxIdMonster.id + 1;
    }
    // update the counter sequence to highest + 1
    await Counter.findOneAndUpdate({ _id: 'monsterId' }, { seq: nextId }, { upsert: true });

    // update the saved monster ID with new increment and save again
    savedMonster.id = nextId;
    await savedMonster.save();

    return savedMonster;
  } catch (e) {
    // throw proper error if monster ID already exists 
    const existingMonster = await Monster.findOne({ id: payload.id });
    if (existingMonster) {
      throw new Error("Monster ID already exists");
    }
    // general error
    throw Error("Error while creating a monster");
  }
}