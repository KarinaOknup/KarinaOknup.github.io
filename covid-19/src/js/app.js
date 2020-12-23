import Countries from './Countries';
import reversal from './components/reversalBlock';

const app = () => {
  const countries = new Countries();
  const blocks = ['.cases-by', '.map', '.deaths', '.death-recovered', '.graph'];

  countries.init();
  reversal(blocks);
};

export default app;
