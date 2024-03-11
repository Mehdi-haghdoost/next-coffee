import React from 'react'

function Testimonial({username,body,profile}) {
    return (
        <div class="testimonial-item">
            <div class="d-flex align-items-center mb-3">
                <img class="img-fluid" src={profile} alt="" />
                <div class="ml-3">
                    <h4>{username}</h4>
                    <i>Profession</i>
                </div>
            </div>
            <p class="m-0">{body}</p>
            <hr />
        </div>
    )
}

export default Testimonial