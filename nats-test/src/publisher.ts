import nats from 'node-nats-streaming'
import { TicketCreatedPublisher } from './events/ticket-created-publisher'

console.clear()

const stan = nats.connect('ticketing', 'asdf', {
  url: 'http://nats-srv:4222',
})

stan.on('connect', async () => {
  console.log('Publisher connected to NATS')

  const publisher = new TicketCreatedPublisher(stan)
  await publisher.publish({
    id: '123',
    title: 'concert',
    price: 20,
    userId: '123',
  })
})
