import { healthCheck, SignUpController } from '.'
import { Router } from 'express'

const router = Router();

router.get('/health', healthCheck);
router.get('/', healthCheck);
router.post('/signup', SignUpController.perform)

export default router;