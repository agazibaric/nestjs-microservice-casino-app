import { Injectable } from '@nestjs/common';
import { ClientOptions, Transport } from '@nestjs/microservices';

type ClientServices = 'promotionService';

@Injectable()
export class ClientConfigurationService {
  private clientConfigurations: Record<ClientServices, ClientOptions>;

  constructor() {
    this.clientConfigurations = {
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
