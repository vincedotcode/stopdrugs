import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import educationRoutes from './routes/education';
import cannabisRoutes from './routes/cannabis';
import mythsRoutes from './routes/myths';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'StopDrugs API - Fighting drug harm and cannabis misinformation',
    version: '1.0.0',
    endpoints: {
      education: '/api/education',
      cannabis: '/api/cannabis',
      myths: '/api/myths'
    }
  });
});

app.use('/api/education', educationRoutes);
app.use('/api/cannabis', cannabisRoutes);
app.use('/api/myths', mythsRoutes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default app;
