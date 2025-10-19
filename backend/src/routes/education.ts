import { Router, Request, Response } from 'express';
import { drugsEducation, getHarmReductionInfo, getTreatmentResources } from '../data/educationData';

const router = Router();

// Get all drug education information
router.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'Drug harm education data',
    data: drugsEducation
  });
});

// Get specific drug information by ID
router.get('/drug/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const drug = drugsEducation.find(d => d.id === id);
  
  if (!drug) {
    return res.status(404).json({
      success: false,
      message: `Drug information not found for ID: ${id}`
    });
  }
  
  res.json({
    success: true,
    data: drug
  });
});

// Get harm reduction information
router.get('/harm-reduction', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: getHarmReductionInfo()
  });
});

// Get treatment resources
router.get('/treatment', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: getTreatmentResources()
  });
});

// Get drugs by harm level
router.get('/by-harm/:level', (req: Request, res: Response) => {
  const { level } = req.params;
  
  if (!['high', 'medium', 'low'].includes(level)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid harm level. Use: high, medium, or low'
    });
  }
  
  const filteredDrugs = drugsEducation.filter(d => d.harmLevel === level);
  
  res.json({
    success: true,
    data: filteredDrugs
  });
});

export default router;
