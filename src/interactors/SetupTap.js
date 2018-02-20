/* eslint-disable no-console */
class SetupTap {
  constructor(mongoStore, cloudStore) {
    this.mongoStore = mongoStore;
    this.cloudStore = cloudStore;
  }

  async execute(setup) {
    const tap = await this.cloudStore.getTap(setup.id);

    if (tap.waitingSetup === false) {
      const error = new Error('Tap doesn\'t in setup mode');
      error.code = 403;
      throw error;
    }

    tap.setup.client.id = setup.clientId;
    tap.setup.beer.id = setup.beerId;
    tap.setup.keg.id = setup.kegId;

    await this.mongoStore.setupTap(tap);
    await this.cloudStore.setupTap(tap);
  }
}

export default SetupTap;
