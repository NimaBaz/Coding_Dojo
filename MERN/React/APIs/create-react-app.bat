mkdir %1
cd %1
mkdir server
npx create-react-app client
cd client
npm install react-bootstrap bootstrap
npm install axios