import React from 'react';

import Results from '../Component/Results/Results';
import { ResultsProvider } from './DataExchange/ResultsContext';

function ResultsPage() {
  return (
    <ResultsProvider>
      <div className="ResultsPage">
          <Results/>
      </div>
    </ResultsProvider>
  );
}

export default ResultsPage;
