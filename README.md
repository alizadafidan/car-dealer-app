# Car Dealer App

## Overview

The Car Dealer App is a web application built using Next.js that allows users to select a vehicle make and model year to view available models. The app fetches vehicle data from an external API and displays the information in a user-friendly interface.

## Features

- **Select Vehicle Make**: Users can select from a list of available vehicle makes.
- **Select Model Year**: Users can choose a model year from a dropdown menu.
- **Dynamic Model Display**: Based on the selected make and year, users can view the corresponding vehicle models.
- **Responsive Design**: The application is designed to be responsive and user-friendly on both desktop and mobile devices.

## Technologies Used

- **Next.js**: A React framework for building server-side rendered applications.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: For styling the application with utility-first CSS.
- **Environment Variables**: Used for storing sensitive information like API URLs.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- npm

### Installation

- Clone the repository
- npm install
- Create a .env.local file in the root directory => NEXT_PUBLIC_API_BASE_URL= baseUrl/api/vehicles/
- npm run dev
