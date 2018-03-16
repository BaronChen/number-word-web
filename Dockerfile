# Use an official Python runtime as a parent image
FROM node:8.9.3

RUN \
  apt-get update && \
  apt-get install -y python python-dev python-pip python-virtualenv && \
  rm -rf /var/lib/apt/lists/*

ADD . /app

# Set the working directory to /app
WORKDIR /app

EXPOSE 4200

# Install any needed packages
RUN npm install yarn -g
RUN yarn global add @angular/cli npm

# Run app.py when the container launches
CMD ["ng", "serve", "-H", "0.0.0.0"]