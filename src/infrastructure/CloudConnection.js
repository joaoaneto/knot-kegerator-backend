/* eslint-disable no-console */
<<<<<<< 7f8e4b68d0348a53576ec74bd2adb590e25165c5
import MeshbluSocketIO from 'meshblu';

class CloudConnection {
  constructor(company) {
    this.connection = new MeshbluSocketIO({
      resolveSrv: false,
      protocol: 'ws',
      hostname: company.server,
      port: company.port,
      uuid: company.uuid,
      token: company.token,
    });
  }

  start() {
    this.connection.connect();

    this.connection.on('ready', () => {
      console.log('Cloud connection is ready');
    });

    this.connection.on('notReady', () => {
      console.log('Cloud connection unauthorized');
    });

    return this.connection;
=======
import meshblu from 'meshblu';

let instance = null;

class CloudConnection {
  constructor(company) {
    if (!instance) {
      this.company = company;
      this.connection = this.start(company);
      instance = this;
    }
    return instance;
  }

  start() {
    const meshbluConnection = meshblu.createConnection({
      server: this.company.server,
      port: this.company.port,
      uuid: this.company.uuid,
      token: this.company.token,
    });

    return meshbluConnection;
>>>>>>> Setup tap on cloud store
  }

  close() {
    this.connection.close(() => {});
  }
}

export default CloudConnection;
