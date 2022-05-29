import {FC} from 'react';
import {default as BaseAccordion} from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
  summary?: React.ReactNode
  defaultExpanded?: boolean
}

const Accordion: FC<Props> = ({summary = '🥳', defaultExpanded = false, children}) => {
  return (
      <BaseAccordion defaultExpanded={defaultExpanded}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {summary}
        </AccordionSummary>
        <AccordionDetails>
          {children}
        </AccordionDetails>
      </BaseAccordion>
    
  );
}

export default Accordion