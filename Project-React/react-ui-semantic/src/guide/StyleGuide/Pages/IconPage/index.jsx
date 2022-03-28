import React, {Component} from 'react'
import {Icon, Image} from "semantic-ui-react";
import avatar36_01 from "../../../../assets/images/demo/avata-profile-36-01.svg";
import avatar48_01 from "../../../../assets/images/demo/avata-profile-48-01.svg";
import avatar56_01 from "../../../../assets/images/demo/avata-profile-56-01.svg";
import avatar80_01 from "../../../../assets/images/demo/avata-profile-80-01.png";
import avatar80_02 from "../../../../assets/images/demo/avata-profile-80-02.png";
import avatar100_01 from "../../../../assets/images/demo/avata-profile-100-01.png";
import avatar100_02 from "../../../../assets/images/demo/avata-profile-100-02.png";

class IconPage extends Component {
    render() {
        return (
            <section className='g_sec'>
                <h2 className='g_h2'>Icons/Images</h2>
                <div className='preview'>
                    <Icon loading name='spinner' />
                    <Icon className=''/>
                </div>
                <h3 className='g_h3'>Avata</h3>
                <div className='preview'>
                    {/* Demo */}
                    <Image src={avatar36_01} avatar className='size-36' />
                    <Image src={avatar48_01} avatar className='size-48' />
                    <Image src={avatar56_01} avatar className='size-56' />
                    <Image src={avatar80_01} avatar className='size-80' />
                    <Image src={avatar80_02} avatar className='size-80' />
                    <Image src={avatar100_01} avatar className='size-100' />
                    <Image src={avatar100_02} avatar className='size-100' />
                </div>
                <h3 className='g_h3'>Profile</h3>
                <div className='preview'>
                    {/* Demo */}
                    <span className='avata-profile horizontal'>
                        <Image src={avatar36_01} avatar className='size-36' />
                        <b className='name'>김써니</b>
                    </span>
                    <span className='avata-profile vertical'>
                        <Image src={avatar48_01} avatar className='size-48' />
                        <b className='name'>김써니</b>
                    </span>
                </div>
            </section>
        )
    }
}

export default IconPage
