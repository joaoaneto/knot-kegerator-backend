/* eslint-disable no-console */
class CloudTapStore {
  constructor(connection) {
    this.connection = connection;
  }

  getTap(id) {
    return new Promise((resolve, reject) => {
      this.connection.device({ uuid: id }, (result) => {
        if (!result.device) {
          return reject(result.error);
        }
        return resolve(result.device.metadata);
      });
    });
  }

  setupTap(tap) {
    this.connection.update({
      uuid: tap.id,
      'metadata.setup': tap.setup,
    }, () => {
      console.log(`${tap.name} updated on cloud`);
    });
  }
}

export default CloudTapStore;
