"use client"

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Ham from "../dash_components/Ham";
import Sidebar from "../dash_components/Sidebar";
import Button from "../../includes/Button";
import { Input } from '@chakra-ui/react'



export default function Settings(){
    return(
        <section>
            <div className="left">
               <Ham/>
               <Sidebar/>
            </div>
            <div className='right  pl-60'>
                <div className='top'>
                    <h1>Settings</h1>
                    <p>Manage your account settings and preference here </p>
                </div>
                <section className="middle">
                    <div className='top'>
                        <Tabs variant='enclosed'>
                            <TabList>
                                <Tab>Account</Tab>
                                <Tab>Billings</Tab>
                                <Tab>Plan</Tab>
                                <Tab>Frequency</Tab>
                                <Tab>Feedback</Tab>
                            </TabList>
                            <TabPanels>
                                 <TabPanel>
                                     <p>Account</p>
                                </TabPanel>
                                <TabPanel>
                                <h2>Payment Methods</h2>
                                <p>update yor account and billing deatails</p>
                                <div className='left'>
                                    <h3>Card details</h3>
                                    <p>update yor account and billing deatails</p>
                                    <Button href="#" title="Add another card"/>
                                </div>
                                <div className='right'>
                                    <Input placeholder='Name on your card' />
                                    <Input placeholder='Expiry' />
                                    <Input placeholder='Card number' />
                                    <Input placeholder='CVV' />
                                </div>
                                <div className='bottom'>
                                    <h3>Billing History</h3>
                                    <p>see your billing history here</p>
                                </div>
                                </TabPanel>
                                <TabPanel>
                                 <p>Plan</p>
                                </TabPanel>
                                <TabPanel>
                                 <p>Frequency</p>
                                </TabPanel>
                                <TabPanel>
                                 <p>Feedback</p>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </div>
                </section>
            </div>
        </section>
    );
}
