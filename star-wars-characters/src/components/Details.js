import React, { Component } from 'react';
import { withRouter } from "react-router";
import './Details.css';
class Details extends Component {

    state = {
        isLoading: true,
        details: null,
        error: false
    }



    componentDidMount() {
        this.detailsSearch();
    }

    componentDidUpdate(prevProps) {
        const oldDetails = prevProps.match.params;
        const incomingDetails = this.props.match.params;
        console.log(oldDetails, incomingDetails);
        if (oldDetails !== incomingDetails) {
            this.detailsSearch();
        }
    }

    detailsSearch = () => {
        console.log("this.props", this.props.match.params);
        const {id} = this.props.match.params;
        console.log("id ", id);
   

        fetch(`https://swapi.dev/api/people/${id}/`)
            .then(response => response.json())
            .then(data => {
                console.log(data);         
                this.setState({        
                    isLoading: false,
                    details: data

                })
            })
            .catch(() => {
                this.setState({
                    isLoading: false,
                    error: true
                })
            })
    }


    render() {

        const styleObj = {
            fontSize: 25,
            color: "white",
            textAlign: "center",
            paddingTop: "70px",
        }

        const { isLoading, error, details} = this.state;
        let content;
        if (details) {
            content = (<div className='details'>
                <h2> Character Details:</h2>
                <ul>
                    <li style={styleObj}>Name: {details.name}</li>
                    <li style={styleObj}>Gender: {details.gender}</li>
                    <li style={styleObj}>Birth year: {details.birth_year}</li>
                    <li style={styleObj}>Height: {details.height}</li>
                    <li style={styleObj}>Hair color: {details.hair_color}</li>
                    <li style={styleObj}> Skin color: {details.skin_color}</li>
                    <li style={styleObj}>Eye color: {details.eye_color}</li>
                    <li style={styleObj}>Mass: {details.mass}</li>
                   
                </ul>
            </div>)

        }


        return (

            <div >
                 {isLoading && <p>Loading...</p>}
                {error && <p>{error}</p>}

                {content}
            </div>
        )

    }

}

export default withRouter(Details);