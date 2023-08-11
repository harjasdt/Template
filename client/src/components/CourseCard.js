import React, { useState } from 'react';
import axios from "axios"
export default function CourseCard() {
  const storedData = JSON.parse(localStorage.getItem("userData"));
  const courses = [
    {
      title: 'Beginner',
      description: 'This level is for those who are new to the topic.',
      flashcards: [
        {
          cardTitle: 'Course 1',
          completed: false,
        },
        {
          cardTitle: 'Course 2',
          completed: false,
        },
        {
          cardTitle: 'Course 3',
          completed: false,
        },
      ],
    },
    {
      title: 'Intermediate',
      description: 'This level is for those who are new to the topic.',
      flashcards: [
        {
          cardTitle: 'Course 1',
          completed: false,
        },
        {
          cardTitle: 'Course 2',
          completed: false,
        },
        {
          cardTitle: 'Course 3',
          completed: false,
        },
      ],
    },
    {
      title: 'Advance',
      description: 'This level is for those who are new to the topic.',
      flashcards: [
        {
          cardTitle: 'Course 1',
          completed: false,
        },
        {
          cardTitle: 'Course 2',
          completed: false,
        },
        {
          cardTitle: 'Course 3',
          completed: false,
        },
      ],
    },
    // ... (Intermediate and Advanced levels)
  ];

  const [selectedLevel, setSelectedLevel] = useState('');

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
  };

  const handleGoToCourse = (courseTitle, cardTitle) => {
    console.log(`Navigate to course: ${courseTitle}, Card: ${cardTitle}`);
  };

  const handleMarkCompleted = (courseTitle, cardTitle) => {
    console.log(`Mark card completed: ${courseTitle}, Card: ${cardTitle}`);
    axios
    .post("http://127.0.0.1:8000/api/progress-update/",{
      email:storedData.email,
    })
    .then((response)=>{
      console.log(response);
    })
  };

  return (
    <div>
      <div>
        <p className='text-2xl text-[#424642] font-bold ml-6'>Recommended Courses</p>
        <div className="border border-gray-300 my-3"></div>
      </div>
      <div className="p-4">
  <select
    value={selectedLevel}
    onChange={(e) => handleLevelChange(e.target.value)}
    className="border border-gray-300 rounded-md p-2 mb-4 text-white bg-[#536162] hover:[#]"
  >
    <option value="">Select Course Level</option>
    {courses.map((course) => (
      <option key={course.title} value={course.title}>
        {course.title}
      </option>
    ))}
  </select>

        {selectedLevel !== '' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses
              .find((course) => course.title === selectedLevel)
              .flashcards.map((flashcard, flashcardIndex) => (
                <div
                  key={flashcardIndex}
                  className="bg-[#F3F4ED] p-4 rounded-lg shadow-md border border-gray-300"
                >
                  <h2 className="text-xl text-[#424642] font-semibold mb-2">
                    {flashcard.cardTitle}
                  </h2>
                  <p className="text-gray-600 mb-4">{courses.find(course => course.title === selectedLevel).description}</p>
                  <div className="border border-gray-300 mb-2"></div>
                  <div className="flex justify-between space-x-4">
                    <button
                      onClick={() => handleGoToCourse(selectedLevel, flashcard.cardTitle)}
                      className="bg-[#536162] hover:bg-[#C06014] text-white px-4 py-2 rounded transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-[#C06014]"
                    >
                      Go to Course
                    </button>
                    <button
                      onClick={() => handleMarkCompleted(selectedLevel, flashcard.cardTitle)}
                      className="bg-[#536162] hover:bg-[#C06014] text-white px-4 py-2 rounded transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-[#C06014]"
                    >
                      Mark as Completed
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
