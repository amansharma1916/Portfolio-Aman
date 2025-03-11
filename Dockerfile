# Use Node.js as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the Vite app
RUN npm run build

# Use nginx to serve the built app
FROM nginx:alpine

# Copy built files from Vite's default output directory
COPY --from=0 /app/dist /usr/share/nginx/html

# Add nginx configuration to handle client-side routing
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

