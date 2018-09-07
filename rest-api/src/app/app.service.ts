import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): string {
    return '<h1>HvA Alice Bootcamp</h1><p>For API documentation, navigate to: /api<p>';
  }
}
