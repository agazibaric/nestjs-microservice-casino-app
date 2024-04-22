import { Injectable } from '@nestjs/common';
import { ClientOptions, Transport } from '@nestjs/microservices';

type ClientServices = 'userService';

@Injectable()
export class ClientConfigurationService {
  private clientConfigurations: Record<ClientServices, ClientOptions>;

  constructor() {
    this.clientConfigurations = {
      userService: {
        transport: Transport.TCP,
        options: {
          port: 8003,
        },
      },
    };
  }

  get(key: ClientServices): ClientOptions {
    return this.clientConfigurations[key];
  }
}
