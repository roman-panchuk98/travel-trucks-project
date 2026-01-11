🚐 Travel Trucks

Travel Trucks is a web application for searching and renting campers. Users can browse the vehicle catalog, filter campers by location, type, and amenities, view detailed information for each camper, read reviews, and make bookings.

The project is implemented according to the technical specification using Next.js, TypeScript, Zustand, and React Query.

🔗 Demo

Live version: [https://travel-trucks-project-rho.vercel.app](https://travel-trucks-project-rho.vercel.app/)

🧩 Main Features

📋 Camper Catalog Viewing

🔍 Camper Filtering (performed on the backend):

by location

by vehicle type

by available amenities (AC, kitchen, bathroom, etc.)

➕ Pagination with a "Load More" button

❤️ Add campers to favorites (saved after page reload)

📄 Detailed Camper Page

🖼 Photo Gallery

⭐ User Reviews with ratings

📝 Booking Form with a notification for successful submission

⚡ Loader during asynchronous requests

🛠 Technologies

Next.js (App Router)

TypeScript

Zustand — global state (campers, filters, favorites)

@tanstack/react-query — API handling, caching, and pagination

Axios — HTTP requests

CSS Modules — styling

Vercel — deployment

📂 Routes

Route	Description
/	Home page with banner
/catalog	Camper catalog with filters
/catalog/:id	Individual camper page

📡 API

Main endpoints:

GET /campers — fetch a list of campers (with pagination and filters)

GET /campers/:id — fetch detailed camper information

❗ All filtering is performed on the backend, not on the frontend.

⚙️ Installation & Running Locally

Clone the repository:

git clone [https://github.com/your-username/travel-trucks.git](https://github.com/roman-panchuk98/travel-trucks-project)


Navigate to the project folder:

cd travel-trucks


Install dependencies:

npm install


Run the project locally:

npm run dev


Open in the browser:
http://localhost:3000

🧠 Architecture & Approach

Component-based approach

Global state via Zustand

Data fetching with React Query

Pagination and filtering synchronized with the backend

Follows DRY principles and clean code practices


👤 Author

Roman Panchuk
Frontend Developer
🇵🇱 Poland
