import { Router, Request, Response } from 'express';
import { cannabisMyths, getDebunkingResources, getMediaLiteracy } from '../data/mythsData';

const router = Router();

// Get all myths
router.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'Cannabis myths and facts',
    data: cannabisMyths
  });
});

// Get specific myth by ID
router.get('/myth/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const myth = cannabisMyths.find(m => m.id === id);
  
  if (!myth) {
    return res.status(404).json({
      success: false,
      message: `Myth not found for ID: ${id}`
    });
  }
  
  res.json({
    success: true,
    data: myth
  });
});

// Get debunking resources
router.get('/resources', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: getDebunkingResources()
  });
});

// Get media literacy guide
router.get('/media-literacy', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: getMediaLiteracy()
  });
});

// Search myths by keyword
router.get('/search', (req: Request, res: Response) => {
  const { q } = req.query;
  
  if (!q || typeof q !== 'string') {
    return res.status(400).json({
      success: false,
      message: 'Search query parameter "q" is required'
    });
  }
  
  const searchTerm = q.toLowerCase();
  const results = cannabisMyths.filter(myth => 
    myth.myth.toLowerCase().includes(searchTerm) ||
    myth.reality.toLowerCase().includes(searchTerm) ||
    myth.explanation.some(exp => exp.toLowerCase().includes(searchTerm))
  );
  
  res.json({
    success: true,
    data: results,
    count: results.length
  });
});

export default router;
