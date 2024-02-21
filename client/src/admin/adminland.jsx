import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import "./admincss/adminland.css"

import { Barchart } from "./barchart";
import Piechart from "./piechart";
import jsonData from '../../src/admin/workerData.json';
import Navbar from './navbar';

import Photos from "./photos";
import contactsimg from './adminimages/contacts.jpg';
import subscribedimg from './adminimages/subscribed.jpeg';
import pendingimg from './adminimages/pending.png';
import blockedimg from './adminimages/blocked2.jpeg';
import customerimg from './adminimages/customerimg.jpg';
import serviceproviderimg from './adminimages/serviceproviderimg.jpg';
import Card from "./card";
// import Line from "./line";


export default function AdminLand() {
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        // Filter the data based on a 5-star rating
        const fiveStarData = jsonData.filter(item => item.rating === '5');
        setFilteredData(fiveStarData);
    }, []);
    return (
        <div className="body">
            <Navbar />
            {/* <Line/> */}
            <div className="flex flex-wrap justify-evenly ">
                <div className="w-full md:w-7/12 border rounded-lg bg-white">
                    <h1 className="text-xl font-bold mb-3">% of Subscribers Registered</h1>
                    <Barchart />
                </div>
                <div className="w-full md:w-4/12 border rounded-lg bg-white">
                    <h1 className="text-xl font-bold mb-3">% of Types of Services</h1>
                    <Piechart />
                </div>
            </div>

            <div className="four-cards flex flex-row border justify-evenly">
                <div className="w-1/4 m-4 px-7 py-4 boxes border contacts grid grid-cols-3 gap-4 rounded-xl">
                    <div className="name col-span-2 text-xl font-bold">All Contacts</div>
                    <span className="contact-number rounded-full text-center text-2xl font-bold">30</span>
                    <div className="contact-img row-end-3">
                        <img src={contactsimg} alt="Contacts" className="rounded-full" style={{ width: '50px', height: '50px' }} />
                    </div>
                    <div className="contact-photos col-span-2">
                        <Photos />
                    </div>
                </div>
                <div className="w-1/4 m-4 px-7 py-4 boxes border subscribed grid grid-cols-3 gap-4 rounded-xl">
                    <div className="name col-span-2 text-xl font-bold">Subsrcibed</div>
                    <div className="subscribed-number rounded-full text-center text-2xl font-bold">20</div>
                    <div className="contact-img row-end-3">
                        <img src={subscribedimg} alt="Contacts" className="rounded-full" style={{ width: '50px', height: '50px' }} />
                    </div>
                    <div className="contact-photos col-span-2">
                        <Photos />
                    </div>
                </div>
                <div className="w-1/4 m-4 px-7 py-4 boxes border pending grid grid-cols-3 gap-4 rounded-xl">
                    <div className="name col-span-2 text-xl font-bold">Pending Approval</div>
                    <div className="pending-number rounded-full text-center text-2xl font-bold">5</div>
                    <div className="contact-img row-end-3">
                        <img src={pendingimg} alt="Contacts" className="rounded-full" style={{ width: '50px', height: '50px' }} />
                    </div>
                    <div className="contact-photos col-span-2">
                        <Photos />
                    </div>
                </div>
                <div className="w-1/4 m-4 px-7 py-4 boxes border blocked grid grid-cols-3 gap-4 rounded-xl">
                    <div className="name col-span-2 text-xl font-bold">Blocked</div>
                    <div className="blocked-number rounded-full text-center text-2xl font-bold">6</div>
                    <div className="contact-img row-end-3">
                        <img src={blockedimg} alt="Contacts" className="rounded-full" style={{ width: '50px', height: '50px' }} />
                    </div>
                    <div className="contact-photos col-span-2">
                        <Photos />
                    </div>
                </div>
            </div>


            <div className="border overflow-x-auto whitespace-no-wrap">
                <div className="flex">
                    {filteredData.map((item) => (
                        <div key={item._id} className="w-1/4 flex-none mx-2">
                            <div className="rounded-2xl border overflow-hidden mx-3">
                                <Card
                                    image={item.image}
                                    name={item.name}
                                    rating={item.rating}
                                    phone={item.phone}
                                    zone={item.Zone}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="bg-gray-900 p-3 my-2 mx-5 rounded-3 text-center">
    <h2 className="m-2 text-white pb-4">Manage Your Subscribers</h2>
    <div className="grid grid-cols-2 gap-4 justify-items-center">
        <Link className="bg-white text-black mx-5 mb-3 rounded-lg overflow-hidden" to="/admincustomer">
            <div className="aspect-w-1 aspect-h-1">
                <img src={customerimg} className="object-cover h-full w-full" alt="..." />
            </div>
            <div className="p-4">
                <h5 className="text-center">CUSTOMERS</h5>
            </div>
        </Link>
        <Link className="bg-white text-black mx-5 mb-3 rounded-lg overflow-hidden" to="/adminworker">
            <div className="aspect-w-1 aspect-h-1">
                <img src={serviceproviderimg} className="object-cover h-full w-full" alt="..." />
            </div>
            <div className="p-4">
                <h5 className="text-center">Workers</h5>
            </div>
        </Link>
    </div>
</div>






        </div>
    )
}