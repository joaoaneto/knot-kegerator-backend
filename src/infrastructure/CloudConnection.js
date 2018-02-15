/* eslint-disable no-console */
import meshblu from 'meshblu';

class CloudConnection {
  constructor(company) {
    this.server = company.server;
    this.port = company.port;
    this.uuid = company.uuid;
    this.token = company.token;
  }

  async start() {
    this.conn = meshblu.createConnection({
      server: this.server,
      port: this.port,
      uuid: this.uuid,
      token: this.token,
    });

    this.conn.on('ready', () => {
      console.log('Cloud connection successful');
    });

    this.conn.on('notReady', () => {
      console.log('Cloud connection failed');
    });
  }

  async getConnection() {
    if (this.conn) { return this.conn; }
    return null;
  }
}

export default CloudConnection;
