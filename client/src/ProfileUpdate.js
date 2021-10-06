import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { Form, Input, Button, TextArea } from "semantic-ui-react";


function ProfileUpdate({ user, setUser, isClicked, setIsClicked, enableDarkMode}) {
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState(user.name);
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [profilePicture, setProfilePicture] = useState(user.profile_picture);
    const [bio, setBio] = useState(user.bio);

    function onSubmit(e) {
        e.preventDefault();
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                username: username,
                email: email,
                profile_picture: profilePicture,
                bio: bio,
            }),
        })
        .then((r) => r.json())
        .then((user) => {
            if (user.errors) {
                setErrors(user.errors);
            } else {
                setUser(user);
                setErrors([])
                setIsClicked((prevIsClicked)=>!prevIsClicked)
            }
        });
    }
    
    const error = errors.map(error => {
        return error
    }).join(", ")

    return (
        <>
            <div
                style={{
                    marginLeft:"auto",
                    marginRight:"auto" ,
                    paddingBottom: "12px",
                    disply: "flex",
                    maxWidth:200
                }}
            >
            
                    <div style={{color:"red"}}>
                        <h3>
                            {error}
                        </h3>
                    </div>
                
                {enableDarkMode ? (
                    <Form inverted onSubmit={onSubmit}>
                        <Form.Field
                            label="Name"
                            value={name}
                            control={Input}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <Form.Field
                            label="Username"
                            value={username}
                            control={Input}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <Form.Field
                            label="Email"
                            value={email}
                            control={Input}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <Form.Field
                            label="Profile Picture"
                            value={profilePicture}
                            autoComplete="on"
                            control={Input}
                            onChange={(e) => setProfilePicture(e.target.value)}
                        />

                        <Form.Field
                            label="Bio"
                            value={bio}
                            autoComplete="off"
                            control={TextArea}
                            onChange={(e) => setBio(e.target.value)}
                        />

                        <Button color="green">Update</Button>
                    </Form>
                ) : (
                    <Form onSubmit={onSubmit}>
                        <Form.Field
                            label="Name"
                            value={name}
                            control={Input}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <Form.Field
                            label="Username"
                            value={username}
                            control={Input}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <Form.Field
                            label="Email"
                            value={email}
                            control={Input}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <Form.Field
                            label="Profile Picture"
                            value={profilePicture}
                            autoComplete="on"
                            control={Input}
                            onChange={(e) => setProfilePicture(e.target.value)}
                        />

                        <Form.Field
                            label="Bio"
                            value={bio}
                            autoComplete="off"
                            control={TextArea}
                            onChange={(e) => setBio(e.target.value)}
                        />

                        <Button color="green">Update</Button>
                    </Form>
                )}
                    
            </div>
        </>
    );
}

export default ProfileUpdate;
