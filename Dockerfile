FROM node:latest

# install node
RUN apt-get -qq update
RUN apt-get -qq install -y nginx

# install own configuration
RUN rm /etc/nginx/sites-enabled/default && rm /etc/nginx/sites-available/default
COPY ./conf/floschnell /etc/nginx/sites-available/floschnell.conf
RUN ln -s /etc/nginx/sites-available/floschnell.conf /etc/nginx/sites-enabled/

# get start script
COPY ./conf/start.sh /var/start.sh
RUN chmod +x /var/start.sh

# copy new dist
WORKDIR /var/www/website
COPY package.json /var/www/website/package.json
RUN npm install --silent
COPY ./dist /var/www/website/dist
COPY ./favicon.ico /var/www/website/dist/favicon.ico

EXPOSE 80
CMD [ "/var/start.sh" ]