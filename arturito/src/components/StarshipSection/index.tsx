import useSWR from 'swr';
import { getChar } from "../../utils/fetcher";

import Table from '../Table';

const columns = [
    {
        title:'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Model',
        dataIndex: 'model',
        key: 'model',
    },
    {
        title: 'Manufacturer',
        dataIndex: 'manufacturer',
        key: 'manufacturer',
    },
    {
        title: 'Passengers',
        dataIndex: 'passengers',
        key: 'passengers',
    },
    {
        title: 'Films',
        dataIndex: 'films',
        key: 'films',
    },  
];
const Starships = () => {
    const { data, error } = useSWR('/starships', getChar);
  
    if (error) {
      return <div className="px-2">Oh oh!</div>;
    }
    if (!data) {
      return <div className="px-2">Loading...</div>;
    }
  
    return (
      <div>
        <Table columns={columns} data={data.results} /* :D */ />
      </div>
    );
  };

  export default Starships;
  
