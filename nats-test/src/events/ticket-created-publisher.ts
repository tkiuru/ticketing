import { Publisher } from '@tk-tickets/common'
import { Subjects } from '@tk-tickets/common'
import { TicketCreatedEvent } from '@tk-tickets/common'

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated
}
