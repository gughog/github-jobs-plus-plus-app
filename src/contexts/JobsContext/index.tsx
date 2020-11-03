import * as React from 'react';
import {Job} from '../../types';
import {AlertWrapper} from '../../helpers/actions.helpers';
import Api from '../../services/Api.service';
import {reconcileArraysAndReturnWithFlags} from '../../helpers/formatters.helpers';

export interface JobsContextProps {
  jobs: Job[];
  loading: boolean;
  setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  fetchJobs: () => Promise<void>;
}

// Initial context
const JobsContext = React.createContext<JobsContextProps>({
  jobs: [],
  loading: false,
  setJobs: () => {},
  setLoading: () => {},
  fetchJobs: async () => {},
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

  // on component mount, fetch data from the api
  React.useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <JobsContext.Provider
      value={{
        jobs,
        loading,
        setJobs,
        setLoading,
        fetchJobs,
      }}>
      {children}
    </JobsContext.Provider>
  );
};

export {JobsProvider, useJobs};
