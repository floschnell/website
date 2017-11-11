FROM node:latest

# install node
RUN apt-get -qq update && \
    apt-get -qq install -y nginx

# install dependencies
WORKDIR /var/www/website
COPY package.json /var/www/website/
RUN npm install --silent

# build new website
COPY src /var/www/website/src
COPY webpack.*config.js /var/www/website/
RUN npm run build
COPY favicon.ico /var/www/website/dist/

# install own configuration
COPY conf/floschnell /etc/nginx/sites-available/
RUN rm /etc/nginx/sites-enabled/default && rm /etc/nginx/sites-available/default && \
    ln -s /etc/nginx/sites-available/floschnell /etc/nginx/sites-enabled/
COPY conf/nginx.conf /etc/nginx/

# get start script
COPY conf/start.sh /var/
RUN chmod +x /var/start.sh

EXPOSE 80

CMD [ "/var/start.sh" ]