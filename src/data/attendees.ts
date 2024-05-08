import { faker } from '@faker-js/faker'

export const attendees = Array.from({length: 200}).map(() => {
  return {
    code: faker.number.int({min: 10000, max: 30000}),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    createdAt: faker.date.recent({days: 30}),
    checkedInAt: faker.date.recent({days: 9})
  }
})