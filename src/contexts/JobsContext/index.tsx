import * as React from 'react';
import {InputEvent, Job} from '../../types';
import {AlertWrapper} from '../../helpers/actions.helpers';
import Api from '../../services/Api.service';
import {reconcileArraysAndReturnWithFlags} from '../../helpers/formatters.helpers';

export interface JobsContextProps {
  jobs: Job[];
  loading: boolean;
  search: string;
  setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  fetchJobs: () => Promise<void>;
  handleSearchChange: (e: InputEvent) => void;
}

// Initial context
const JobsContext = React.createContext<JobsContextProps>({
  jobs: [],
  loading: false,
  search: '',
  setJobs: () => {},
  setLoading: () => {},
  setSearch: () => {},
  fetchJobs: async () => {},
  handleSearchChange: () => {},
});

// Hook to access all properties
const useJobs = () => {
  const context = React.useContext(JobsContext);

  if (!context) {
    throw new Error('useJobs must be used within a JobsProvider!');
  }

  return context;
};

const JobsProvider: React.FC = ({children}) => {
  const [loading, setLoading] = React.useState(false);
  const [jobs, setJobs] = React.useState<Job[]>([]);
  const [search, setSearch] = React.useState('');

  // fetch jobs from the api
  const fetchJobs = async () => {
    try {
      setLoading(true);
      const {data} = await Api.get('/positions.json');
      const reconciliatedData = await reconcileArraysAndReturnWithFlags(data);
      data && setJobs(reconciliatedData);
    } catch (error) {
      AlertWrapper({
        title: 'Some error has occured!',
        description: `The following error has occured: ${error.message}`,
        okayButton: {
          text: 'Ok',
          action: () => {},
        },
      });
    } finally {
      setLoading(false);
    }
  };

  // updates the search input state
  const handleSearchChange = (e: InputEvent) => {
    setSearch(e.nativeEvent.text);
  };

  // on component mount, fetch data from the api
  React.useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <JobsContext.Provider
      value={{
        jobs,
        loading,
        search,
        setJobs,
        setLoading,
        setSearch,
        fetchJobs,
        handleSearchChange,
      }}>
      {children}
    </JobsContext.Provider>
  );
};

export {JobsProvider, useJobs};
