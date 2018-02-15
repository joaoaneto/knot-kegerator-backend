/* eslint-disable no-console */
import TapSchema from 'infrastructure/TapSchema';

class TapStore {
  constructor(mgoConnection) {
    this.conn = mgoConnection;
  }

  async setupTap(tap) {
    const model = this.conn.model('Tap', TapSchema);

    await model.findOneAndUpdate({ id: tap.id }, tap, (err, result) => {
      let error = null;
      if (!result) {
        error = new Error('Tap don\'t exists', 404);
        throw error;
      }
      return result;
    });
  }
}

export default TapStore;
