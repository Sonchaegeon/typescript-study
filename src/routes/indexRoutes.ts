import { Router } from 'express';
const router = Router();

import { indexWelcome } from "../controllers/indexController";

router.route('/')
    .get(indexWelcome);

export default router;