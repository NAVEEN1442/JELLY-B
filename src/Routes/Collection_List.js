import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { RiSearchLine } from "react-icons/ri";
import CollectionCard from '../components/CollectionCard';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserCollection } from '../slices/collectionSlice';

function Collection_List() {
    const [clickedButton, setClickedButton] = useState("LOCAL");
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const collectionList = useSelector((state) => state.collection.collectionList);

    useEffect(() => {
        dispatch(fetchUserCollection());
    }, [dispatch]);

    // Filter the collections based on the search query
    const filteredCollections = collectionList.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='w-full h-screen'>
            <Navbar />

            <div className='p-1 flex tracking-[5px] items-center justify-evenly font-market border-2 rounded-[20px] m-12 bg-[#686868] h-[80px] w-[300px]'>
                <button onClick={() => setClickedButton("GLOBAL")} className={`rounded-[20px] h-[90%] w-[50%] ${clickedButton === "GLOBAL" ? "bg-[#7E7D7D]" : ""}`}>GLOBAL</button>
                <button onClick={() => setClickedButton("LOCAL")} className={`rounded-[20px] h-[90%] w-[50%] ${clickedButton === "LOCAL" ? "bg-[#7E7D7D]" : ""}`}>LOCAL</button>
            </div>

            <div className='pr-5 gap-[240px] font-market w-[100%] flex items-center justify-end h-[60px]'>
                <div className='border-2 flex items-center bg-[#949292] rounded-[10px] justify-between pl-2 w-[650px] h-[80%]'>
                    <div className='w-[12%] h-[90%] flex items-center justify-center'>
                        <RiSearchLine className='bg-[#7E7D7D] rounded-[5px] text-[black] w-[100%] h-[90%]' />
                    </div>
                    <input
                        placeholder='SEARCH FOR A COLLECTION'
                        className='rounded-[12px] outline-none bg-[#949292] w-[87%] h-[100%]'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <button onClick={() => { navigate("/addCollection") }} className='bg-[#98ABF1] text-[#272EB2] rounded-[12px] border-2 w-[150px] h-[90%]'>ADD NEW +</button>
            </div>

            <div className='h-[1px] w-[966px] mx-auto flex items-center gap-4 mt-6 bg-[white]'></div>

            <div className='flex gap-5 m-7 flex-wrap justify-start items-center'>
                {filteredCollections.length > 0 ? (
                    filteredCollections.map((item, index) => (
                        <div
                            key={index}
                            onClick={() =>
                                navigate(`/collection/${item._id}`, {
                                    state: {
                                        name: item.name,
                                        description: item.description,
                                        thumbnail: item.thumbnail,
                                        item_id: item._id,
                                    },
                                })
                            }
                        >
                            <CollectionCard
                                title={item.name}
                                description={item.description}
                                thumbnail={item.thumbnail}
                            />
                        </div>
                    ))
                ) : (
                    <p className='text-[red] flex w-[100%] font-market justify-center text-[30px]'>No Collection Exists</p>
                )}
            </div>
        </div>
    );
}

export default Collection_List;
