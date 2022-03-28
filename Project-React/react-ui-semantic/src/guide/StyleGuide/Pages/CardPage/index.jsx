import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Card, Icon, Image } from "semantic-ui-react";
import TempImg from "../../../../assets/images/temp/@matthew.png";

class FormPage extends Component {
    render() {
        return (
            <section className='g_sec'>
                <h2 className='g_h2'>Cards</h2>
                <div className='preview'>
                    <Card>
                        <Image src={TempImg} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Matthew</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2015</span>
                            </Card.Meta>
                            <Card.Description>
                                Matthew is a musician living in Nashville.
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Link to=''>
                                <Icon name='user' />
                                22 Friends
                            </Link>
                        </Card.Content>
                    </Card>
                </div>
            </section>
        )
    }
}

export default FormPage
