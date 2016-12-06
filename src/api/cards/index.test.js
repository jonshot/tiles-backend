import request from 'supertest-as-promised'
import express from '../../services/express'
import routes from '.'

const app = () => express(routes)

test('GET /cards 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})
