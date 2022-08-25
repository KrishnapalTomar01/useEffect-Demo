import { Fragment } from "react";

const UserDisplay = ({ users }) => {
    return (
        <div>
            {
                users.map((user) => {
                    return (
                        <Fragment key={user.id}>
                            <div>
                                <h1>Name = {user.name}</h1>
                                <h2>Email = {user.email}</h2>
                            </div>
                            <hr />
                        </Fragment>
                    )
                })
            }
        </div>
    );
}

export default UserDisplay;