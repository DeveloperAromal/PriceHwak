"use client"

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Ham from "../dash_components/Ham";
import Sidebar from "../dash_components/Sidebar";
import Button from "../../includes/Button";



export default function Settings() {
    return (
        <section className="flex flex-col md:flex-row">
            {/* Left Sidebar */}
            <div className="md:w-1/4">
                <Ham />
                <Sidebar />
            </div>

            {/* Right Content */}
            <div className="md:w-3/4 pl-4 pr-4 pb-2">
                {/* Top Section */}
                <div className="border-b-2 pb-3">
                    <h1 className="text-4xl pt-4">Settings</h1>
                    <p className="pt-3">Manage your account settings and preferences here</p>
                </div>

                {/* Middle Section */}
                <section className="pt-4 pb-3">
                    <Tabs variant="enclosed">
                        <TabList className="space-x-10 text-2xl">
                            <Tab className="hover:underline">Account</Tab>
                            <Tab className="hover:underline">Billings</Tab>
                            <Tab className="hover:underline">Plan</Tab>
                            <Tab className="hover:underline">Frequency</Tab>
                            <Tab className="hover:underline">Feedback</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <p>Account</p>
                            </TabPanel>
                            <TabPanel>
                                {/* Billing Tab */}
                                <div className="pt-2 pb-4 border-b-2">
                                    <h2 className="text-2xl pt-2">Payment Methods</h2>
                                    <p className="border-b-2 pb-4">Update your account and billing details</p>
                                </div>
                                <div className="container flex border-b-2 pb-3">
                                    <div className="md:w-1/2 pt-10 pr-10">
                                        <h3 className="text-4xl pb-3">Card Details</h3>
                                        <p className="pb-2">Update your account and billing details</p>
                                        <Button href="#" title="Add another card" />
                                    </div>
                                    <div className="md:w-1/2 pt-10 pl-10">
                                        <div className="flex flex-col md:flex-row gap-10 mb-4 pl-2">
                                            <input placeholder="Name on your card" className="pl-2 pr-10 rounded p-2 text-gray-800" />
                                            <input placeholder="Expiry" className="pr-10 p-2 rounded text-gray-800" />
                                        </div>
                                        <div className="flex flex-col md:flex-row gap-10 mb-4 pl-2">
                                            <input placeholder="Card Number" className="pr-10 p-2 rounded text-gray-800" />
                                            <input placeholder="CVV" type="password" className="pr-10 rounded p-2 text-gray-800" />
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <h3 className="text-2xl">Billing History</h3>
                                    <p>See your billing history here</p>
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
                </section>
            </div>
        </section>
    );
}
