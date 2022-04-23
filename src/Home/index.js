import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';


export default function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/tickets" className="clear">
          <Button variant="contained">Tickets</Button>
        </Link>
      </nav>
    </>
  );
}
