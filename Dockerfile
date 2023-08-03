# Use the Node.js 16.8 image with Alpine Linux 3.14 as the base image
FROM node:16.8-alpine3.14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install project dependencies
RUN npm ci --only=production

# Copy the rest of the project files to the working directory
COPY . .

# Expose the port on which your Nest.js app is running (if applicable)
EXPOSE 3000

# Set the command to start your Nest.js app
CMD ["npm", "run", "start:prod"]
