import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/messages', (req: Request, res: Response) => {
	res.json({
		ok: true,
		message: 'Everything is fine'
	});
});

router.post('/messages/:id', (req: Request, res: Response) => {
	const message = req.body.message;
	const sender = req.body.sender;
	const id = req.params.id;
	res.json({
		ok: true,
		message,
		sender,
		id
	});
});

export default router;
