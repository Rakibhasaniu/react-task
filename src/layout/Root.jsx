import Card from "../components/Card/Card";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import cardImage1 from '../assets/images1.jpg';
import cardImage2 from '../assets/images2.jpg';
import cardImage3 from '../assets/images3.jpg';
import cardImage4 from '../assets/images4.jpg';
import { useState } from "react";
import Modal from "../components/modal";
const Root = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', description: '' });
    const cardsData = [
        { image: cardImage2, title: 'Kuakata', description: 'Kuakata is a town in southern Bangladesh ' },
        { image: cardImage3, title: 'Chittagong', description: 'One of the world oldest pwith a functional natural harbor for centuries' },
        { image: cardImage4, title: 'Patenga Sea Beach', description: 'With its pristine shoreline and mesmerizing views of the Bay of Bengal, this beach is a perfect retreat for nature lo...' },
        { image: cardImage1, title: 'Guliakhali Sea Beach', description: 'Its the most wonderful one-day visit. Due to mangrove type you will watch a sea beach having grasses in the bank, not the sand' },
    ];

    const openModal = (title, description) => {
        setModalContent({ title, description });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-5">
                {cardsData.map((card, index) => (
                    <Card
                        key={index}
                        image={card.image}
                        title={card.title}
                        description={card.description}
                        onClick ={()=> openModal(card.title,card.description)}
                    />
                ))}
            </div>
            <Modal 
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalContent.title}
        description={modalContent.description}
      />

        </div>
    );
};

export default Root;