FROM node
 
COPY . .
 
EXPOSE 80
 
CMD ["node", "app.js"]