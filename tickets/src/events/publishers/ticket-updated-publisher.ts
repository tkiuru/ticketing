import { Publisher, Subjects, TicketUpdatedEvent } from '@tk-tickets/common'

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated
}