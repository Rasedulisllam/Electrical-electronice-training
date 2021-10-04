
import Button from '@restart/ui/esm/Button';
import React from 'react';

const NotFound = () => {
    return (
        <div style={{height:'80vh',}} className='d-flex align-items-center justify-content-center'>
            <div>
                <h1 className='text-danger'>404</h1>
                <h3>Page not found</h3>
                <p>The page you are looking for dosen't exist.</p>
                <Button variant={"secondary"} className='btn btn-outline-secondary' size="lg">
                    Back to home
                </Button>
            </div>
        </div>
    );
};

export default NotFound;