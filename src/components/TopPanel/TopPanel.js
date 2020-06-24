import React from 'react'
import { useHistory, Link } from 'react-router-dom';
import './TopPanel.scss';

export default function TopPanel (props) {
    const {loggedIn, setLoggedIn} = props;
    const { push } = useHistory();

    function handleLogOut (event) {
        localStorage.removeItem('loginToken');
        setLoggedIn(false);
        push('/login');
    }

    return (
        <div className='TopPanel'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <ul className="TopPanel__nav">
                            { loggedIn
                                ? (
                                    <>
                                        <li><a href='/#' onClick={handleLogOut}>Log Out</a></li>
                                    </>
                                )
                                : (
                                    <>
                                        <li><Link to='/register'>Register</Link></li>
                                        <li><Link to='/login'>Log In</Link></li>
                                    </>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}