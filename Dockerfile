# Use an official Python runtime as a parent image
FROM node:9.8.0-alpine

ADD . /app

# Set the working directory to /app
WORKDIR /app

EXPOSE 4200

# Install any needed packages
RUN npm install yarn -g
RUN yarn global add @angular/cli npm

# Run app.py when the container launches
CMD ["ng", "serve", "-H", "0.0.0.0"]