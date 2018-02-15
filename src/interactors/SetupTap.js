class SetupTap {
  constructor(mongoStore, cloudStore) {
    this.mongoStore = mongoStore;
    this.cloudStore = cloudStore;
  }

  async execute(tap) {
    await this.mongoStore.setupTap(tap);
    await this.cloudStore.setupTap(tap);
  }
}

export default SetupTap;
