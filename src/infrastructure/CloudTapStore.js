/* eslint-disable no-console */
class CloudTapStore {
  constructor(cloudConnection) {
    this.conn = cloudConnection;
  }

  async setupTap(tap) {
    this.conn.update({
      uuid: tap.id,
      metadata: [{
        clientId: tap.clientId,
        beerId: tap.beerId,
        kegId: tap.kegId,
      }],
    }, () => {
      console.log('Tap device updated on cloud');
      this.conn.close(() => {});
    });
  }
}

export default CloudTapStore;
