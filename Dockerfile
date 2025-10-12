# Use a lightweight Node.js default image
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/issuance-service

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy application files
COPY . .

# Set environment variables for production
ENV NODE_ENV=production

# Expose the application port
EXPOSE 3000

# Command to start the application
CMD ["node", "dist/index.js"]