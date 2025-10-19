import { Router, Request, Response } from 'express';
import { cannabisEducation, getLegalizationArguments, getResearchReferences } from '../data/cannabisData';

const router = Router();

// Get all cannabis education information
router.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'Cannabis education and legalization information',
    data: cannabisEducation
  });
});

// Get specific section by ID
router.get('/section/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const section = cannabisEducation.sections.find(s => s.id === id);
  
  if (!section) {
    return res.status(404).json({
      success: false,
      message: `Section not found for ID: ${id}`
    });
  }
  
  res.json({
    success: true,
    data: section
  });
});

// Get legalization arguments
router.get('/legalization', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: getLegalizationArguments()
  });
});

// Get research references
router.get('/research', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: getResearchReferences()
  });
});

// Get all section IDs
router.get('/sections', (req: Request, res: Response) => {
  const sections = cannabisEducation.sections.map(s => ({
    id: s.id,
    title: s.title
  }));
  
  res.json({
    success: true,
    data: sections
  });
});

export default router;
