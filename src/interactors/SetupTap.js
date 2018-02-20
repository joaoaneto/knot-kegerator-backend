/* eslint-disable no-console */
class SetupTap {
  constructor(mongoStore, cloudStore) {
    this.mongoStore = mongoStore;
    this.cloudStore = cloudStore;
  }

<<<<<<< 72d604dd726237e051ce7746cc04733e4b6ffdd2
  async execute(setup) {
    const tap = await this.cloudStore.getTap(setup.id);

    if (tap.waitingSetup === false) {
=======
  async execute(tap) {
    if (tap.waitingSetup === false) {
      console.log('erro');
>>>>>>> Add domain rules to setup tap
      const error = new Error('Tap doesn\'t in setup mode');
      error.code = 403;
      throw error;
    }
<<<<<<< 72d604dd726237e051ce7746cc04733e4b6ffdd2

    tap.setup.client.id = setup.clientId;
    tap.setup.beer.id = setup.beerId;
    tap.setup.keg.id = setup.kegId;

=======
>>>>>>> Add domain rules to setup tap
    await this.mongoStore.setupTap(tap);
    await this.cloudStore.setupTap(tap);
  }
}

export default SetupTap;
