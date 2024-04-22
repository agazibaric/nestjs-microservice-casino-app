import { Injectable } from '@nestjs/common';
import { ClientOptions, Transport } from '@nestjs/microservices';

type ClientServices =
  | 'promotionService'
  | 'userService'
  | 'authenticationService';

@Injectable()
export class ClientConfigurationService {
  private clientConfigurations: Record<ClientServices, ClientOptions>;

  constructor() {
    this.clientConfigurations = {
      authenticationService: {
        transport: Transport.TCP,
        options: {
          port: 8002,
        },
      },
      userService: {
        transport: Transport.TCP,
        options: {
          port: 8003,
        },
      },
      promotionService: {
        transport: Transport.TCP,
        options: {
          port: 8004,
        },
      },
    };
  }

  get(key: ClientServices): ClientOptions {
    return this.clientConfigurations[key];
  }
}
