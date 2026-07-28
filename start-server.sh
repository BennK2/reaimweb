#!/bin/bash
echo "Installing dependencies..."
npm install
echo "Building the Next.js application for production..."
npm run build
echo "Starting the production server..."
npm run start
