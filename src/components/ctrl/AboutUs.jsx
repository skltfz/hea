import React from 'react'

class AboutUs extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {
                staff: [
                    {
                        fullname: "keanu wu",
                        role: "designer"
                    }, {
                        fullname: "sam mak",
                        role: "developer the god"
                    }
                ]
            }
        }
    }

    render() {
        return (
            <div className="aboutUs">
                <div>{this.state.data.staff[0].fullname}({this.state.data.staff[0].role})</div>
                <div>{this.state.data.staff[1].fullname}({this.state.data.staff[1].role})</div>
            </div>
        );
    }
}

export default AboutUs;
