echo "add this file to .gitignore and remove this line"
# Add local env vars to this file
export CLIENT_URL="http://localhost:3010"
export MONGO_URL="mongodb://127.0.0.1:3003/orionlocal"
orion start --shell
