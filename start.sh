if [ ! -f package.json ]; then
  echo "Error: package.json not found!"
  exit 1
fi
npm install
npm run start