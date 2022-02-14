import React, {Component} from 'react'
import {Card, Icon, Image} from "semantic-ui-react";
import TempImg from "../../../../resources/images/temp/@matthew.png";

class FormPage extends Component {
    render() {
        return (
            <section id="cardSec">
                <h2 className="g-h2">Cards</h2>
                <div className="preview" style={{overflow: 'visible'}}>
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
                        <a href='#'>
                            <Icon name='user' />
                            22 Friends
                        </a>
                        </Card.Content>
                    </Card>
                </div>
            </section>
        )
    }
}

export default FormPage
