import { getMonstersFromRepo,getMonsterFromRepo, updateMonsterInRepo, deleteMonsterInRepo, createMonsterInRepo } from '../repositories/monster.repo.js';

// Handle 404 errors to show user when a monster is not found
const handleMonsterNotFound = (res, id) => {
  res.status(404).send(`Monster ${id} not found`);
};

// Gets all the monsters list from the database
export const getMonsters = async (req, res) => {
  try {
    const monsters = await getMonstersFromRepo();
    res.status(200).send(monsters);
  } catch (e) {
    res.status(500).send(`Failed to fetch a list of monsters: ${e.message}`);
  }
}

// Gets a single monster by ID from the database
export const getMonster = async (req, res) => {
  const { id } = req.params;
  try {
    const monster = await getMonsterFromRepo({ id: id });
    if (!monster) {
      handleMonsterNotFound(res, id);
    } else {
      res.status(200).send(monster);
    }
  } catch (e) {
    res.status(500).send(`Failed to fetch monster ${id}: ${e.message}`);
  }
}

// Updates a single monster by ID in the database
export const updateMonster = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const monster = await updateMonsterInRepo(id, body);
    if (!monster) {
      handleMonsterNotFound(res, id);
    } else {
      res.status(200).send(monster);
    }
  } catch (e) {
    res.status(500).send(`Failed to update monster ${id}: ${e.message}`);
  }
}

// Deletes a single monster by ID from the database
export const deleteMonster = async (req, res) => {
  const { id } = req.params;
  try {
    const monster = await deleteMonsterInRepo({ id: id });
    if (monster) {
      if (!monster) {
        handleMonsterNotFound(res, id);
      } else {
        res.status(204).send(monster);
      }
    } else {
      res.status(404).send(`Failed to delete monster ${id}: ${e.message}`);
    };
  } catch (e) {
    res.status(500).send(`Failed to delete monster ${id}: ${e.message}`);
  }
};

// Creates a single monster in the database
export const createMonster = async (req, res) => {
  const { body } = req;
  try {
    const monster = await createMonsterInRepo(body);
    if (!monster) {
      handleMonsterNotFound(res, id);
    } else {
      res.status(200).send(monster);
    }
  } catch (e) {
    res.status(500).send(`Failed to create monster: ${e.message}`);
  }
}