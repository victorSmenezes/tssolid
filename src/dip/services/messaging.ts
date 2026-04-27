import { MessagingProtocol } from '../classes/interfaces/messasing-protocol';

export class Messaging implements MessagingProtocol {
  sendMessage(message: string): void {
    console.log(message);
  }
}
