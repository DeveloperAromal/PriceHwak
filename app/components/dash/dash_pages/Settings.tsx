"use client"

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Ham from "../dash_components/Ham";
import Sidebar from "../dash_components/Sidebar";
import Button from "../../includes/Button";



export default function Settings(){
    return(
        <section>
            <div className="left">
               <Ham/>
               <Sidebar/>
            </div>
            <div className='right  pl-60 pb-2'>
                <div className='top border-b-2 pb-3'>
                    <h1 className='text-4xl pt-4'>Settings</h1>
                    <p className='pt-3'>Manage your account settings and preference here </p>
                </div>
                <section className="middle">
                    <div className='top pt-4 pb-3'>
                        <Tabs variant='enclosed'>
                            <TabList className="space-x-10 text-2xl">
                                <Tab className=''>Account</Tab>
                                <Tab>Billings</Tab>
                                <Tab>Plan</Tab>
                                <Tab>Frequency</Tab>
                                <Tab>Feedback</Tab>
                            </TabList>
                            <TabPanels>
                                 <TabPanel>
                                     <p>Account</p>
                                </TabPanel>
                                <TabPanel className='pt-2'>
                                <div className='pt-2 pb-4 border-b-1'>
                                    <h2 className='text-2xl pt-2'>Payment Methods</h2>
                                    <p className='border-b-2 pb-4'>update yor account and billing deatails</p>
                                </div>
                                <div className='container flex border-b-2 pb-3'>
                                    <div className='left pt-10 pr-10 '>
                                        <h3 className="text-4xl pb-3">Card details</h3>
                                        <p className='pr-4 pb-2'>update your account and billing deatails</p>
                                        <Button href="#" title="Add another card" className=''/>
                                    </div>
                                    <div className='  flex-wrap pl-40 pt-10 space-x-6'>
                                    <input placeholder='Name on your card ' className='pl-5 mb-5 p-2 ml-20 '/>
                                    <input placeholder='Expiry' className='pl-10 p-2'/>
                                    <input placeholder='Card number' className='pl-5 p-2 mt-3 ml-40'/>
                                    <input placeholder='CVV' className='pl-5 p-2'/>
                                    </div>
                                </div>
                                <div className='bottom pt-4 '>
                                    <h3 className='text-2xl'>Billing History</h3>
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



