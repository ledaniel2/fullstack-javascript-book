# Use the official lightweight Node.js 18 image.
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the current directory contents into the container
COPY . .

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run the application when the container launches
CMD ["node", "app.js"]
