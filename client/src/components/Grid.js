import React from 'react';
import Card1 from "../assets/card1.jpg"
import Card2 from "../assets/card2.jpg"
import Card3 from "../assets/card3.jpg"

export default function Services() {
  const cards = [
    {
      title: 'Personalized Courses',
      description: 'Embark on a personalized learning adventure with our platform that tailors finance courses to your unique strengths and areas of improvement. Through a comprehensive finance quiz, we assess your knowledge and skills, enabling us to curate a selection of courses perfectly aligned with your proficiency level. Embark on a learning experience like no other, where your progress and success are our top priorities.',
      imageUrl: Card1,
    },
    {
      title: 'Virtual Stock Simulation',
      description: 'Introducing an exciting opportunity to explore the world of stock trading risk-free: our Virtual Stock Simulation platform. Here is your chance to step into the shoes of an investor, armed with virtual capital to invest in real stocks. Gain hands-on experience navigating the dynamic stock market without any financial risk. Watch your investments grow in real time and learn valuable insights into market trends and strategies.',
      imageUrl: Card2,
    },
    {
      title: 'Articles and Calculators',
      description: 'Dive into a wealth of knowledge with this section. Stay ahead of the curve as we provide insightful articles on the hottest financial topics, keeping you informed and empowered to make informed decisions. But thats not all our platform also equips you with a range of interactive calculator tools. rom budgeting and savings calculators to investment and loan planners, you will have the resources at your fingertips to make accurate financial assessments.',
      imageUrl: Card3,
    },
  ];

  return (
    <section name="offer" className=" pt-[70px] py-10">
      <h1 className="text-4xl font-bold text-[#424642] font-sans from-neutral-500 text-center">What do we Offer?</h1>
      <div className="container mx-auto px-10 py-6 flex flex-col items-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`border-2 shadow-xl shadow-grey-300 border-grey-100 relative rounded-lg overflow-hidden flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-8 max-w-4xl`}
          >
            {/* Image section (shown on medium and larger screens) */}
            <div className="w-1/2 hidden md:block">
              <img
                className="w-full h-full object-cover"
                src={card.imageUrl}
                alt={card.title}
              />
            </div>
            
            {/* Text section */}
            <div className="w-full bg-[#F3F4ED] p-4 flex flex-col justify-center">
              {/* Text content */}
              <h3 className="text-[#C06014] text-xl font-extrabold text-center md:text-left">{card.title}</h3>
              <p className="text-[#5F6769] text-justify md:text-left">{card.description}</p>

              {/* Image (shown on small screens) */}
              <div className="mt-4 md:hidden">
                <img
                  className="w-full h-full object-cover"
                  src={card.imageUrl}
                  alt={card.title} 

                  
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
