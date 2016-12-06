import { Router } from 'express'
import { middleware as query } from 'querymen'
import { index, show } from './controller'

const router = new Router()

/**
 * @api {get} /cards Retrieve cards
 * @apiName RetrieveCards
 * @apiGroup Cards
 * @apiUse listParams
 * @apiSuccess {Object[]} cards List of cards.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /cards/:id Retrieve cards
 * @apiName RetrieveCards
 * @apiGroup Cards
 * @apiSuccess {Object} cards Cards's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Cards not found.
 */
router.get('/:id',
  show)

export default router
