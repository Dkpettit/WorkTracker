import { useQuery } from '@apollo/client';
import ClientRow from './ClientRow';
import Spinner from './Spinner';
import { GET_CLIENTS } from '../queries/clientQueries';


export default function Clients() {
    const { loading, error, data } = useQuery(GET_CLIENTS);

    if(loading) return <Spinner/>
    if(error) return <p>Something went wrong</p>

  return <><h3>Clients</h3>{!loading && !error && (
    <div className='tabular-wrapper'>
    <table className='table table-hover table-striped table-bordered mt-2'>
        <thead>
            <tr className="table-primary">
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {data.clients.map(client => 
                (<ClientRow key={client.id} client={client} />)
            )}
        </tbody>
    </table>
    </div>
    
    )}</>
}