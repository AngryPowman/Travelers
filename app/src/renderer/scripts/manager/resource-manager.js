class ResourceManager {
  static config = {
    items: [],
    battles: [],
    heroes: [],
    skills: []
  }

  static loadAllConfig() {
    this.config.items = require('assets/config/items.json');
    this.config.battles = require('assets/config/battles.json');
    this.config.heroes = require('assets/config/heroes.json');
    this.config.skills = require('assets/config/skills.json');
  }
}

export default ResourceManager;
