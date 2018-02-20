/* eslint-disable no-console */
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
  }

  close() {
    this.connection.close(() => {});
  }
}

export default CloudConnection;
