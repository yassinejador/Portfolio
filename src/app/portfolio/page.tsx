import Image from 'next/image';

const projects = [
  {
    title: 'Whiteboard App',
    description: 'Built a containerized Angular Spring Boot whiteboard app with Docker, backed by Oracle Database XE, delivering secure JWT-based access, optimized gallery search with pagination, and improved maintainability through clean architecture and DTO-driven APIs.',
    image: '/react.png', // Using existing image as placeholder
  },
  {
    title: 'Scopus Chatbot',
    description: 'Developed an AI-powered research assistant that retrieves academic data from the arXiv database using natural language queries, leveraging NLP, semantic search, and a modular architecture. Implemented unit tests with Pytest and automated testing through GitHub Actions CI/CD for reliable and maintainable code.',
    image: '/python.png', // Using existing image as placeholder
  },
  {
    title: 'Handwritten Digit Recognition',
    description: 'Built a machine learning pipeline (scikit-learn) to classify handwritten digits (0–9) with 96.7% accuracy. Implemented preprocessing, model training, and evaluation with reports and visualizations.',
    image: '/python.png', // Using existing image as placeholder
  },
  {
    title: 'Roommate Expense Tracker',
    description: 'Built a React Native Spring Boot app with Docker for roommate expense tracking, featuring JWT-secured APIs, role-based access, real-time updates via WebSockets, Kafka-driven notifications, PostgreSQL persistence, and implemented unit and integration tests using JUnit and Mockito for robust, reliable functionality.',
    image: '/react.png', // Using existing image as placeholder
  },
  {
    title: 'Office Mail Management Web App',
    description: 'Developed a Next.js web app for managing institutional mail, with features like tracking, archiving, search, and role-based access.',
    image: '/typescript.png', // Using existing image as placeholder
  },
  {
    title: 'Hotel Booking App',
    description: 'Built a responsive Laravel-based hotel booking app with secure authentication, user reviews, and an admin dashboard for managing rooms and reservations.',
    image: '/laravel.png', // Using existing image as placeholder
  },
];

export default function Portfolio() {
  return (
    <div className="container mx-auto p-8 md:p-16">
      <h1 className="text-4xl font-bold text-center mb-12">My Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">{project.title}</h2>
              <p className="text-gray-600 text-base">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

